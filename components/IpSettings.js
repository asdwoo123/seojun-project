import React, { Component } from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import AppHeader from "../sub_components/AppHeader";
import containerStyles from "../styles/containerStyles";
import { Card } from 'react-native-elements';
import Btn from 'react-native-micro-animated-button';


class IpSettings extends Component{
    static navigationOptions = {
        drawerLabel: 'IP SETTINGS'
    };

    btn = null;

    state = {
        ip: ''
    };

    handleOnChange = (text) => {
        this.setState({ ip: text });
    };

    handleOnPress = () => {
        setTimeout(() => { this.btn.success(); });
        setTimeout(() => { this.btn.reset(); }, 500);
    };

    render() {
        return (
            <View style={containerStyles.container}>
                <AppHeader title="IP SETTING" {...this.props}/>
                <View style={{ width: '90%', marginTop: 15 }}>
                    <Text>IP registration</Text>
                </View>
                <Card flexDirection="row" containerStyle={{ width: '90%' }}>
                    <View style={{ justifyContent: 'space-around' ,flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput value={this.state.ip} onChangeText={this.handleOnChange} style={{ width: 200 ,height: 40, borderColor: 'black', borderWidth: 1 }}/>
                    <Btn
                        style={{ width: 100, borderRadius: 5 }}
                    label="Connect"
                    onPress={this.handleOnPress}
                    ref={ref => (this.btn = ref)}/>
                    </View>
                </Card>
                <View style={{ width: '90%', marginTop: 20 }}>
                    <Text>Registered IP</Text>
                </View>
            </View>
        )
    }
};

export default IpSettings;




