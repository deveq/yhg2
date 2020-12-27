/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import SignInNLogin from './src/SignInNLogin';
import Login from './src/Login';
import FindPw from './src/FindPw';
import SignIn from './src/SignIn';
import TodoScreen from './src/TodoScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/HomeScreen';
import Detail from './src/Detail';
import SplashScreen from 'react-native-splash-screen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


class App extends Component {

  componentDidMount() {
    setTimeout(()=> {
      SplashScreen.hide();
    },1000);
  };

  mainScreen = ({navigation})=> { 
  return (
      <Tab.Navigator>
        <Tab.Screen
          name='HomeScreen'
          component={HomeScreen}
          
          />
        <Tab.Screen
          name='Deatil'
          component={Detail}
          
          />
          <Tab.Screen
            name='Todo'
            component={TodoScreen}
          
          />
      </Tab.Navigator>
  )
  }

  render() {


    return (

      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName='SignInNLogin'>
          <Stack.Screen
            name='SignInNLogin'
            component={SignInNLogin}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='Login'
            component={Login}
            
          />
          <Stack.Screen
            name='FindPw'
            component={FindPw}
          />
          <Stack.Screen
            name='SignIn'
            component={SignIn}
          />
          <Stack.Screen
            name='Main'
            component={this.mainScreen}/>
        </Stack.Navigator>

      </NavigationContainer>
    )
  }

}

const styles = StyleSheet.create({
  container: {
  }
})

export default App;