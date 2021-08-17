import React, { useEffect, useState } from 'react'
import { Image, View, TextInput, StyleSheet } from 'react-native'

// App Component
import Container from '../../components/Container'

// Utils
import { gray } from '../../utils/colors'

// Assets
import placeIcon from '../../assets/icons/place.png'
import useSearch from '../../hooks/useSearch'

const HomeScreen = ({ navigation }) => {
    const [forceStop, setForceStop] = useState(false)
    const [searchKey, setSearchKey] = useState("")
    // Hooks
    const [placeholder, onFocus, onBlur] = useSearch(searchKey, forceStop)

    useEffect(() => {
        const focusUnsubscribe = navigation.addListener('focus', () => {
            setForceStop(false)
        })
        
        const blurUnsubscribe = navigation.addListener('blur', () => {
            setForceStop(true)
        })

        return () => {
            focusUnsubscribe()
            blurUnsubscribe()
        }
    }, [navigation])

    return (
        <Container>
            <View>
                <Image style={styles.searchIcon} source={placeIcon} />
                <TextInput
                    placeholderTextColor={gray}
                    onChangeText={setSearchKey}
                    placeholder={placeholder}
                    style={styles.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingVertical: 15,
        fontWeight: 'bold',
        borderColor: gray,
        paddingRight: 15,
        paddingLeft: 40,
        borderWidth: 1,
        marginTop: 20
    },
    searchIcon: {
        position: 'absolute',
        top: '50%',
        left: 15
    }
})

export default HomeScreen
