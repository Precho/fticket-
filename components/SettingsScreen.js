
import React, {useState, useContext} from 'react';
import { StyleSheet, Text, View, AppState, Button, TouchableOpacityn} from 'react-native';
import { set } from 'react-native-reanimated';

import AppContext from "./AppContext";








export default function SettingsScreen({navigation}) {
 
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
        // console.log(myContext.City)
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
  }
  
  
});
