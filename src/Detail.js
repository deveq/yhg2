import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Points from './components/Points';

const Detail = ({ navigation}) => {

    return (
        <View>

            <Points/>
        </View>
    )
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Detail;