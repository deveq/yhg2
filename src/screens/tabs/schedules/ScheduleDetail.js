import React from 'react';
import { View, StyleSheet, Text, Button, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const ScheduleDetail = ({ navigation }) => {
    return (
        <View>
            <Image
                source={require('../../../assets/pics/image1.png')}
            />
            <ScrollView>
                <View style={styles.row}>
                    <Text style={{ fontSize: 30, alignSelf: 'center' }}>김삿갓 유적지</Text>
                    <View style={[styles.row, { alignSelf: 'center' }]}>
                        <TouchableOpacity onPress={() => navigation.navigate("ScheduleMediaList")}>
                            <Icon name="play" size={30} color="#52b669" />
                        </TouchableOpacity>
                        <Icon name="headset" size={30} color="#52b669" />
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text>주소</Text>
                        <Text>영월군 김삿갓면 김삿갓로 216-22</Text>
                    </View>
                    <Icon name="call" size={30} color="#52b669" />
                </View>
                <View>

                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    row: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: "space-between"
    }
})
export default ScheduleDetail;
