import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Messages = (props) => {

    return (

        <View style={styles.container}>
            <Icon
                name='person-circle-outline'
                color='gray'
                size={50}
            />
            <View style={styles.textContents}>
                <Text>{props.name}</Text>
                <Text>{props.message}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContents: {
        flex: 1,
    }
    
})

export default Messages;