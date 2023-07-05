import * as React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function Resigter({navigation}) {
    const register = () => {
      navigation.navigate('Home');
    }

    const [text, username] = React.useState("Username:");
    const [number1, password] = React.useState(null);
    const [number2, confirmpassword] = React.useState(null);

    return (
      <View style={styles.container}>
        <Text style={styles.Heading}>  </Text>
        <View style={styles.inputText}>
          <TextInput
        style={styles.input}
        onChangeText={username}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={password}
        value={number1}
        placeholder="password"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={confirmpassword}
        value={number2}
        placeholder="confirm password"
        keyboardType="numeric"
      />
      </View>
        <View style={styles.homeButton1}>
        <Button title="register" color="red" onPress={register}/>
        </View>
        <Text style={styles.Bottom}> </Text>
      </View>
    );
  };
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'pink',
      padding:20,
    },
    Heading:{
      fontSize:50,
      fontWeight:'bold',
      color:'white',
      backgroundColor:'maroon',
      textAlign:'center',
    },
    inputText:{
      paddingTop:80,
      padding:30
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    
    },
    homeButton1:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:60,
      },
      Bottom:{
        fontSize:50,
        fontWeight:'bold',
        color:'white',
        backgroundColor:'maroon',
        textAlign:'center',
        marginTop:180,
      },
  });