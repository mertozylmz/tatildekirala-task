import React, { useContext } from 'react'
import { Image } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Context
import { Context as AuthContext } from '../context/AuthContext'

// Pages
import Profile from '../pages/commonTabs/ProfileScreen'
import Favourites from '../pages/tabs/FavouritesScreen'
import HomeScreen from '../pages/tabs/HomeScreen'
import Travels from '../pages/tabs/TravelsScreen'
import SignIn from '../pages/tabs/SignInScreen'

// Assets
import homeIcon from '../assets/icons/home.png'
import userIcon from '../assets/icons/user.png'
import dateIcon from '../assets/icons/date.png'
import favIcon from '../assets/icons/liked.png'

// Setup
const Tab = createBottomTabNavigator()

const SignedTabs = () => {
    const { state: { user } } = useContext(AuthContext)
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" options={{ tabBarIcon: () => <Image source={homeIcon} />, title: "Ana Sayfa" }} component={HomeScreen} />
            {
                user !== null
                    ? <>
                        <Tab.Screen name="Favourites" options={{ tabBarIcon: () => <Image source={favIcon} />, title: "Favoriler" }} component={Favourites} />
                        <Tab.Screen name="Travels" options={{ tabBarIcon: () => <Image source={dateIcon} />, title: "Seyahatlerim" }} component={Travels} />
                        <Tab.Screen name="Profile" options={{ tabBarIcon: () => <Image source={userIcon} />, title: "Hesabım" }} component={Profile} />
                    </>
                    : <Tab.Screen name="SignIn" options={{ tabBarIcon: () => <Image source={userIcon} />, title: "Giriş Yap" }} component={SignIn} />
            }
        </Tab.Navigator>
    );
}

export default SignedTabs