
import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View, AppState, Button, TouchableOpacityn} from 'react-native';
import { set } from 'react-native-reanimated';

import AppContext from "./AppContext";

import firebase from 'firebase'
import {firebaseConfig} from '../config'





if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
// const db = firebase.firestore();




export default function SettingsScreen({navigation}) {

  const [totalNumber, setotalNumber] = useState(0)
  useEffect(() => {
    getMoviesFromApi()
    
  },[]);

  

  const getMoviesFromApi = () => {
    return fetch('https://fticket-245dd.firebaseio.com/liczby/liczba.json')
      .then((response) => response.json())
      .then((json) => {
        setotalNumber(json)
        console.log(totalNumber)
        
      })
      .catch((error) => {
        console.error(error);
      });
  };
 
  const myContext = useContext(AppContext);
  // const [City, setCity] = useState();
  function cityChange(text){
    
    switch (text){
      case 1:
        myContext.setCity("Kraków ZTP")
        // console.log(myContext.City)
        break
      case 2:
        myContext.setCity("Wrocław")
        // console.log(myContext.City)
        break
      case 3:
        myContext.setCity("Warszawa ZTM")
        // console.log(myContext.Cityy)
        break

    }
    console.log(myContext.City)
   
  }
  

  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>Miasto</Text>
      <View style={styles.butoncontainer}>
      <Button
      style={styles.button}
        title="Kraków"
        onPress={()=>cityChange(1)}
        type="solid"
        disabled={ (myContext.City==="Kraków ZTP") ? true : false }

  
       
       
      />
        <Button
      style={styles.button}
        title="Wrocław"
        onPress={()=>cityChange(2)}
        type="solid"
        disabled={ (myContext.City==="Wrocław") ? true : false }
       
      />
        <Button
      style={styles.button}
        title="Warszawa"
        onPress={()=>cityChange(3)}
        type="solid"
        disabled={ (myContext.City==="Warszawa ZTM") ? true : false }
       
      />
      </View>

      <Text>{myContext.City}</Text>
        <View style={styles.h1}> 
          <Text>Uratowany przed kontrolą: {totalNumber}</Text>
          <Button
            // onPress={}
            title="Miałem kontrole"
          />
        </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
          <Button
            onPress={() => navigation.navigate('Home')}
            title="GoToHomeScreen"
          />
    </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center"
    // backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#00aeef',
    borderColor: 'red',
      
  }, 
  butoncontainer: {
    flexDirection: "row"
  },
  text: {
    marginTop: 30
  },h1: {
   marginTop: 200,
  }
  
  
});
