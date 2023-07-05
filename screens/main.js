import * as React from 'react';
import {StyleSheet, Text, Button, View, ImageBackground} from 'react-native';

const image = { uri: "https://st2.depositphotos.com/1579454/10057/i/600/depositphotos_100579796-stock-photo-machine-code-languages.jpg" };

export default function Main({navigation}) {
  const login = () => {
    navigation.navigate('Login');
  }
  const register = () => {
    navigation.navigate('Register');
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.Heading}> Learn Coding App </Text>
      <View style={styles.homeButton1}>
      <Button title="login" color="red" onPress={login}/>
      </View>
      <View style={styles.homeButton2}>
      <Button title="register" color="red" onPress={register}/>
      </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
      flex:1,
     backgroundColor:'maroon',
    },
    Heading:{
      fontSize:50,
      fontWeight:'bold',
      color:'white',
      backgroundColor:'maroon',
      textAlign:'center',
      paddingBottom:10,
    },
    homeButton1:{
      justifyContent:'center',
      alignItems:'center',
      paddingTop:420,
    },
    homeButton2:{
      justifyContent:'center',
      alignItems:'center',
      paddingTop:100,
      marginBottom:50,
      
    }
  });