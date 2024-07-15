//Content.tsx

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, ListRenderItem, Modal, Animated } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../_layout';
type Item = {
  id: string;
  title: string;
  image: any; // Adjust this type according to your image source type
};

const data: Item[] = [
  { id: '1', title: 'Drip Daily', image: require('../../assets/images/DripDaily.png') },
  { id: '2', title: 'Travel Fits', image: require('../../assets/images/TravelFits.png') },
  { id: '3', title: 'Trendy Threads', image: require('../../assets/images/TrendyThreads.png') },
  { id: '4', title: 'Glam Goals', image: require('../../assets/images/GlamGoals.png') },
];

const Content: React.FC = () => {
  type ContentNavigationProp = StackNavigationProp<RootStackParamList, 'App'>;
  const navigation = useNavigation<ContentNavigationProp>();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [notificationStates, setNotificationStates] = useState<{ [key: string]: boolean }>({});
  const animatedValues = useRef(data.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    Animated.stagger(100, animatedValues.map(animValue =>
      Animated.timing(animValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      })
    )).start();
  }, []);

  const handleImageClick = (image: any , title : string) => {
    setSelectedImage(image);
    setModalVisible(true);
  };
  const handleClick = (title : string) => {
    if(title === 'Drip Daily'){
      navigation.navigate('Channel');
    }
  }

  const toggleNotification = (id: string ) => {
    setNotificationStates(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const renderItem: ListRenderItem<Item> = ({ item, index }) => {
    const animatedStyle = {
      transform: [
        {
          translateY: animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: [50, 0], // Adjust the starting and ending positions as needed
          }),
        },
      ],
      opacity: animatedValues[index],
    };

    return (
      <Animated.View style={[styles.item, animatedStyle]}>
        <TouchableOpacity style={styles.itemContent} onPress={() => handleClick(item.title)}>
          <TouchableOpacity onPress={() => handleImageClick(item.image,item.title)}>
            <Image source={item.image} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity onPress={() => toggleNotification(item.id)}>
            <Ionicons
              name={notificationStates[item.id] ? "notifications-off-outline" : "notifications-outline"}
              size={24}
              color="black"
              style={styles.icon}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
      />
      {selectedImage && (
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
            <View style={styles.modalContent}>
              <Image source={selectedImage} style={styles.modalImage} />
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: 'white',
    padding: 16,
    paddingVertical: 10,
    borderRadius: 80,
    marginVertical: 12,
    shadowColor: '#F9426E',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  title: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    marginLeft: 'auto',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 250,
  },
  modalImage: {
    width: '85%',
    height: '85%',
    resizeMode: 'contain',
    borderRadius: 20,
  },
});

export default Content;




// type Item = {
//   id: string;
//   title: string;
//   image: any; // You can use a more specific type if you have it
// };

// const data: Item[] = [
//   { id: '1', title: 'Drip Daily', image: require('../../assets/images/DripDaily.png') },
//   { id: '2', title: 'Travel Fits', image: require('../../assets/images/TravelFits.png') },
//   { id: '3', title: 'Trendy Threads', image: require('../../assets/images/TrendyThreads.png') },
//   { id: '4', title: 'Glam Goals', image: require('../../assets/images/GlamGoals.png') },
// ];

// const Content: React.FC = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedImage, setSelectedImage] = useState<any>(null);
//   const [notificationStates, setNotificationStates] = useState<{ [key: string]: boolean }>({});

//   const handleImageClick = (image: any) => {
//     setSelectedImage(image);
//     setModalVisible(true);
//   };

//   const toggleNotification = (id: string) => {
//     setNotificationStates(prevState => ({
//       ...prevState,
//       [id]: !prevState[id]
//     }));
//   };

//   const renderItem: ListRenderItem<Item> = ({ item }) => (
//     <TouchableOpacity style={styles.item}>
//       <View style={styles.itemContent}>
//         <TouchableOpacity onPress={() => handleImageClick(item.image)}>
//           <Image source={item.image} style={styles.image} />
//         </TouchableOpacity>
//         <Text style={styles.title}>{item.title}</Text>
//         <TouchableOpacity onPress={() => toggleNotification(item.id)}>
//           <Ionicons
//             name={notificationStates[item.id] ? "notifications-off-outline" : "notifications-outline"}
//             size={24}
//             color="black"
//             style={styles.icon}
//           />
//         </TouchableOpacity>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         contentContainerStyle={styles.container}
//       />
//       {selectedImage && (
//         <Modal
//           visible={modalVisible}
//           transparent={true}
//           animationType="fade"
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
//             <View style={styles.modalContent}>
//               <Image source={selectedImage} style={styles.modalImage} />
//             </View>
//           </TouchableOpacity>
//         </Modal>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     paddingHorizontal: 20,
//   },
//   item: {
//     backgroundColor: 'white',
//     padding: 16,
//     paddingVertical: 10,
//     borderRadius: 80,
//     marginVertical: 12,
//     shadowColor: '#F9426E',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   itemContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   image: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 16,
//   },
//   title: {
//     flex: 1,
//     fontSize: 18,
//     // fontWeight: 'bold',
//   },
//   icon: {
//     marginLeft: 'auto',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     width: '80%',
//     height: '80%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 250,
//   },
//   modalImage: {
//     width: '85%',
//     height: '85%',
//     resizeMode: 'contain',
//     borderRadius: 20, // Add border radius here
//   },
// });

// export default Content;