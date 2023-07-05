import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';

export default function Python() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.Heading}> Python </Text>
          <Image style={styles.img}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png',
              width: 200,
              height: 200,
            }}
          />
    <Text style={styles.text1}> Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with 
    the use of significant indentation. Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including 
    structured, object-oriented and functional programming. </Text>
    <Text style={styles.text1}> Guido van Rossum began working on Python in the late 1980s as a successor to the ABC programming language and first 
    released it in 1991 as Python 0.9.0. Python 2.0 was released in 2000 and introduced new features such as list comprehensions, cycle-detecting 
    garbage collection, reference counting, and Unicode support. Python 3.0, released in 2008, was a major revision that is not completely 
    backward-compatible with earlier versions. Python 2 was discontinued with version 2.7.18 in 2020 </Text>          

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',

  },
  Heading: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'orange',
    textAlign: 'center',
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