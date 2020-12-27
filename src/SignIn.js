import React, { Component, useState } from 'react';
import { View , Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Buttons from './components/Buttons';
import Inputs from './components/Inputs';


const SignIn = ({navigation}) => {

    const setLogin= () =>{
        navigation.setOptions(
            {
                title: '회원가입',
                headerStyle : {
                    backgroundColor : '#52b669',
                },
                headerTitleStyle: {
                    color: 'white',
                },
            }
        )
    };
    
    setLogin();

    return (
            <KeyboardAvoidingView
             style={styles.container}
             behavior='padding'
             enabled
            >
                <Inputs
                style={[styles.inputText, {marginTop: 100}]}
                placeholder='UserID'
                />
                <Inputs
                style={[styles.inputText, {marginTop: 10, marginBottom:20}]}
                placeholder='Password'
                />
                <Inputs
                style={[styles.inputText, {marginTop: 10, marginBottom:20}]}
                placeholder='Password Confirm'
                />
                <Buttons
                title='확인'
                style={{position: 'absolute', bottom:150}}
                />
            </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor:'#52b669',
        alignItems:'center',
    },
    findPw : {
        width: 100,
        backgroundColor: 'transparent',
        alignSelf:'flex-end',
        marginRight: 25,
        marginBottom: 50,
    },
    inputText: {
        alignSelf:'flex-start',
        borderBottomColor : 'white',
        borderBottomWidth : 1,
        width: 300,
    },

})

export default SignIn;