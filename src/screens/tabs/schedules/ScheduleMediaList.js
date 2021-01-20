import React from 'react';
import { View, StyleSheet, Text, Button, Image} from 'react-native';

const ScheduleMediaList = ({navigation}) => {
    return (
        <View>

            <Text>Schedule Media </Text>
            <Button title="미디어 플레이어 화면으로" onPress={()=>navigation.navigate("ScheduleMediaPlayer")}/>
        </View>
    )
}

export default ScheduleMediaList;