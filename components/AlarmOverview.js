import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppHeader from "../sub_components/AppHeader";
import { Card } from 'react-native-elements';
import containerStyles from "../styles/containerStyles";


class AlarmOverview extends Component {
    static navigationOptions = {
        drawerLabel: 'ALARM OVERVIEW'
    };

    render() {
        return (
            <View style={containerStyles.container}>
                <AppHeader {...this.props} title="ALARM OVERVIEW"/>
                <View style={{ marginBottom: 20 }} />
                <Card containerStyle={{ width: '100%', margin: 0 }}>
                    <Text>310 11:30:49 AM  IO Link Master Tool connection lost</Text>
                </Card>
                <Card containerStyle={{ width: '100%', margin: 0 }}>
                    <Text>103 11:19:48 AM  doors not closed</Text>
                </Card>
            </View>
        )
    }
};

export default AlarmOverview;

const styles = StyleSheet.create({
    list: {
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'white'
    }
})