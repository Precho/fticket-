import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from "moment";




function MainPage() {
  
  const [expDate, setExpDate] = useState('');
  const [ticketNumber, setTicketNumber] = useState('')
  const [transNumber, setTransNumber] = useState('')
  
 useEffect(() => {
   //Getting current time and adding 10 minutes to current timee
   setExpDate(moment().add(10, 'minutes').format("DD.MM.YYYY HH:mm"))
   //Setting ticket number
   setTicketNumber('KRK 2687'+Math.floor(Math.random() * 999) + 1)
   //Setting trans number
   setTransNumber('2030002012115'+Math.floor(Math.random() * 99999) + 1)
 },[]);
  
    return (
      
    <View style={styles.container}>
      <View style={styles.card}>
      <View style={styles.content}>
         <Text style={styles.h1}>Kraków ZTP</Text>
         <Text style={styles.h8}>bilet:</Text>
         <Text style={styles.h2}>20 min. N I+II Aglomeracja</Text>
         <Text style={styles.h9}>termin ważności:</Text>
         <Text style={styles.h3}>{expDate}</Text>
         <Text style={styles.h9}>Numer biletu:</Text>
         <Text style={styles.h1}>{ticketNumber}</Text>
         <Text style={styles.h9}>Numer transakcji:</Text>
         <Text style={styles.h1}>{transNumber}</Text>
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
    marginTop: 30,
  },
  h9: {
    color: '#fff',
    fontSize: 15,
    marginTop: 30,
  },
  h3: {
    color: '#fff',
    fontSize: 30,
    marginTop: 0,
  }
});

export default MainPage;