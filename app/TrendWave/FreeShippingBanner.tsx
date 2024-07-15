import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const FreeShippingBanner = () => {
    return (
        <View style={styles.bannerContainer}>
            <Text style={styles.bannerText}>GET FREE SHIPPING</Text>
            <Text style={styles.bannerSubText}>ON ALL ORDERS</Text>
            <Image
                source={require('../../assets/images/myntralogo.png')}
                style={styles.bannerImage}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    bannerContainer: {
        flexDirection: 'row',
        gap:5,
        alignItems: 'center',
        backgroundColor: '#1E90FF', 
        paddingHorizontal:5,
        borderRadius: 35,
    },
    bannerText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    bannerSubText: {
        color: '#FFFFFF',
        fontSize: 12,
    },
    bannerImage: {
        width: 40,
        height: 50,
        resizeMode: 'contain',
    },
});

export default FreeShippingBanner;