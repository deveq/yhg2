import React, { Component, useState } from 'react';
import { View , Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Buttons from './components/Buttons';
import Inputs from './components/Inputs';


const FindPw = ({navigation}) => {

    const setPw= () =>{
        navigation.setOptions(
            {
                title: '비밀번호 찾기',
                headerStyle : {
                    backgroundColor : '#52b669',
                },
                headerTitleStyle: {
                    color: 'white',
                },
            }
        )
    };
    
    setPw();

    return (
        <View style={styles.container}>
            <Inputs
            style={[styles.inputText, {marginTop: 100}]}
            placeholder='UserID'
            />
            <Buttons
            title='비밀번호 찾기'
            style={{position: 'absolute', bottom:150}}
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

export default FindPw;