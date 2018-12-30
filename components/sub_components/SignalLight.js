import React, { Component } from 'react';
import containerStyles from '../../styles/containerStyles';
import dataStyles from '../../styles/dataStyles';
import { Text, View } from 'react-native';


class SignalLight extends Component {

    render() {
        let lightColor;
        switch (this.props.value) {
            case 34:
                break;
            case 2:
                break;
            default:
                lightColor = '#585858'
                break;
        }

        let itemName = this.props.item.slice(-2)

       return (
            <View style={containerStyles.container4}>
                <Text style={dataStyles.contentText}>{itemName}</Text>
                <View style={[dataStyles.lightView, { backgroundColor: lightColor
                }]} />
            </View>
        );
    }
}

export default SignalLight;


