import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import MainPage from './components/MainPage.js'
import FirstPage from './components/FirstPage.js';
import NavBar from './components/NavBar.js'
import SecondPage from './components/SecondPage.js'
import ZtpLogo from './components/ZtpLogo.js'

showPageIndicator: true
export default function App() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  
});
