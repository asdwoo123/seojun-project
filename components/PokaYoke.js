import React, { Component } from 'react';
import {View, Text} from 'react-native';
import AppHeader from "../sub_components/AppHeader";
import containerStyles from "../styles/containerStyles";
import AlarmBar from "../sub_components/AlarmBar";
import { Card } from 'react-native-elements';
import PokaContent from "../sub_components/PokaContent";


class PokaYoke extends Component {
    static navigationOptions = {
        drawerLabel: 'POKA VOKE'
    };

    render() {
        return (
            <View style={containerStyles.container}>
                <AppHeader {...this.props} title="POKA YOKE"/>
                <AlarmBar/>
                <View style={{ width: '90%' }}>
                    <Text>Critical inputs for the process</Text>
                </View>
                <Card containerStyle={{ width: '90%' }}>
                    <PokaContent title="SAMPLE: O 0.1 Sensor"/>
                    <PokaContent title="need to be filled"/>
                    <PokaContent title="need to be filled"/>
                    <PokaContent title="need to be filled"/>
                    <PokaContent title="need to be filled"/>
                    <PokaContent title="need to be filled"/>
                    <PokaContent title="need to be filled"/>
                    <PokaContent title="need to be filled"/>
                </Card>
            </View>
        )
    }


};

export default PokaYoke;