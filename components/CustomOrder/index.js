import React, { useState } from 'react'
import { View, Text, Button, Image, Pressable } from 'react-native'
import styles from './styles'
import StyleButton from '../StyledButton'

const CustomOrder = ({ navigation }) => {
    const [total, setTotal] = useState('$69,420')
    console.log(navigation)
    const handlePress = () => {
        console.warn('booking confirmed. Congo')
    }
    const date = new Date()
    console.log(date)
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/teslaSmall.png')} style={styles.image} />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.model}>Model 3</Text>
                <Text style={styles.delTime}>Est. Delivery:{ }</Text>
            </View>
            <View style={styles.upgradeContainer}>
                <Text style={styles.upTyres}>Upgrade Tyres</Text>
                <View style={styles.tyreButtonContainer}>
                    <Image
                        source={require('../../assets/images/tyre.png')}
                        style={styles.tyreImg}
                    />
                    <StyleButton
                        type={'tertiary'}
                        content={'Upgrade for $99'}
                        onPress={handlePress} />
                </View>
            </View>
            <View style={styles.bookingContainer}>
                <Text style={styles.bookingText}>Confirm your Booking here!</Text>
                <StyleButton
                    type={'tertiary'}
                    content={'Confirm booking'}
                    onPress={handlePress}
                />
            </View>
        </View>
    )
}

export default CustomOrder; 