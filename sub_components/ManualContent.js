import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Card } from 'react-native-elements';
import {  } from ''


const ManualContent = () => {
    let data = [{

    }];

    return (
        <Card flexDirection="row" containerStyle={{ width: '100%', margin: 0 }}>
            <View style={{ flex: 1, justifyContent: 'space-around', flexDirection: 'row' }}>
            <View style={[{  borderColor: 'black', borderWidth: 1 }, styles.led]}>
            <Text>HP</Text>
            </View>
            <View style={[{  borderColor: 'black', borderWidth: 1, flex: 0.8 }]} />
            <View style={[{  borderColor: 'black', borderWidth: 1 }, styles.led]}>
            <Text>WP</Text>
            </View>
            </View>
        </Card>
    )
};

export default ManualContent;

const styles = StyleSheet.create({
    led: {
        width: 80,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b3b3b3'
    }
})

