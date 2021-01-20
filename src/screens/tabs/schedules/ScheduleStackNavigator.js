import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScheduleMediaPlayer from './ScheduleMediaPlayer';
import ScheduleMediaList from './ScheduleMediaList';
import ScheduleDetail from './ScheduleDetail';
import ScheduleScreen from './ScheduleScreen';


const Stack = createStackNavigator();

const getHeaderTitle = (route) => {
    const name = route.name;

    switch(name) {
        case 'ScheduleScreen' :
            return '상세투어내역';
        case 'ScheduleDetail' :
            return '';
        case 'ScheduleMediaPlayer' :
            return '비디오 보기';
        case 'ScheduleMediaList' :
            return '미디어 리스트' ;
    }
}

const ScheduleStackNavigator = ({navigation, route}) => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerTitleAlign:'center'
        }}
        >
            <Stack.Screen 
                name="ScheduleScreen" 
                component={ScheduleScreen}
                options={{
                    title:'상세투어내역'
                }}
                />
            <Stack.Screen 
                name="ScheduleDetail" 
                component={ScheduleDetail}
                options={{
                    title: ''
                }}
                />
            <Stack.Screen 
                name="ScheduleMediaPlayer" 
                component={ScheduleMediaPlayer}
                options={{
                    title:'비디오 보기'
                }}
                />
            <Stack.Screen 
                name="ScheduleMediaList" 
                component={ScheduleMediaList}
                options={{
                    title:'미디어 리스트'
                }}
                />
        </Stack.Navigator>
    )
}

export default ScheduleStackNavigator;