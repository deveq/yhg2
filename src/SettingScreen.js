import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingScreen = () => {

    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);

    return (
        <View>
            <Text style={styles.text}>공지사항</Text>
            <Text style={styles.text}>언어설정</Text>
            <Text style={styles.text}>이용약관</Text>
            <TouchableOpacity style={[styles.text, { flexDirection: 'row' }]}
                onPress={() => {
                    let checked = isChecked1;
                    setChecked1(!checked)
                }}
            >
                <Text>마케팅 수신 동의</Text>
                <Icon
                    name='toggle'
                    size={20}
                    color={isChecked1 ? 'gray' : 'green'}
                />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.text, { flexDirection: 'row' }]}
                onPress={() => {
                    let checked = isChecked2;
                    setChecked2(!checked)
                }}>
                <Text>Push 알림</Text>
                <Icon
                    name='toggle'
                    size={20}
                    color={ isChecked2 ? 'gray' : 'green'}
                />
            </TouchableOpacity>
            <Text style={styles.text}>로그아웃</Text>
            <Text style={styles.text}>불편신고</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#aaaaaaaa'
    },

})


export default SettingScreen;