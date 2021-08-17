import React from 'react'
import { Text, Button } from 'react-native'

// App Component
import Container from '../../components/Container'

const ProfileScreen = ({ navigation, route }) => {
    const isAdvertiser = route.params?.isAdvertiser || false

    const handlePress = () => {
        navigation.navigate(isAdvertiser ? "TabFlow" : "AdvertiserTab", { screen: isAdvertiser ? "Home" : "Advertisement" })
    }

    return (
        <Container>
            <Text>Profilim</Text>
            <Button title={isAdvertiser ? "İlanları Gör" : "İlan Ver"} onPress={handlePress} />
        </Container>
    )
}

export default ProfileScreen
