import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const TabBarIcon = (focused, name) => {

    let iconSize;
    let iconName;
  //detail, todo
  
    switch (name) {
        case 'Home' :
            iconName = 'home-outline'
            break;
        case 'Schedule' :
            iconName = 'md-newspaper-outline'
            break;
        case 'Message' :
            iconName = 'chatbubble-ellipses-outline';
            break;
        case 'Map' :
            iconName = 'location-outline';
            break;
        case 'Setting' :
            iconName = 'settings-outline';
            break;
    }
  
    iconSize = focused ? 30 : 20;
  
    return (
        <Icon
        name={iconName}
        size={iconSize}
        />
    )
  }

export default TabBarIcon;