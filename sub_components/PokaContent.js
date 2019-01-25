import React from 'react';
import {View, Text} from 'react-native';


const PokaContent = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
            <Text style={{ fontSize: 15 }}>{props.title}</Text>
            <View style={{ width: 25, height: 25, borderColor: 'black', borderWidth: 1 }} />
        </View>
    )
};

export default PokaContent;