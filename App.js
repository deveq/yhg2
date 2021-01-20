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
import ScheduleScreen from './src/screens/tabs/ScheduleScreen';
import SplashScreen from 'react-native-splash-screen';
import MenuComponent from './src/components/MenuComponent';
import UserInfoScreen from './src/UserInfoScreen';
import TabNavigator from './src/screens/tabs/TabNavigator';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const getHeaderTitle = (route) => {
  //맨첨엔 null이라서 ?? 뒤의 Home이 반환됨
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home'

  switch (routeName) {
    case 'Home':
      return '나의 여행지';
    case 'Schedule':
      return '상세 투어내역';
    case 'Map':
      return '지도';
    case 'Setting':
      return '설정';
    case 'Message':
      return '메시지';
    default:
      return 'Home';
  }
}

// tab naviagtion에서 backbutton을 누르면 stack으로 돌아가지않도록.
// 햄버거가 홈탭에서만 보이도록
// toggle button controller switch
// 메인화면에서 백버튼 없애기
// AsyncStorage에서 local data가 있을때 바로 메인으로, 없으면 로그인화면으로





class App extends Component {

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }

  render() {

    // SplashScreen.hide();

    return (
      // headerRight를 넣고 이미지를 없앰(gone말고 invisible처럼)
      // 양쪽 다 영역만 차지하게끔 한 후 title을 중앙으로
      // fetch 사용하면 추가 설치 필요없음


      <NavigationContainer style={styles.container}>
        <Stack.Navigator
          initialRouteName='SignInNLogin'
          screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: 'white',
          }}
        
        >
          <Stack.Screen
            name='SignInNLogin'
            component={SignInNLogin}
            options={{ headerShown: false }}
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
            component={TabNavigator}
            options={({ route }) => ({
              headerTitle: getHeaderTitle(route),
              headerTintColor: 'black',
              headerRight: () => (
                <MenuComponent />
              ),
              headerLeft: null,
              headerShown: getFocusedRouteNameFromRoute(route) ==='Schedule'? '' :'none'
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