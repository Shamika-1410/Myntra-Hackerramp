import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../_layout';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library
import * as Font from 'expo-font';

type TermsandConditionsNavigationProp = NavigationProp<RootStackParamList, 'SellScreen'>;

const loadFonts = async () => {
    await Font.loadAsync({
        'Italiana-Regular': require('../../assets/fonts/Italiana-Regular.ttf'),
    });
};

const TermsandConditions = () => {
    const [agreed, setAgreed] = useState(false);
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const navigation = useNavigation<TermsandConditionsNavigationProp>();

    useEffect(() => {
        loadFonts().then(() => setFontsLoaded(true));
    }, []);

    const handleAgree = () => {
        if (agreed) {
            navigation.navigate('Stores');
        } else {
            Alert.alert('Agreement Required', 'You must agree to the terms and conditions to proceed.');
        }
    };

    if (!fontsLoaded) {
        return <View style={styles.loadingContainer}><Text>Loading fonts...</Text></View>;
    }

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
                    To connect with a thrift store through Myntra, you must be at least 18 years old and have a registered Myntra account.
                </Text>
                
                <Text style={styles.sectionTitle}>3. User Responsibilities</Text>
                <Text style={styles.text}>
                    You are responsible for providing accurate information when connecting with a thrift store. Any false or misleading information may result in the termination of your account.
                </Text>
                
                <Text style={styles.sectionTitle}>4. Product Quality and Descriptions</Text>
                <Text style={styles.text}>
                    While we strive to ensure the accuracy of product descriptions and quality, Myntra is not responsible for any discrepancies or issues that may arise. It is your responsibility to verify the condition and authenticity of thrifted items.
                </Text>
                
                <Text style={styles.sectionTitle}>5. Pricing and Payments</Text>
                <Text style={styles.text}>
                    All transactions are conducted directly between you and the thrift store. Myntra is not responsible for any disputes regarding pricing or payments.
                </Text>
                
                <Text style={styles.sectionTitle}>6. Returns and Refunds</Text>
                <Text style={styles.text}>
                    Returns and refunds are subject to the policies of the individual thrift store. Please review their policies before making a purchase.
                </Text>
                
                <Text style={styles.sectionTitle}>7. Prohibited Items</Text>
                <Text style={styles.text}>
                    The sale of illegal, counterfeit, or stolen goods is strictly prohibited. Any violation will result in immediate termination of your account and potential legal action.
                </Text>
                
                <Text style={styles.sectionTitle}>8. User Conduct</Text>
                <Text style={styles.text}>
                    You must conduct yourself with integrity and respect towards thrift stores and other users. Harassment, abusive language, or fraudulent activity will not be tolerated.
                </Text>
                
                <Text style={styles.sectionTitle}>9. Account Termination</Text>
                <Text style={styles.text}>
                    Myntra reserves the right to terminate your account at any time for violations of these terms and conditions.
                </Text>
                
                <Text style={styles.sectionTitle}>10. Changes to Terms</Text>
                <Text style={styles.text}>
                    Myntra may update these terms and conditions from time to time. You will be notified of any significant changes, and continued use of our services constitutes acceptance of the new terms.
                </Text>

                <Text style={styles.sectionTitle}>11. Limitation of Liability</Text>
                <Text style={styles.text}>
                    Myntra is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the thrift store connection service.
                </Text>
                
                <Text style={styles.sectionTitle}>12. Contact Us</Text>
                <Text style={styles.text}>
                    If you have any questions or concerns about these terms and conditions, please contact our support team.
                </Text>
                
                <View style={styles.agreeContainer}>
                    <TouchableOpacity style={styles.checkbox} onPress={() => setAgreed(!agreed)}>
                        {agreed && <Icon name="check" size={20} color="#FFF" style={styles.checkIcon} />}
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
        padding: 20,
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
        fontFamily: 'Italiana-Regular',
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    uncheckedBox: {
        width: '100%',
        height: '100%',
    },
    checkedBox: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F9426E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkIcon: {
        position: 'absolute',
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
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
});

export default TermsandConditions;