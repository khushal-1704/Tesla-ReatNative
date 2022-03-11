import React from 'react'
import { Text, View, Pressable } from 'react-native'
import styles from './styles'

const StyleButton = ({ type, content, onPress }) => {
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20CC';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={onPress}>
                <Text style={[styles.text, { color: textColor }]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default StyleButton; 