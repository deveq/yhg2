import React, { useState } from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const MessageSearch = (props) => {
    
    const [ text, setText ] = useState('');

    return (
        <View style={[styles.container]}>
            <TextInput
            value={text}
            onChangeText={(event) => setText(event)}
            placeholder='검색하기'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        backgroundColor: '#ffffff',
    },
    container: {
        backgroundColor:'white',
        width:'80%',
        borderRadius:15,
        shadowOffset:{
            width: 30,
            height: 30,
        },
        paddingLeft: 10,
        margin: 10,
    }
})

export default MessageSearch;