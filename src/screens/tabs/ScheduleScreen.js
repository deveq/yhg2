import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import TodoCard from '../../components/TodoCard';
//import axios from 'axios';

const ScheduleScreen = () => {

    const [ list, setList ] = useState([]);

    // useEffect(()=> {
    //     axios.get("")
    //         .then((response)=> {
    //             if (response !== null) {
    //                 setList(response.data)
    //             }
    //         })
    // }, []);

    return (
        <View style={styles.container}>

            <ScrollView>
                {list.map(value=> (
                    <TodoCard name={value.name}/>
                ))}

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