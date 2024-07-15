//tops.tsx
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationHandler } from '../types';

interface TopsProps {
    onNavigate: NavigationHandler;
}

const Tops: React.FC<TopsProps> = ({ onNavigate }) => {
    const cropTopProduct = [
        { id: 1, image: require('../../assets/images/c1.jpeg'), price: '₹499', originalPrice: '₹599' },
        { id: 2, image: require('../../assets/images/c2.jpeg'), price: '₹549', originalPrice: '₹649' },
        { id: 3, image: require('../../assets/images/c3.jpeg'), price: '₹449', originalPrice: '₹549' },
        { id: 4, image: require('../../assets/images/c4.jpeg'), price: '₹599', originalPrice: '₹699' },
        { id: 5, image: require('../../assets/images/c5.jpeg'), price: '₹499', originalPrice: '₹599' },
    ];

    const graphicTeesProduct = [
        { id: 1, image: require('../../assets/images/g1.jpeg'), price: '₹499', originalPrice: '₹599' },
        { id: 2, image: require('../../assets/images/g2.jpeg'), price: '₹549', originalPrice: '₹649' },
        { id: 3, image: require('../../assets/images/g3.jpeg'), price: '₹449', originalPrice: '₹549' },
        { id: 4, image: require('../../assets/images/g4.jpeg'), price: '₹599', originalPrice: '₹699' },
        { id: 5, image: require('../../assets/images/g5.jpeg'), price: '₹499', originalPrice: '₹599' },
    ];

    const handleCropTopsVisibility = () => {
        onNavigate('CropTops');
    };

    const handleGraphicTeesVisibility = () => {
        onNavigate('GraphicTees');
    };

    return (
        <View style={styles.container}>
            <View style={styles.sectionContainer}>
                <Text style={styles.text}>#CropTops</Text>
                <View style={styles.productsContainer}>
                    <View style={styles.largeProduct}>
                        <Image source={cropTopProduct[0].image} style={styles.productImageLarge} />
                        <View style={styles.priceContainer}>
                            <Text style={styles.originalPrice}>{cropTopProduct[0].originalPrice}</Text>
                            <Text style={styles.price}>{cropTopProduct[0].price}</Text>
                        </View>
                    </View>
                    <View style={styles.smallProductsContainer}>
                        {cropTopProduct.slice(1).map((product) => (
                            <View key={product.id} style={styles.smallProduct}>
                                <Image source={product.image} style={styles.productImageSmall} />
                                <View style={styles.priceContainer}>
                                    <Text style={styles.originalPrice}>{product.originalPrice}</Text>
                                    <Text style={styles.price}>{product.price}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
                <TouchableOpacity style={styles.bgBtn} onPress={handleCropTopsVisibility}>
                    <Text style={styles.text}>View All Products</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.sectionContainer}>
                <Text style={styles.text}>#GraphicTees</Text>
                <View style={styles.productsContainer}>
                    <View style={styles.largeProduct}>
                        <Image source={graphicTeesProduct[0].image} style={styles.productImageLarge} />
                        <View style={styles.priceContainer}>
                            <Text style={styles.originalPrice}>{graphicTeesProduct[0].originalPrice}</Text>
                            <Text style={styles.price}>{graphicTeesProduct[0].price}</Text>
                        </View>
                    </View>
                    <View style={styles.smallProductsContainer}>
                        {graphicTeesProduct.slice(1).map((product) => (
                            <View key={product.id} style={styles.smallProduct}>
                                <Image source={product.image} style={styles.productImageSmall} />
                                <View style={styles.priceContainer}>
                                    <Text style={styles.originalPrice}>{product.originalPrice}</Text>
                                    <Text style={styles.price}>{product.price}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
                <TouchableOpacity style={styles.bgBtn} onPress={handleGraphicTeesVisibility}>
                    <Text style={styles.text}>View All Products</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    sectionContainer: {
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: '#F3F1FE',
        borderRadius: 10,
        padding: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    productsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    largeProduct: {
        width: '50%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        marginBottom: 15,
        height: 400,
    },
    productImageLarge: {
        width: '100%',
        height: '90%', // Adjust height as per your design
        resizeMode: 'cover',
    },
    smallProductsContainer: {
        width: '48%',
        justifyContent: 'space-between',
    },
    smallProduct: {
        width: 180,
        backgroundColor: '#FFF',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        marginBottom: 15,
        height: 400 / 4,
    },
    productImageSmall: {
        width: '100%',
        height: '70%', // Adjust height as per your design
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
    footer: {
        backgroundColor: '#FFF',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgBtn: {
        backgroundColor: '#f2eded',
        borderRadius: 5,
        alignItems: 'center',
    },
});

export default Tops;