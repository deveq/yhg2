import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import MessageSearch from '../../components/MessageSearch';
import Messages from '../../components/Messages';
// import axios from 'axios';


const url = "https://";

const MessageScreen = () => {

    // 서버에서 리스트 데이터 받아오기
    // useEffect(()=> {
    //     axios.get(url)
    //         .then((response)=> {
    //             setList(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }, [])

    const [ list, setList ] = useState([]);

    return (

        <View style={styles.container}>

            {/* <Icon
                name='ios-chatbubbles-outline'
                size={100}
                />
            <Text>메세지</Text> */}
            <MessageSearch style={{ width: 200, height: 50 }} />
            <ScrollView style={styles.scroll}>
                {/*
                서버에서 받은 데이터 map으로
                {list.map(value=> (<Message
                    name={value.name}
                    message={value.message}
                />))} */}

                <Messages
                    name="김유저"
                    message="안녕하세요"
                    />
                <Messages
                    name="김안드로이드"
                    message="ㅎㅇㅇ"
                    />
                <Messages
                    name="김iOS"
                    message="안녕 사과"
                    />

                {/**
                 * 데이터를 로컬에 저장해놓고,
                 * push기반으로
                 * fcm 사용해서, push notification
                 * 수신한 데이터 async storage에 저장 바로바로
                 * 
                 */}
            </ScrollView>
                    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    scroll: {
        width: '100%'
    }


})

export default MessageScreen;