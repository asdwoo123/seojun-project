import React from 'react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Card } from 'react-native-elements';


const AlarmBar = () => {
    let data = [{
        value: "103 11:19:48 AM doors not closed"
    },
        {
        value: '310 11:30:49 IO Link Master'
    },
        {
            value: '310 11:30:49 IO Link Master'
        },
        {
            value: '310 11:30:49 IO Link Master'
        },
        {
            value: '310 11:30:49 IO Link Master'
        },
    ];
    return (
            <Dropdown containerStyle={{ width: '90%', marginBottom: 15 }} baseColor="black" label="103 11:19:48 AM doors not closed" data={data}/>
    )
};

export default AlarmBar;



