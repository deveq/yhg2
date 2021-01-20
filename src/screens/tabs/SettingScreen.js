import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

const SettingScreen = () => {

    const [isChecked1, setChecked1] = useState(false);
    const [isChecked2, setChecked2] = useState(false);

    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch1 = () => setIsEnabled(!isEnabled);
    const toggleSwitch2 = () => setIsEnabled2(!isEnabled2);

    return (
        <View>
            <Text style={styles.text}>공지사항</Text>
            <Text style={styles.text}>언어설정</Text>
            <Text style={styles.text}>이용약관</Text>
            <TouchableOpacity style={[styles.text, { flexDirection: 'row' }]}
                onPress={toggleSwitch1}
            >
                <Text>마케팅 수신 동의</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    value={isEnabled}
                    onValueChange={toggleSwitch1}
                />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.text, { flexDirection: 'row' }]}
                onPress={toggleSwitch2}>
                <Text>Push 알림</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    value={isEnabled2}
                    onValueChange={toggleSwitch2}
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