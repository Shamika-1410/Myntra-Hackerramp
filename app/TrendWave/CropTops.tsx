import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, ListRenderItem } from 'react-native';
import { Product } from '../types'; 

const cropTopProduct: Product[] = [
    { id: 1, image: require('../../assets/images/c1.jpeg'), price: '₹499', originalPrice: '₹599' },
    { id: 2, image: require('../../assets/images/c2.jpeg'), price: '₹549', originalPrice: '₹649' },
    { id: 3, image: require('../../assets/images/c3.jpeg'), price: '₹449', originalPrice: '₹549' },
    { id: 4, image: require('../../assets/images/c4.jpeg'), price: '₹599', originalPrice: '₹699' },
    { id: 5, image: require('../../assets/images/c5.jpeg'), price: '₹499', originalPrice: '₹599' },
];

const CropTops = () => {
    const renderProduct: ListRenderItem<Product> = ({ item }) => (
        <View style={styles.product}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.priceContainer}>
                <Text style={styles.originalPrice}>{item.originalPrice}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CROP TOPS</Text>
            <FlatList
                data={cropTopProduct}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40,
        fontFamily:'Italiana-Regular',
    },
    list: {
        paddingBottom: 10,
    },
    row: {
        justifyContent: 'space-between',
    },
    product: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        marginBottom: 10,
        width: '48%',
        marginRight:10,
    },
    productImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    originalPrice: {
        textDecorationLine: 'line-through',
        color: '#a5a5a5',
    },
    price: {
        fontWeight: 'bold',
        color: '#ff6346',
    },
});

export default CropTops;