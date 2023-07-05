import * as React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Image} from 'react-native';

export default function Kotlin() {
  return (
    <SafeAreaView>
      <ScrollView>
    <View style={styles.container}>
    <Text style={styles.Heading}> Kotlin </Text>
    <Image style={styles.img}
            source={{
              uri: 'https://ih1.redbubble.net/image.1060767194.0684/pp,840x830-pad,1000x1000,f8f8f8.jpg',
              width: 200,
              height: 200,
            }}
          />
    <Text style={styles.text1}> Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. 
    Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library, 
    but type inference allows its syntax to be more concise. </Text>
    <Text style={styles.text1}>  Google announced that the Kotlin programming language is now its preferred language for Android app developers.
     Since the release of Android Studio 3.0 in October 2017, Kotlin has been included as an alternative to the standard Java compiler. The Android 
     Kotlin compiler produces Java 8 bytecode by default which runs in any later JVM, but lets the programmer choose to target Java 9 up to 18, 
     for optimization, or allows for more features; has bidirectional record class interoperability support for JVM, introduced in Java 16, 
     considered stable as of Kotlin 1.5. </Text>
    
    </View>
    </ScrollView>
    </SafeAreaView>
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
      backgroundColor:'blue',
      textAlign:'center',
    },
    img: {
      marginTop: 40,
      margin:20,
    },
    text1: {
      fontSize: 20,
      textAlign: 'justify',
      padding: 20,
      paddingTop: 30,
    },
  });