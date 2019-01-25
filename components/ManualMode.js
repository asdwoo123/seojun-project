import React, { Component } from 'react';
import {View, Text} from 'react-native';
import AppHeader from "../sub_components/AppHeader";
import AlarmBar from "../sub_components/AlarmBar";
import ManualContent from "../sub_components/ManualContent";
import containerStyles from "../styles/containerStyles";


class ManualMode extends Component {
    static navigationOptions = {
        drawerLabel: 'MANUAL MODE'
    };

    render() {
        return (
            <View style={containerStyles.container}>
                <AppHeader {...this.props} title="MANUAL MODE"/>
                <AlarmBar/>
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
                    <Text>HOME POSITION</Text>
                    <Text>WORKING POSITION</Text>
                </View>
                <ManualContent/>
                <ManualContent/>
                <ManualContent/>
                <ManualContent/>
                <ManualContent/>
            </View>
        )
    }
};

export default ManualMode;