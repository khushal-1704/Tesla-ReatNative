import React from 'react'
import { View, Text, Button, ImageBackground } from 'react-native'
import styles from './styles'

const CustomOrder = ({ navigation }) => {
    console.log(navigation)
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/Model3.jpeg')} style={styles.image} />
        </View>
    )
}

export default CustomOrder; 