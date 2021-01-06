import React from 'react';
import { View, StyleSheet, Text, Button, ScrollView, StatusBar, Image } from 'react-native';
import Points from './components/Points';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import MapImage from './assets/pics/map.png';
const MapScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Image
            source={MapImage}
            />
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

export default MapScreen;