import React from 'react';
import { View, StyleSheet, Text, Button, ScrollView, StatusBar } from 'react-native';
import Points from './components/Points';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor='white'
                barStyle='dark-content'
            />
            <ScrollView>
                <Points />
                <Points />
                <Points />
                <Points />
                <Points />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default HomeScreen;