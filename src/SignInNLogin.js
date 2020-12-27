import React, { Component, useState } from 'react';
import { View , Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Buttons from './components/Buttons';
// import Info from './assets/pics/info.png';

const SignInNLogin = ({navigation}) => {

    headerStyle = () => {
        navigation.setOptions(
            {headerMode: 'none'}
        )
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.text]}>여행기</Text>
            <Text style={[styles.text, {marginBottom: 150}]}>열심히 일 한 당신 떠나요!</Text>
            <Buttons
                onPress={()=> navigation.navigate('Login')}
                title='로그인'
            />
            <Buttons
                onPress={()=> navigation.navigate('SignIn')}
                title='회원가입'
            />
            <View style={{flexDirection:'row'}}>
                <View style={styles.info}>
                    <Text style={{color: 'white'}}>!</Text>
                </View>
                <Text style={{color: 'white'}}>본 서비스는 여행기의 내용을 회원끼리{'\n'} 공유하는 서비스 입니다.</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems:'center',
        justifyContent: 'flex-start',
        backgroundColor:'#52b669'
    },
    title : {
        marginTop:30,
        fontSize: 80,
    },
    text: {
        color : 'white',
    },
    info : {
        height: 16,
        width: 16,
        borderRadius: 8,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor : 'white',
        marginRight: 5,
        marginTop: 2,
    }





})

export default SignInNLogin;