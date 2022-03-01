/* import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem';

const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
            />
        </View>
    )
}

export default CarsList; */

import React from 'react';
import { View, Text, FlatList, Dimensions, } from 'react-native';
import CarItem from "../CarItem";

import styles from './styles';
import cars from './cars';

const CarsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                snapToAlignment={'end'}
                decelerationRate={'normal'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

export default CarsList;