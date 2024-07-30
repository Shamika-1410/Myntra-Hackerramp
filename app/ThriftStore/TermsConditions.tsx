import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../_layout'; 

type TermsConditionsNavigationProp = NavigationProp<RootStackParamList, 'SellScreen'>;

const TermsConditions = () => {
  const [agreed, setAgreed] = useState(false);
  const navigation = useNavigation<TermsConditionsNavigationProp>();

  const handleAgree = () => {
    if (agreed) {
      navigation.navigate('ThriftStoreRegistration');
    } else {
      Alert.alert('Agreement Required', 'You must agree to the terms and conditions to proceed.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Terms & Conditions</Text>
        
        <Text style={styles.sectionTitle}>1. Introduction</Text>
        <Text style={styles.text}>
          Welcome to our thrift store registration process. By registering your store on our app, you agree to the following terms and conditions.
        </Text>
        
        <Text style={styles.sectionTitle}>2. Eligibility</Text>
        <Text style={styles.text}>
          Only registered businesses are eligible to register. You must provide valid business registration documents during the sign-up process.
        </Text>
        
        <Text style={styles.sectionTitle}>3. Store Listing</Text>
        <Text style={styles.text}>
          You are responsible for the accuracy of your store listing, including but not limited to store name, address, and product descriptions.
        </Text>
        
        <Text style={styles.sectionTitle}>4. Product Authenticity and Condition</Text>
        <Text style={styles.text}>
          Thrift stores must ensure all products are genuine, sanitized, and in good condition.
        </Text>
        
        <Text style={styles.sectionTitle}>5. Pricing and Payments</Text>
        <Text style={styles.text}>
          You are responsible for setting the prices of your products. Payments will be processed through our secure payment gateway, and you will receive payouts according to our payment schedule.
        </Text>
        
        <Text style={styles.sectionTitle}>6. Returns and Refunds</Text>
        <Text style={styles.text}>
          You must comply with our returns and refunds policy. Customers are entitled to return products within a specified period if they do not meet the described condition.
        </Text>
        
        <Text style={styles.sectionTitle}>7. Prohibited Items</Text>
        <Text style={styles.text}>
          The sale of illegal, counterfeit, or stolen goods is strictly prohibited. Any violation will result in immediate termination of your account.
        </Text>
        
        <Text style={styles.sectionTitle}>8. User Conduct</Text>
        <Text style={styles.text}>
          You must conduct your business with integrity and respect towards customers and other sellers. Harassment, abusive language, or fraudulent activity will not be tolerated.
        </Text>
        
        <Text style={styles.sectionTitle}>9. Account Termination</Text>
        <Text style={styles.text}>
          We reserve the right to terminate your account at any time for violations of these terms and conditions.
        </Text>
        
        <Text style={styles.sectionTitle}>10. Changes to Terms</Text>
        <Text style={styles.text}>
          We may update these terms and conditions from time to time. You will be notified of any significant changes, and continued use of our services constitutes acceptance of the new terms.
        </Text>
        
        <Text style={styles.sectionTitle}>11. Contact Us</Text>
        <Text style={styles.text}>
          If you have any questions or concerns about these terms and conditions, please contact our support team.
        </Text>
        
        <View style={styles.agreeContainer}>
          <TouchableOpacity style={styles.checkbox} onPress={() => setAgreed(!agreed)}>
            <View style={agreed ? styles.checkedBox : styles.uncheckedBox}></View>
          </TouchableOpacity>
          <Text style={styles.agreeText}>I agree to the terms and conditions</Text>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleAgree}>
          <Text style={styles.buttonText}>Agree and Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    backgroundColor: '#FFF',
  },
  scrollContainer: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
    color: '#F9426E',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#DA7297',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  agreeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#DA7297',
    marginRight: 10,
  },
  uncheckedBox: {
    width: '100%',
    height: '100%',
  },
  checkedBox: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F9426E',
  },
  agreeText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#F9426E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TermsConditions;