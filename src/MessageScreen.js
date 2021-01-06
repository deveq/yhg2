import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import TodoCard from './components/TodoCard';
import Icon from 'react-native-vector-icons/Ionicons';

const MessageScren = () => {

    return (
        <View style={styles.container}>
            <Icon
                name='ios-chatbubbles-outline'
                size={100}
            />
            <Text>메세지</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',

    }

})

export default MessageScren;