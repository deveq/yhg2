import TabBarIcon from '../../components/TabBarIcon';
import HomeScreen from './HomeScreen';
import ScheduleStackNavigator from './schedules/ScheduleStackNavigator';
import MapScreen from './MapScreen';
import SettingScreen from './SettingScreen';
import MessageScreen from './MessageScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

const Tab = createBottomTabNavigator();

const TabNavigator = ({ navigation, route }) => {



    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
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
          component={ScheduleStackNavigator}
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

export default TabNavigator;