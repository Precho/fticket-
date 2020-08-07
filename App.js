import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text>NavBar</Text>
      </View>
      <ViewPager style={{flex:6}} initialPage={0}>
      <Text>zero page</Text>
      <View key="1">
        <Text>First page</Text>
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
    backgroundColor: '#fff',
  },
  navbar: {
    flex: 1,
    backgroundColor: 'blue',

  },
  content: {
    flex: 6,
    backgroundColor: 'red',

  }
});
