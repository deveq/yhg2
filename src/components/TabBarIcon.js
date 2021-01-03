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
        case 'Detail' :
            iconName = 'md-newspaper-outline'
            break;
        case 'Todo' :
            iconName = 'settings-outline'
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