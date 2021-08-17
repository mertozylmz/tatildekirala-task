import 'react-native-gesture-handler'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

// Context
import { Provider as AuthProvider } from './src/context/AuthContext'

// Page Flows
import TabFlow from './src/flow/tabFLow'
import AdvertiserTabFlow from './src/flow/advertiserTabFlow'

const Stack = createStackNavigator()

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
          <Stack.Screen name="TabFlow" component={TabFlow} />
          <Stack.Screen name="AdvertiserTab" component={AdvertiserTabFlow} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  )
}

export default App
