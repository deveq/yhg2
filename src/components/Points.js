import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Points = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', borderWidth: 1 }}>
                <Text>홍천</Text>
                <Text> 7/9 - AM : 10:00</Text>
            </View>
            <Image
                source={require('../assets/pics/image1.png')}
                size={{ width: 50, height: 100 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
        width: '100%',
    }
})

export default Points;