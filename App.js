import React from 'react'
import { StyleSheet } from 'react-native';
import CarsList from './components/CarsList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomOrder from './components/CustomOrder';
import ExistingInventory from './components/ExistingInventory'
import CarsItem from './components/CarItem'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Cars'>
        <Stack.Screen name="Cars" component={CarsList} options={{ headerShown: false }} />
        <Stack.Screen name="Customize" component={CustomOrder} />
        <Stack.Screen name="Inventory" component={ExistingInventory} />
        <Stack.Screen name="CarsItem" component={CarsItem} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },


});


//why program still running after line 20 is commented , according to Docs navigation props only passed to that component which is covered with NavigationContainer