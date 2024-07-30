// ThriftStoreRegistration.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { db } from './firebaseConfig'; // Ensure the correct path to firebaseConfig
import { collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../_layout';

interface StoreInfo {
  storeName: string;
  storeDescription: string;
  storeAddress: string;
  storeCity: string;
}

interface OwnerInfo {
  ownerName: string;
  ownerContact: string;
  ownerEmail: string;
}

interface BusinessInfo {
  registrationNumber: string;
  gstNumber: string;
  panNumber: string;
  businessType: string;
}

interface BankDetails {
  accountNumber: string;
  accountHolderName: string;
  bankName: string;
  ifscCode: string;
}

interface Errors {
  storeInfo: Partial<Record<keyof StoreInfo, string>>;
  ownerInfo: Partial<Record<keyof OwnerInfo, string>>;
  businessInfo: Partial<Record<keyof BusinessInfo, string>>;
  bankDetails: Partial<Record<keyof BankDetails, string>>;
}
type ThriftstoreRegNavigationProp = StackNavigationProp<RootStackParamList, 'App'>;
const ThriftStoreRegistration = () => {
  const navigation = useNavigation<ThriftstoreRegNavigationProp>();
  const [step, setStep] = useState(1);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0));
  const [storeInfo, setStoreInfo] = useState<StoreInfo>({
    storeName: '',
    storeDescription: '',
    storeCity: '',
    storeAddress: '',
  });
  const [ownerInfo, setOwnerInfo] = useState<OwnerInfo>({
    ownerName: '',
    ownerContact: '',
    ownerEmail: '',
  });
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({
    registrationNumber: '',
    gstNumber: '',
    panNumber: '',
    businessType: '',
  });
  const [bankDetails, setBankDetails] = useState<BankDetails>({
    accountNumber: '',
    accountHolderName: '',
    bankName: '',
    ifscCode: '',
  });

  const [errors, setErrors] = useState<Errors>({
    storeInfo: {},
    ownerInfo: {},
    businessInfo: {},
    bankDetails: {},
  });

  const validateFields = (
    fields: Partial<StoreInfo> | Partial<OwnerInfo> | Partial<BusinessInfo> | Partial<BankDetails>,
    section: keyof Errors
  ): boolean => {
    const newErrors: Record<string, string> = {};
    Object.keys(fields).forEach((key) => {
      if (!fields[key as keyof typeof fields]) {
        newErrors[key] = 'This is a required field';
      }
    });
    setErrors((prevErrors) => ({ ...prevErrors, [section]: newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const saveToFirestore = async () => {
    try {
      await addDoc(collection(db, 'stores'), {
        storeInfo,
        ownerInfo,
        businessInfo,
        bankDetails,
      });
      console.log('Store data saved successfully!');
    } catch (error) {
      console.error('Error saving store data: ', error);
    }
  };

  const handleNext = () => {
    switch (step) {
      case 1:
        if (validateFields(storeInfo, 'storeInfo')) {
          setStep(2);
        }
        break;
      case 2:
        if (validateFields(ownerInfo, 'ownerInfo')) {
          setStep(3);
        }
        break;
      case 3:
        if (validateFields(businessInfo, 'businessInfo')) {
          setStep(4);
        }
        break;
      case 4:
        if (validateFields(bankDetails, 'bankDetails')) {
          setStep(5);
        }
        break;
      case 5:
        setStep(6);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 3,
          useNativeDriver: true,
        }).start();
        saveToFirestore();
        navigation.navigate('SellScreen')
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    if (step > 1 && step < 6) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Store Name"
                value={storeInfo.storeName}
                onChangeText={(text) => setStoreInfo({ ...storeInfo, storeName: text })}
              />
              <Text style={styles.requiredMark}>*</Text>
            </View>
            {errors.storeInfo.storeName && <Text style={styles.errorText}>{errors.storeInfo.storeName}</Text>}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Store Description"
                value={storeInfo.storeDescription}
                onChangeText={(text) => setStoreInfo({ ...storeInfo, storeDescription: text })}
              />
              <Text style={styles.requiredMark}>*</Text>
            </View>
            {errors.storeInfo.storeDescription && <Text style={styles.errorText}>{errors.storeInfo.storeDescription}</Text>}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Store Address"
                value={storeInfo.storeAddress}
                onChangeText={(text) => setStoreInfo({ ...storeInfo, storeAddress: text })}
              />
              <Text style={styles.requiredMark}>*</Text>
            </View>
            {errors.storeInfo.storeAddress && <Text style={styles.errorText}>{errors.storeInfo.storeAddress}</Text>}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="City"
                value={storeInfo.storeCity}
                onChangeText={(text) => setStoreInfo({ ...storeInfo, storeCity: text })}
              />
              <Text style={styles.requiredMark}>*</Text>
            </View>
            {errors.storeInfo.storeCity && <Text style={styles.errorText}>{errors.storeInfo.storeCity}</Text>}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 2:
        return (
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Owner Name"
                value={ownerInfo.ownerName}
                onChangeText={(text) => setOwnerInfo({ ...ownerInfo, ownerName: text })}
              />
              <Text style={styles.requiredMark}>*</Text>
            </View>
            {errors.ownerInfo.ownerName && <Text style={styles.errorText}>{errors.ownerInfo.ownerName}</Text>}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Owner Contact"
                value={ownerInfo.ownerContact}
                onChangeText={(text) => setOwnerInfo({ ...ownerInfo, ownerContact: text })}
              />
              <Text style={styles.requiredMark}>*</Text>
            </View>
            {errors.ownerInfo.ownerContact && <Text style={styles.errorText}>{errors.ownerInfo.ownerContact}</Text>}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Owner Email"
                value={ownerInfo.ownerEmail}
                onChangeText={(text) => setOwnerInfo({ ...ownerInfo, ownerEmail: text })}
              />
              <Text style={styles.requiredMark}>*</Text>
            </View>
            {errors.ownerInfo.ownerEmail && <Text style={styles.errorText}>{errors.ownerInfo.ownerEmail}</Text>}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleBack}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 3:
        return (
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Registration Number"
                value={businessInfo.registrationNumber}
                onChangeText={(text) => setBusinessInfo({ ...businessInfo, registrationNumber: text })}
              />
              <Text style={styles.requiredMark}>*</Text>
            </View>
            {errors.businessInfo.registrationNumber && <Text style={styles.errorText}>{errors.businessInfo.registrationNumber}</Text>}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="GST Number"
                value={businessInfo.gstNumber}
                onChangeText={(text) => setBusinessInfo({ ...businessInfo, gstNumber: text })}
              />
              <Text style={styles.requiredMark}>*</Text>
            </View>
            {errors.businessInfo.gstNumber && <Text style={styles.errorText}>{errors.businessInfo.gstNumber}</Text>}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="PAN Number"
                value={businessInfo.panNumber}
                onChangeText={(text) => setBusinessInfo({ ...businessInfo, panNumber: text })}
              />
              <Text style={styles.requiredMark}>*</Text>
            </View>
            {errors.businessInfo.panNumber && <Text style={styles.errorText}>{errors.businessInfo.panNumber}</Text>}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Business Type"
                value={businessInfo.businessType}
                onChangeText={(text) => setBusinessInfo({ ...businessInfo, businessType: text })}
              />
              <Text style={styles.requiredMark}>*</Text>
            </View>
            {errors.businessInfo.businessType && <Text style={styles.errorText}>{errors.businessInfo.businessType}</Text>}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleBack}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 4:
        return (
          <View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Account Number"
                value={bankDetails.accountNumber}
                onChangeText={(text) => setBankDetails({ ...bankDetails, accountNumber: text })}
              />
              <Text style={styles.requiredMark}>*</Text>
            </View>
            {errors.bankDetails.accountNumber && <Text style={styles.errorText}>{errors.bankDetails.accountNumber}</Text>}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Account Holder Name"
                value={bankDetails.accountHolderName}
                onChangeText={(text) => setBankDetails({ ...bankDetails, accountHolderName: text })}
              />
              <Text style={styles.requiredMark}>*</Text>
            </View>
            {errors.bankDetails.accountHolderName && <Text style={styles.errorText}>{errors.bankDetails.accountHolderName}</Text>}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Bank Name"
                value={bankDetails.bankName}
                onChangeText={(text) => setBankDetails({ ...bankDetails, bankName: text })}
              />
              <Text style={styles.requiredMark}>*</Text>
            </View>
            {errors.bankDetails.bankName && <Text style={styles.errorText}>{errors.bankDetails.bankName}</Text>}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="IFSC Code"
                value={bankDetails.ifscCode}
                onChangeText={(text) => setBankDetails({ ...bankDetails, ifscCode: text })}
              />
              <Text style={styles.requiredMark}>*</Text>
            </View>
            {errors.bankDetails.ifscCode && <Text style={styles.errorText}>{errors.bankDetails.ifscCode}</Text>}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleBack}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
        case 5:
            return (
              <View style={styles.container}>
          <View style={styles.headerContainer}>
            {/* <View style={styles.semicircle}></View> */}
            <Text style={styles.header1}>REVIEW DETAILS</Text>
          </View>
          
          <View style={styles.orderSummaryContainer}>
            <Text style={styles.orderSummaryTitle}>Details</Text>
            <Text style={styles.orderSummaryText}>
              Store Name:<Text style={styles.highlightText}> {storeInfo.storeName}</Text>
            </Text>
            <Text style={styles.orderSummaryText}>
              Store Description: <Text style={styles.highlightText}>{storeInfo.storeDescription}</Text>
            </Text>
            <Text style={styles.orderSummaryText}>Store City: <Text style={styles.highlightText}>{storeInfo.storeCity}</Text></Text>
        <Text style={styles.orderSummaryText}>Store Address: <Text style={styles.highlightText}>{storeInfo.storeAddress}</Text></Text>
        <Text style={styles.orderSummaryText}>Owner Name: <Text style={styles.highlightText}>{ownerInfo.ownerName}</Text></Text>
        <Text style={styles.orderSummaryText}>Owner Contact: <Text style={styles.highlightText}>{ownerInfo.ownerContact}</Text></Text>
        <Text style={styles.orderSummaryText}>Owner Email: <Text style={styles.highlightText}>{ownerInfo.ownerEmail}</Text></Text>
        <Text style={styles.orderSummaryText}>Business Registration Number: <Text style={styles.highlightText}>{businessInfo.registrationNumber}</Text></Text>
        <Text style={styles.orderSummaryText}>GST Number: <Text style={styles.highlightText}>{businessInfo.gstNumber}</Text></Text>
        <Text style={styles.orderSummaryText}>PAN Number: <Text style={styles.highlightText}>{businessInfo.panNumber}</Text></Text>
        <Text style={styles.orderSummaryText}>Business Type: <Text style={styles.highlightText}>{businessInfo.businessType}</Text></Text>
        <Text style={styles.orderSummaryText}>Bank Account Number: <Text style={styles.highlightText}>{bankDetails.accountNumber}</Text></Text>
        <Text style={styles.orderSummaryText}>Account Holder Name: <Text style={styles.highlightText}>{bankDetails.accountHolderName}</Text></Text>
        <Text style={styles.orderSummaryText}>Bank Name: <Text style={styles.highlightText}>{bankDetails.bankName}</Text></Text>
        <Text style={styles.orderSummaryText}>IFSC Code: <Text style={styles.highlightText}>{bankDetails.ifscCode}</Text></Text>
      </View>
      
      <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleBack}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
    </View>
        );
        case 6:
        return (
          <Animated.View style={[styles.confirmationContainer, { opacity: fadeAnim }]}>
            <Animated.View style={[styles.animatedCircle, { transform: [{ scale: scaleAnim }] }]} />
            <Text style={styles.confirmationText}>Your thrift store is successfully registered!</Text>
            <Text style={styles.welcomeText}>Welcome to the Myntra family!</Text>
            </Animated.View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
    {step !== 5 && step !== 6 && <Text style={styles.header}>Register Your Thrift Store</Text>}
    {renderStep()}
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff5f8',
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 25,
        marginTop:34,
      },
      inputContainer: {
        position: 'relative',
        marginBottom: 20,
      },
      input: {
        borderWidth: 1,
        borderColor: '#e50051',
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#fff',
      },
      requiredMark: {
        position: 'absolute',
        top: -17,
        right: 5,
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      },
      button: {
        flex: 1,
        marginHorizontal: 5,
        backgroundColor: '#F9426E', // Button background color
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      },
      buttonText: {
        color: '#fff', // Button text color
        fontSize: 16,
        fontWeight: 'bold',
      },
      reviewTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop:34,
      },
      reviewText: {
        fontSize: 16,
        marginBottom: 5,
      },
      errorText: {
        color: 'red',
        marginBottom: 10,
      },
      confirmationContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      },
      confirmationText: {
        fontSize: 24,
        color: '#e50051',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      welcomeText: {
        fontSize: 20,
        color: '#e50051',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
      },
      animatedCircle: {
        position: 'absolute',
        width: 300, // Increased size
        height: 300, // Increased size
        borderRadius: 150, // Adjusted to match size
        backgroundColor: '#ffebee',
      },
      headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
      },
      header1: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 30,
        textAlign: 'center',
        color: '#F9426E',
      },
      orderSummaryContainer: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        paddingVertical: 20,
        marginBottom: 20,
        marginTop:20,
        paddingHorizontal:10,
      },
      orderSummaryTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      orderSummaryText: {
        fontSize: 16,
        marginBottom: 5,
      },
      highlightText: {
        color: '#F9426E',
      },
      totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
      },
      trackOrderButton: {
        backgroundColor: '#F9426E',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      },
      trackOrderButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
      },             
});

export default ThriftStoreRegistration;
