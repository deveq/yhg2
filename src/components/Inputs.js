import React , { Component, useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const Inputs = (props) => {
    const [ text, setText ] = useState('');

    return (
        <View style={[styles.container, props.style]}>
            <TextInput
            placeholder={props.placeholder}
            placeholderTextColor='white'
            onChangeText={(e) => setText(e)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginLeft: 20,
        marginRight: 20,
    }
})

export default Inputs;