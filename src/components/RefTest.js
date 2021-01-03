import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native';


const useClick = (onClick) => {
    const element = useRef();

    if (element.current) {
        element.current.addEventListener('click', onClick);
    }

    return element;
}

const RefTest = () => {

    const sayHello = () => console.log('hello');

    const text = useClick(sayHello);

    return (
        <View>
            <Text ref={text}>ddd</Text>
        </View>
    )
};

export default RefTest;