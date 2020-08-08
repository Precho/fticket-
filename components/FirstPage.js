import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function FirstPage() {
  
    return (
    <View style={styles.container}>
      <View style={styles.card}>
      
      </View>
    </View>
      
      
      );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    flex:1,
    backgroundColor: '#b81609',
    marginTop: 35,
    marginBottom: 50,
    marginLeft: 20,
    marginRight: 20,
    
    
  }
});

export default FirstPage;