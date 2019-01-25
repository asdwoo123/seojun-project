import React, {Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { Dropdown } from "react-native-material-dropdown";


class TenanceContent extends Component {
    render() {
        return (
            <Card containerStyle={{ width: '100%', margin: 0 }}>

                <View style={[styles.row, { marginBottom: 15 }]}>
                    <View style={{ flex: 0.6 }}>
                        <Text>Issue</Text>
                        <Text style={{ fontSize: 15 }}>{this.props.title}</Text>
                    </View>

                    <View style={styles.center}>
                        <Text>setpoint value</Text>
                        <View style={{ borderColor: 'black', borderWidth: 1, width: 60, justifyContent: 'center', alignItems: 'center', marginTop: 5}}><Text>0</Text></View>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={[{flex: 0.6}]}>
                        <Text>Status</Text>
                        <Dropdown containerStyle={{ width: 130, bottom: 30 }} baseColor="black" label="몰라요..."/>
                    </View>

                    <View style={styles.center}>
                        <Text>current value</Text>
                        <View style={{ borderColor: 'black', borderWidth: 1, width: 60, justifyContent: 'center', alignItems: 'center', marginTop: 5}}><Text>0</Text></View>
                    </View>
                </View>
            </Card>
        );
    }
}

export default TenanceContent;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    value: {
        borderColor: 'black'
    },
    center: {
        alignItems: 'center'
    }
});