import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, FlatList} from 'react-native';


export default function Html() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.Heading}> HTML </Text>
          <Image style={styles.img}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png',
              width: 200,
              height: 200,
            }}
          />
          <Text style={styles.text1}> The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed
            in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript. </Text>
          <Text style={styles.text1}> HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive
            forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text
            such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets. Tags
            such as 'img' and 'input' directly introduce content into the page. Other tags such as 'p' surround and provide information about document text
            and may include other as sub-elements. Browsers do not display the HTML tags but use them to interpret the content of the page. </Text>
          <Text style={styles.text1}> HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages. Inclusion
            of CSS defines the look and layout of content. The World Wide Web Consortium 'W3C', former maintainer of the HTML and current maintainer of the
            CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997. A form of HTML, known as HTML5, is used to display video
            and audio, primarily using the 'canvas' element, in collaboration with javascript </Text>
          
          <Text style={styles.heading2}> Why to learn HTML? </Text>
          <Text style={styles.text1}> HTML was developed with the intent of defining the structure of documents like headings, paragraphs, lists, 
            and so forth to facilitate the sharing of scientific information between researchers. Now, HTML is being widely used to format web pages 
            with the help of different tags available in HTML language. HTML is a MUST for students and working professionals to become a great 
            Software Engineer specially when they are working in Web Development Domain</Text>
            <Text style={styles.heading2}> Basic HTML Tags: </Text>
            <FlatList
            data={[
              {key:'<html>'},
              {key:'<head>'},
              {key:'<body>'},
              {key:'<title>'},
              {key:'<p>'},
              {key:'<h1> - <h6>'},
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
    fontSize:18,
    height:44,
  }
});