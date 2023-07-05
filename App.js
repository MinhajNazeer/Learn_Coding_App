import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import Home from './screens/home';
import Main from './screens/main';
import Login from './screens/login';
import Register from './screens/register';
import Web_App_Development from './screens/web_App';
import Mobile_App_Development from './screens/mobile_App';
import Standalone_App_Development from './screens/standalone_App';
import Html from './screens/html';
import Css from './screens/css';
import JavaScript from './screens/javascript';
import Java from './screens/java';
import Kotlin from './screens/kotlin';
import Python from './screens/python';


const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>  
        <Stack.Screen name="Web_App_Development" component={Web_App_Development}/>  
        <Stack.Screen name="Mobile_App_Development" component={Mobile_App_Development}/> 
        <Stack.Screen name="Standalone_App_Development" component={Standalone_App_Development}/>  
        <Stack.Screen name="Html" component={Html}/> 
        <Stack.Screen name="Css" component={Css}/> 
        <Stack.Screen name="JavaScript" component={JavaScript}/> 
        <Stack.Screen name="Java" component={Java}/> 
        <Stack.Screen name="Kotlin" component={Kotlin}/> 
        <Stack.Screen name="Python" component={Python}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center',
  }
});

