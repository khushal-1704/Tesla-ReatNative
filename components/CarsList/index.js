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

            />
        </View>
    );
};

export default CarsList;