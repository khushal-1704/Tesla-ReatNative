import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';
import CarItem from './components/CarItem';
import CarsList from './components/CarsList';
import Header from './components/Header'

export default function App() {
  const carDetails = [
    { name: 'Model 3', tagline: 'Order Online for', taglineCTA: 'Touch less Delivery', image: `${require("./assets/images/ModelX.jpeg")}`, key: 1 },
    { name: 'Model S', tagline: 'Order Online for', taglineCTA: 'Touch less Delivery', image: `${require("./assets/images/ModelX.jpeg")}`, key: 2 },
    { name: 'Model X', tagline: 'Order Online for', taglineCTA: 'Touch less Delivery', image: `${require("./assets/images/ModelX.jpeg")}`, key: 3 },
    { name: 'Model Y', tagline: 'Order Online for', taglineCTA: 'Touch less Delivery', image: `${require("./assets/images/ModelX.jpeg")}`, key: 4 }]

  return (
    <View style={styles.container}>


      {/* {carDetails.map((det) => (
        <CarItem name={det.name} tagline={det.tagline} image={det.image} key={det.key} taglineCTA={det.taglineCTA} />
      ))} */}
      <Header />
      <CarsList />

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
