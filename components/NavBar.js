import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NAVNEW from '../assets/NAVNEW.png';


class NavBar extends React.Component {
  render() {
    return (
        <View style={styles.navbar}>            
            {/* <Text style={styles.leftText}><Ionicons name="ios-arrow-back" size={30} color="white"/>Wróć</Text>                    
         <Text>NavBarrrrrrrrrrr</Text> */}
         <ImageBackground source={NAVNEW} style={styles.image}>
         
         </ImageBackground>
        </View>
      
      
      );
}
}

const styles = StyleSheet.create({
    navbar: {
        flex: 1,
        // backgroundColor: '#11579a'     
       
    },
    leftText: {
        color:  '#fff',
        fontSize: 20,
        
    },
    image: {
        flex: 1,
    }
});

export default NavBar;