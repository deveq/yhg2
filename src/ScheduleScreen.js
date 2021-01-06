import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import TodoCard from './components/TodoCard';

const ScheduleScreen = () => {

    return (
        <View style={styles.container}>

            <ScrollView>
                <TodoCard
                    name='todo_image1.png'
                />
                <TodoCard
                    name='todo_image2.png'
                />
                <TodoCard
                    name='todo_image3.png'
                />
                <TodoCard
                    name='todo_image4.png'
                />
                <TodoCard
                    name='todo_image5.png'
                />

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }

})

export default ScheduleScreen;