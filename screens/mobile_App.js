import * as React from 'react';
import {StyleSheet, Text, View, Button, ImageBackground} from 'react-native';

const image = { uri: "https://res.cloudinary.com/jerrick/image/upload/v1619807007/608c4b1f8921fd001e1b51f4.png"};

export default function Mobile_App_Development({navigation}) {
  const JavaScript = () => {
    navigation.navigate('JavaScript');
  }
  const Java = () => {
    navigation.navigate('Java');
  }
  const Kotlin = () => {
    navigation.navigate('Kotlin');
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.Heading}>  </Text>
      <View style={styles.homeButton1}>
      <Button title="JavaScript" color="blue" onPress={JavaScript}/>
      </View>
      <View style={styles.homeButton1}>
      <Button title="Java" color="blue" onPress={Java}/>
      </View>
      <View style={styles.homeButton1}>
      <Button title="Kotlin" color="blue" onPress={Kotlin}/>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'lightblue',
      
    },
    Heading:{
      fontSize:50,
      fontWeight:'bold',
      color:'white',
      backgroundColor:'lightblue',
      textAlign:'center',
    },
    homeButton1:{
      justifyContent:'center',
      alignItems:'center',
      paddingTop:130, 
      paddingBottom:50,    
    
    },
  });