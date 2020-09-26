
import React, {useState} from 'react';
import { StyleSheet, Text, View, AppState, Button, TouchableOpacityn} from 'react-native';
import { set } from 'react-native-reanimated';








export default function SettingsScreen({navigation}) {
 
  const [City, setCity] = useState();
  function cityChange(text){
    
    switch (text){
      case 1:
        setCity("Kraków")
        console.log(City)
        break
      case 2:
        setCity("Wrocław")
        console.log(City)
        break
      case 3:
        setCity("Warszawa")
        console.log(City)
        break

    }
   
  }
  

  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>SETTINGS</Text>
      <View style={styles.butoncontainer}>
      <Button
      style={styles.button}
        title="Kraków"
        onPress={()=>cityChange(1)}
        type="solid"
       
      />
        <Button
      style={styles.button}
        title="Wrocław"
        onPress={()=>cityChange(2)}
        type="solid"
       
      />
        <Button
      style={styles.button}
        title="Warszawa"
        onPress={()=>cityChange(3)}
        type="solid"
       
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
  }
  
  
});
