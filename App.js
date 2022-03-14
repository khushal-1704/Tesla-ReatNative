import React from 'react'
import CarsList from './components/CarsList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomOrder from './components/CustomOrder';
import ExistingInventory from './components/ExistingInventory'
import CarsItem from './components/CarItem'
import SignUp from './components/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Cars'>
        <Stack.Screen name="Cars" component={CarsList} options={{ headerShown: false }} />
        <Stack.Screen name="Customize" component={CustomOrder} />
        <Stack.Screen name="Inventory" component={ExistingInventory} />
        <Stack.Screen name="CarsItem" component={CarsItem} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
