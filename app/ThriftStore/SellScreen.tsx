import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as Font from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../_layout';

type SellScreenNavigationProp = StackNavigationProp<RootStackParamList, 'App'>;

const SellScreen: React.FC = () => {
  const navigation = useNavigation<SellScreenNavigationProp>();
if (!navigation) {
  return null; // or handle the lack of navigation context
}
  const [images, setImages] = useState<string[]>([]);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productAddress, setProductAddress] = useState('');
  const [productCondition, setProductCondition] = useState('');
  const [productPincode, setProductPincode] = useState('');
  const [productFabric, setProductFabric] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [frequencyUsed, setFrequencyUsed] = useState('');
  const [timesWashed, setTimesWashed] = useState('');
  const [selectedFrequencyLabel, setSelectedFrequencyLabel] = useState('');
  const [selectedTimesWashedLabel, setSelectedTimesWashedLabel] = useState('');

  const loadFonts = async () => {
    await Font.loadAsync({
      'Italiana-Regular': require('../../assets/fonts/Italiana-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  const importImages = async () => {
    try {
      if (images.length >= 4) {
        alert('You can only upload 4 images: front, back, and sides.');
        return;
      }
  
      let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }
  
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 1,
      });
  
      if (!result.canceled && result.assets) {
        const selectedImages = result.assets.map((asset) => asset.uri);
        setImages((prevImages) => [...prevImages, ...selectedImages].slice(0, 4));
      }
    } catch (error) {
      console.error('Error picking images:', error);
  }
  
    
  };

  const handleDeleteImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleProductSubmit = () => {
    if (
      productName === '' ||
      productDescription === '' ||
      productAddress === '' ||
      productPincode === '' ||
      productCondition === '' ||
      productFabric === '' ||
      purchaseDate === '' ||
      frequencyUsed === '' ||
      timesWashed === '' ||
      images.length === 0
    ) {
      alert('Please fill out all required fields and select at least one image.');
      return;
    } if (parseInt(frequencyUsed) > 8) {
      alert('Warning: Product may not be suitable for thrifting if worn more than 8 times.');
    }  setProductName('');
    setProductDescription('');
    setProductAddress('');
    setProductPincode('');
    setProductCondition('');
    setProductFabric('');
    setPurchaseDate('');
    setFrequencyUsed('');
    setTimesWashed('');
    setSelectedFrequencyLabel('');
    setSelectedTimesWashedLabel('');
    setImages([]); navigation.navigate('ConfirmPage');
}

  const handleFrequencyChange = (itemValue: string | number) => {
    setFrequencyUsed(itemValue.toString());
    const label = frequencyLabels.find((label) => label.value === itemValue)?.label;
    setSelectedFrequencyLabel(label || '');
  };

  const handleTimesWashedChange = (itemValue: string | number) => {
    setTimesWashed(itemValue.toString());
    const label = timesWashedLabels.find((label) => label.value === itemValue)?.label;
    setSelectedTimesWashedLabel(label || '');
  };

  const frequencyLabels = [
    { label: '0', value: '0' },
    { label: '1-2', value: '1' },
    { label: '5-6', value: '5' },
    { label: '> 8', value: '8' },
  ];

  const timesWashedLabels = [
    { label: '0', value: '0' },
    { label: '1-2', value: '1' },
    { label: '> 5', value: '5' },
    { label: '> 10', value: '10' },
  ];

  if (!fontsLoaded) {
    return null;
  }
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Thrift Away Your Product</Text>
            <TextInput
                style={styles.input}
                placeholder="Product Name"
                value={productName}
                onChangeText={setProductName}
            />
            <TextInput
                style={[styles.input, { height: 80 }]}
                placeholder="Product Description"
                multiline
                numberOfLines={4}
                value={productDescription}
                onChangeText={setProductDescription}
            />
            <TextInput
                style={[styles.input, { height: 80 }]}
                placeholder="Pickup Address"
                multiline
                numberOfLines={4}
                value={productAddress}
                onChangeText={setProductAddress}
            />
            <TextInput
                style={styles.input}
                placeholder="Pickup Pincode"
                value={productPincode}
                onChangeText={setProductPincode}
            />
            <TextInput
                style={styles.input}
                placeholder="Product Condition"
                value={productCondition}
                onChangeText={setProductCondition}
            />
            <TextInput
                style={styles.input}
                placeholder="Product Material/Fabric"
                value={productFabric}
                onChangeText={setProductFabric}
            />
            <TextInput
                style={styles.input}
                placeholder="Purchase Date (MM/DD/YYYY)"
                value={purchaseDate}
                onChangeText={setPurchaseDate}
            />
            <View style={styles.labelContainer}>
                <Text style={styles.label}>Frequency Used</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={frequencyUsed}
                    onValueChange={(itemValue) => handleFrequencyChange(itemValue)}
                >
                    {frequencyLabels.map((item) => (
                        <Picker.Item key={item.value} label={item.label} value={item.value} />
                    ))}
                </Picker>
                <Text style={styles.text}>{selectedFrequencyLabel}</Text>
            </View>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>Times Washed</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={timesWashed}
                    onValueChange={(itemValue) => handleTimesWashedChange(itemValue)}
                >
                    {timesWashedLabels.map((item) => (
                        <Picker.Item key={item.value} label={item.label} value={item.value} />
                    ))}
                </Picker>
                <Text style={styles.text}>{selectedTimesWashedLabel}</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.chooseImageButton} onPress={importImages}>
                    <Text style={styles.chooseImageText}>Choose Product Images</Text>
                </TouchableOpacity>
                <Text style={styles.imageCountText}>{images.length} images selected</Text>
                <View style={styles.imagesContainer}>
                    {images.map((uri, index) => (
                        <View key={index} style={styles.imageWrapper}>
                            <Image source={{ uri }} style={styles.selectedImage} />
                            <TouchableOpacity
                                style={styles.deleteButton}
                                onPress={() => handleDeleteImage(index)}
                            >
                                <Text style={styles.deleteButtonText}>X</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
                <TouchableOpacity style={styles.submit} onPress={() => handleProductSubmit()}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF6F5',
    },
    title: {
        fontFamily: 'Italiana-Regular',
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 50,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#F9426E',
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 0,
        marginTop:10,
    },
    label: {
        fontSize: 16,
        marginRight: 10,
    },
    btnContainer: {
        alignItems: 'center',
    },
    chooseImageButton: {
        backgroundColor: '#F9426E',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    chooseImageText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    imageCountText: {
        marginBottom: 30,
        fontSize: 16,
        color: '#F9426E',
    },
    imagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    imageWrapper: {
        position: 'relative',
        margin: 5,
    },
    selectedImage: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginBottom:20,
    },
    deleteButton: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: '#F9426E',
        borderRadius: 50,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteButtonText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold',
    },
    picker: {
        height: 50,
        width: 150,
        borderWidth: 1,
        borderColor: '#F9426E',
        borderRadius: 5,
        marginBottom: 20,
        marginTop:10,
    },
    submit: {
        backgroundColor: '#F9426E',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 20,
        marginBottom:40,
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
    },
    modalContent: {
        backgroundColor: '#FFF6F5',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    text : {
      fontSize:20,
    }
});

export default SellScreen;