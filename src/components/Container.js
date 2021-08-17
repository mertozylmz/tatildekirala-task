import React from 'react'
import { View, StyleSheet } from 'react-native'

const Container = ({ children, backgroundColor = "#fff" }) => {
    return (
        <View style={{ ...styles.container, backgroundColor }}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
        flex: 1
    }
})

export default Container
