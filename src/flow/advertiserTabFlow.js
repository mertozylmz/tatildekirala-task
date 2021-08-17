import React from 'react'
import { Image } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Pages
import AdvertisementScreen from '../pages/advertiserTabs/AdvertisementScreen'
import NewAdvertiseScreen from '../pages/advertiserTabs/NewAdvertiseScreen'
import Profile from '../pages/commonTabs/ProfileScreen'

// Assets
import homeIcon from '../assets/icons/home.png'
import userIcon from '../assets/icons/user.png'
import favIcon from '../assets/icons/liked.png'

// Setup
const Tab = createBottomTabNavigator()

const AdvertiserTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Advertisement" options={{ tabBarIcon: () => <Image source={homeIcon} />, title: "İlanlarım" }} component={AdvertisementScreen} />
            <Tab.Screen name="NewAdvertise" options={{ tabBarIcon: () => <Image source={favIcon} />, title: "İlan Ver" }} component={NewAdvertiseScreen} />
            <Tab.Screen name="Profile" initialParams={{ isAdvertiser: true }} options={{ tabBarIcon: () => <Image source={userIcon} />, title: "Hesabım" }} component={Profile} />
        </Tab.Navigator>
    );
}

export default AdvertiserTab