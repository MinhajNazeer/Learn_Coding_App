import * as React from 'react';
import {StyleSheet, Text, View, Button, ImageBackground} from 'react-native';

const image = { uri: "https://thumbs.dreamstime.com/b/web-development-text-concept-green-digital-world-map-background-48171259.jpg"};

export default function Web_App_Development({navigation}) {
  const HTML = () => {
    navigation.navigate('Html');
  }
  const CSS = () => {
    navigation.navigate('Css');
  }
  const JavaScript = () => {
    navigation.navigate('JavaScript');
  }
  return (
    <View style={styles.container}>
       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.Heading}>  </Text>
      <View style={styles.homeButton1}>
      <Button title="HTML" color="green" onPress={HTML}/>
      </View>
      <View style={styles.homeButton1}>
      <Button title="CSS" color="green" onPress={CSS}/>
      </View>
      <View style={styles.homeButton1}>
      <Button title="JavaScript" color="green" onPress={JavaScript}/>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'lightgreen',
      
    },
    Heading:{
      fontSize:50,
      fontWeight:'bold',
      color:'white',
      backgroundColor:'lightgreen',
      textAlign:'center',
      
    },
    homeButton1:{
      justifyContent:'center',
      alignItems:'center',
      paddingTop:130, 
      paddingBottom:50,    
    },
   
  });