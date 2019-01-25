import React, { Component } from 'react';
import {View, Text} from 'react-native';
import TenanceContent from "../sub_components/TenanceContent";
import AppHeader from "../sub_components/AppHeader";
import containerStyles from "../styles/containerStyles";
import AlarmBar from "../sub_components/AlarmBar";


class MainTenance extends Component {
    static navigationOptions = {
        drawerLabel: 'MAIN TENANCE'
    };

    render() {
        return (
            <View style={containerStyles.container}>
                <AppHeader title="MAINTENANCE" {...this.props}/>
                <AlarmBar/>
                <TenanceContent title="Change Oil of Pump"/>
                <TenanceContent title="Clean desk"/>
            </View>
        )
    }
};

export default MainTenance;