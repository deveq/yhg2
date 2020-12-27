import React from 'react';
import { View, StyleSheet, Text, Button, ScrollView } from 'react-native';
import Points from './components/Points';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <Points/>
                <Points/>
                <Points/>
                <Points/>
                <Points/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default HomeScreen;