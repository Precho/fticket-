import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import qr_code from '../assets/qr_code.png';


function SecondPage() {
  
    

    return (
    <View style={styles.container}>
      <View style={styles.card}>
          <View style={styles.content}>
          <Text style={styles.h1}>Kraków ZTP</Text>
            <View style={styles.center}>
             <Image style={styles.image} source={qr_code}/>
            </View>
            </View>
      </View>
    </View>
      
      
      );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  h1: {
    color: '#fff',
    fontSize: 25,
  },
  card: {
    flex:1,
    backgroundColor: '#b81609',
    marginTop: 35,
    marginBottom: 108,
    marginLeft: 20,
    marginRight: 20, 
    
  },
  image: {
      width: 235,
      height: 235
  },
  center: {
      flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
      margin: 25,
      flex: 1,
      marginTop: 10,
  }
});

export default SecondPage;