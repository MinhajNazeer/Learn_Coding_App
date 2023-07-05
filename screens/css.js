import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, FlatList } from 'react-native';

export default function Css() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.Heading}> CSS </Text>
          <Image style={styles.img}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPOOOTBy_UpUTZ6lt9xBAL-r47gVTtvHxwE4WVQR2Ba9xp6VU9OxsXFW9CEIJ9DBu184&usqp=CAU',
              width: 200,
              height: 200,
            }}
          />
          <Text style={styles.text1}> Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a
            markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript </Text>
            <Text style={styles.text1}> CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.[3] This separation can 
              improve content accessibility; provide more flexibility and control in the specification of presentation characteristics; enable multiple 
              web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the
               structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its 
               formatting. </Text>
               <Text style={styles.heading2}> CSS selectors: </Text>
               <Text style={styles.text1}> CSS selectors are used to select the content you want to style. Selectors are the part of CSS rule set. 
               CSS selectors select HTML elements according to its id, class, type, attribute etc.</Text>
               <Text style={styles.text1}>There are several different types of selectors in CSS.</Text>
               <FlatList
            data={[
              {key:'CSS Element Selector'},
              {key:'CSS Id Selector'},
              {key:'CSS Class Selector'},
              {key:'CSS Universal Selector'},
              {key:'CSS Group Selector'},
            ]}
            renderItem={({item}) => <Text style={styles.item}> {item.key} </Text>} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',

  },
  Heading: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'green',
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
  heading2:{
    fontSize: 25,
    fontWeight:'bold',
    textAlign: 'justify',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
  },
  item:{
    padding:10,
    fontSize:15,
    height:44,
    paddingRight: 30,
    paddingLeft: 30,
  }
});