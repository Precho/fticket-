import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, AppState, Button } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import MainPage from './components/MainPage.js'
import FirstPage from './components/FirstPage.js';
import NavBar from './components/NavBar.js'
import SecondPage from './components/SecondPage.js'
import ZtpLogo from './components/ZtpLogo.js'
import SettingsScreen from './components/SettingsScreen'

import AppContext from './components/AppContext';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

showPageIndicator: true
function HomeScreen({ navigation }) {

  
  return (
    
<View style={styles.container}>
      <NavBar/>
      <ZtpLogo/>
      <ViewPager style={{flex:4.5}} initialPage={0} showPageIndicator={true}>  
      <MainPage/>
      <View key="1">
        <FirstPage/>
      </View>
      <View key="2">
        <SecondPage/>
      </View>
    </ViewPager>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();



export default function App() {

  const [City, setCity] = useState("Kraków ZTP");

  // function cityZmiana(text){
  //     setCity(text);
  //     console.log(City)
  // } 

  const userSettings = {
    City: City,
    setCity,
    
  };
  return (
    <AppContext.Provider value={userSettings}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  
});
