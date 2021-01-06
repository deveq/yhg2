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
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/HomeScreen';
import ScheduleScreen from './src/ScheduleScreen';
import SplashScreen from 'react-native-splash-screen';
import TabBarIcon from './src/components/TabBarIcon';
import MapScreen from './src/MapScreen';
import SettingScreen from './src/SettingScreen';
import MessageScreen from './src/MessageScreen';
import MenuComponent from './src/components/MenuComponent';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const getHeaderTitle = (route) => {
  //맨첨엔 null이라서 ?? 뒤의 Home이 반환됨
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home'

  switch (routeName) {
    case 'Home' :
      return '나의 여행지';
    case 'Schedule' :
      return '상세 투어내역';
    case 'Map' :
      return '지도';
    case 'Setting' :
      return '설정';
    case 'Message' :
      return '메시지';
    default : 
      return 'Home';
  }
}

// issue1. HomeScreen에 ScrollView의 스크롤이 화면 끝에 붙지 않는점




class App extends Component {

  componentDidMount() {
    setTimeout(()=> {
      SplashScreen.hide();
    },3000);
  }

  mainScreen = ({navigation})=> { 
  return (
      <Tab.Navigator
        screenOptions={({route})=> ({
          tabBarIcon : ({focused}) => (
            TabBarIcon(focused, route.name)
          ) 
        })}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          />
        <Tab.Screen
          name='Schedule'
          component={ScheduleScreen}
          
          />
            <Tab.Screen
              name='Map'
              component={MapScreen}
            />
          <Tab.Screen
            name='Message'
            component={MessageScreen}
          />
          <Tab.Screen
            name='Setting'
            component={SettingScreen}
          />
      </Tab.Navigator>
  )
  }

  render() {


    return (
      // headerRight를 넣고 이미지를 없앰(gone말고 invisible처럼)
      // 양쪽 다 영역만 차지하게끔 한 후 title을 중앙으로
      // fetch 사용하면 추가 설치 필요없음
       

      <NavigationContainer style={styles.container}>
        <Stack.Navigator 
        initialRouteName='SignInNLogin'
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor:'white',
        }}
        >
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
            component={this.mainScreen}
            options={({route}) => ({
              headerTitle: getHeaderTitle(route),
              headerTintColor:'black',
              headerRight: () => (
                <MenuComponent/>
              )
            })}
            />
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