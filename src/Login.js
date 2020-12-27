import React, { Component, useState } from 'react';
import { View , Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native';
import Buttons from './components/Buttons';
import Inputs from './components/Inputs';
import Points from './components/Points';

const Login = ({navigation}) => {

    const setLogin= () =>{
        navigation.setOptions(
            {
                title: '로그인',
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
        <View style={styles.container}>
            <Inputs
            style={[styles.inputText, {marginTop: 100}]}
            placeholder='UserID'
            />
            <Inputs
            style={[styles.inputText, {marginTop: 10, marginBottom:20}]}
            placeholder='Password'
            />
            <TouchableOpacity
            style={styles.findPw}
            onPress={()=>navigation.navigate('FindPw')}
            >
                <Text style={{color: 'white'}}>비밀번호 찾기</Text>
            </TouchableOpacity>
            <Buttons
            title='확인'
            style={{position: 'absolute', bottom:150}}
            onPress={()=>navigation.navigate('Main',{screen:'MyPoints'})}
            />
        </View>
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
    }
})

export default Login;