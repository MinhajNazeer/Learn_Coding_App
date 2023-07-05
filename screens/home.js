import * as React from 'react';
import {StyleSheet, Text, View, Button, ImageBackground} from 'react-native';

const image = { uri: "https://www.markfiniti.com/wp-content/uploads/2021/04/App-Development-11.jpg" };

export default function Home({navigation}) {
  const web_application_development = () => {
    navigation.navigate('Web_App_Development');
  }
  const mobile_application_development = () => {
    navigation.navigate('Mobile_App_Development');
  }
  const standalone_application_development = () => {
    navigation.navigate('Standalone_App_Development');
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.Heading}> Categories </Text>
      <View style={styles.homeButton1}>
      <Button title="web_application_development" color="green" onPress={web_application_development}/>
      </View>
      <View style={styles.homeButton2}>
      <Button title="mobile_application_development" color="blue" onPress={mobile_application_development}/>
      </View>
      <View style={styles.homeButton3}>
      <Button title="standalone_application_development" color="orange" onPress={standalone_application_development}/>
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
      paddingTop:20,
      paddingBottom:20,
    },
    homeButton1:{
      justifyContent:'center',
      alignItems:'center',
      paddingRight:128,
      paddingLeft:128,
      paddingTop:100, 
      paddingBottom:50,  
    },
    homeButton2:{
      justifyContent:'center',
      alignItems:'center',
      paddingRight:118,
      paddingLeft:118,
      paddingTop:130, 
      paddingBottom:50,  
    },
    homeButton3:{
      justifyContent:'center',
      alignItems:'center',
      paddingRight:100,
      paddingLeft:100,
      paddingTop:130, 
      paddingBottom:50,  
      
    },
  });
