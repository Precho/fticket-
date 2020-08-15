import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, AppState } from 'react-native';
import moment from "moment";

function FirstPage() {

  const [currentDate, setcurrentDate] = useState('')
  const [initNumber, setInitNumber] = useState('')
 useEffect(() => {
   //Setting current Date - 10 minutes
   setcurrentDate(moment().subtract(10, 'minutes').format("DD.MM.YYYY HH:mm"))
   //Setting Init number
   setInitNumber('9'+Math.floor(Math.random() * 9999999))
   AppState.addEventListener('change', handleChange);  

  return () => {
    AppState.removeEventListener('change', handleChange);  
  }
   
 },[]);

 const handleChange = (newState) => {
  if (newState === "active") {
   
    //Setting current Date - 10 minutes
   setcurrentDate(moment().subtract(10, 'minutes').format("DD.MM.YYYY HH:mm"))
   //Setting Init number
   setInitNumber('9'+Math.floor(Math.random() * 9999999))
  }
}
  
    return (
      <View style={styles.container}>
      <View style={styles.card}>
      <View style={styles.content}>
      <Text style={styles.h1}>Kraków ZTP</Text>
      <Text style={styles.h8}>cena:</Text>
      <Text style={styles.h2}>3.40 PLN</Text>
      <Text style={styles.h9}>numer bieżący:</Text>
      <Text style={styles.h7}>{initNumber}</Text>
      <Text style={styles.h6}>{currentDate}</Text>
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
  card: {
    flex:1,
    backgroundColor: '#b81609',
    marginTop: 35,
    marginBottom: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  content: {
    flex: 1,
    margin: 25,
    marginTop: 10,
    // backgroundColor: 'blue'
  },
  h1: {
    color: '#fff',
    fontSize: 25,
  },
  h8: {
    color: '#fff',
    fontSize: 15,
    marginTop: 50,
  },
  h2: {
    color: '#fff',
    fontSize: 25,
    marginTop: 5,
  },
  h9: {
    color: '#fff',
    fontSize: 15,
    marginTop: 50
  },
  h7: {
    color: '#fff',
    fontSize: 25,
    marginTop:10,
  },
  h6: {
    color: '#fff',
    fontSize: 25,
    marginTop:100,
    borderWidth: 1,
    borderColor: '#fff',
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5
    
  },
});

export default FirstPage;