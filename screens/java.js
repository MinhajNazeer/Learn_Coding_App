import * as React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView, Image} from 'react-native';

export default function Java() {
  return (
    <SafeAreaView>
      <ScrollView>
    <View style={styles.container}>
    <Text style={styles.Heading}> Java </Text>
    <Image style={styles.img}
            source={{
              uri: 'https://www.developer.com/wp-content/uploads/2021/09/Java-tutorials.jpg',
              width: 200,
              height: 200,
            }}
          />
    <Text style={styles.text1}> Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation 
    dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere 'WORA', meaning that 
    compiled Java code can run on all platforms that support Java without the need to recompile. Java applications are typically compiled to bytecode 
    that can run on any Java virtual machine 'JVM' regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, 
    but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities such as reflection and runtime code 
    modification that are typically not available in traditional compiled languages. As of 2019, Java was one of the most popular programming 
    languages in use according to GitHub, particularly for client server web applications, with a reported 9 million developers.</Text>
    
    <Text style={styles.text1}> Java was originally developed by James Gosling at Sun Microsystems. It was released in May 1995 as a core component
     of Sun Microsystems' Java platform. The original and reference implementation Java compilers, virtual machines, and class libraries were originally 
     released by Sun under proprietary licenses. As of May 2007, in compliance with the specifications of the Java Community Process, Sun had relicensed 
     most of its Java technologies under the GPL-2.0-only license. Oracle offers its own HotSpot Java Virtual Machine, however the official reference 
     implementation is the OpenJDK JVM which is free open-source software and used by most developers and is the default JVM for almost all Linux 
     distributions. </Text>
     <Text style={styles.text1}>As of March 2022, Java 18 is the latest version, while Java 17, 11 and 8 are the current long-term support 'LTS' versions. 
      Oracle released the last zero-cost public update for the legacy version Java 8 LTS in January 2019 for commercial use, although it will 
      otherwise still support Java 8 with public updates for personal use indefinitely. Other vendors have begun to offer zero-cost builds of 
      OpenJDK 18 and 8, 11 and 17 that are still receiving security and other upgrades. </Text>
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