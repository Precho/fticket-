import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import MainPage from './components/MainPage.js'
import FirstPage from './components/FirstPage.js';

showPageIndicator: true
export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text>NavBar</Text>
      </View>
      <ViewPager style={{flex:4.5}} initialPage={0} showPageIndicator={true}	>
      <MainPage/>
      <View key="1">
        <FirstPage/>
      </View>
      <View key="2">
        <Text>Second page</Text>
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
  navbar: {
    flex: 1,
    backgroundColor: '#11579a',

  }
});
