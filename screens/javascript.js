import * as React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Image} from 'react-native';

export default function JavaScript() {
  return (
    <SafeAreaView>
      <ScrollView>

    <View style={styles.container}>
    <Text style={styles.Heading}> JAVASCRIPT </Text>
    <Image style={styles.img}
            source={{
              uri: 'https://static.javatpoint.com/images/javascript/javascript_logo.png',
              width: 200,
              height: 200,
            }}
          />
    <Text style={styles.text1}> JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web,
     alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. </Text>
    <Text style={styles.text1}> JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. 
    It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, 
    and imperative programming styles. It has application programming interfaces 'APIs' for working with text, dates, regular expressions, standard 
    data structures, and the Document Object Model 'DOM'.</Text>
    <Text style={styles.text1}>JavaScript engines were originally used only in web browsers, but are now core components of some servers and a variety of applications.
            The most popular runtime system for this usage is Node.js. </Text>
    <Text style={styles.text1}>Although Java and JavaScript are similar in name, syntax, and respective standard libraries, the two languages are distinct and differ greatly
            in design.</Text>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'yellow',
      
    },
    Heading:{
      fontSize:50,
      fontWeight:'bold',
      color:'white',
      backgroundColor:'orange',
      textAlign:'center',
    },
    img: {
      marginTop: 40,
    },
    text1: {
      fontSize: 20,
      textAlign: 'justify',
      padding: 20,
      paddingTop: 30,
    },
  });