import React, { Component, useState } from 'react';
import { View , Text, StyleSheet, TouchableOpacity } from 'react-native';

const Buttons = ({title, onPress, style}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.buttonContainer, style ]}
            >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer : {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: 10,
        width: 300,
        height: 50,
        borderRadius: 5,
        marginBottom: 15,
    },
    text : {
        backgroundColor: '#ffffff',
        color:'#52b669',
    }
})

export default Buttons;