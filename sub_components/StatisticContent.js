import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Card } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';


const StatisticContent = (props) => {
    return (
        <Card
            containerStyle={{ flex: 0.5, margin: 7 }} >
            <Text style={{ fontSize: 10, marginBottom: 10 }}>{props.title}</Text>
            {
                props.content.map((v, k) => (
                    <View style={styles.content} key={k}>
                        <Text>
                            {v.key}
                        </Text>
                        <View style={{ borderColor: 'black', borderWidth: 1, width: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>
                            {v.value}
                        </Text>
                        </View>
                    </View>
                ))
            }
            <View>
                {props.children}
            </View>
        </Card>
    )
};

export default StatisticContent;

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    }
});