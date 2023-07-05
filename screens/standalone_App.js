import * as React from 'react';
import {StyleSheet, Text, View, Button, ImageBackground} from 'react-native';

const image = {uri: "https://www.bhargit.com/image/web-application-development-technologies.png"};

export default function Standalone_App_Development({navigation}) {
  const Python = () => {
    navigation.navigate('Python');
  }
  const Java = () => {
    navigation.navigate('Java');
  }
  const JavaScript = () => {
    navigation.navigate('JavaScript');
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.Heading}>  </Text>
      <View style={styles.homeButton1}>
      <Button title="Python" color="orange" onPress={Python}/>
      </View>
      <View style={styles.homeButton1}>
      <Button title="Java" color="orange" onPress={Java}/>
      </View>
      <View style={styles.homeButton1}>
      <Button title="JavaScript" color="orange" onPress={JavaScript}/>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'orange',
    },
    Heading:{
      fontSize:50,
      fontWeight:'bold',
      color:'white',
      backgroundColor:'orange',
      textAlign:'center',
    },
    homeButton1:{
      justifyContent:'center',
      alignItems:'center',
      paddingTop:100,
      paddingTop:130, 
      paddingBottom:50, 
    },
  });