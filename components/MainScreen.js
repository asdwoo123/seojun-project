import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, WebView} from 'react-native';
import containerStyles from '../styles/containerStyles';
import AppHeader from "../sub_components/AppHeader";
import { Card } from 'react-native-elements';
import AlarmBar from "../sub_components/AlarmBar";


class MainScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'MAIN SCREEN'
    };

    render() {
        return (
            <View style={containerStyles.container}>
                <AppHeader {...this.props} title="MAIN SCREEN"/>
                <AlarmBar/>
                <View style={[styles.row, { flex: 0.07 }, containerStyles.container2]}>
                    <View style={{ alignItems: 'center', marginRight: 10 }}>
                        <Text>DONE</Text><View style={styles.led} />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text>RESULT</Text><View style={styles.led} />
                    </View>
                </View>
                <View style={[containerStyles.container2, { flex: 0.22, width: '100%' }]}>
                    <Card containerStyle={{ flex: 1 }}>
                        <View style={styles.rowANDalign}>
                            <Text>Cydetime</Text>
                            <Text>#####</Text>
                        </View>
                        <View style={styles.rowANDalign}>
                            <Text>Total</Text>
                            <Text>0</Text>
                        </View>
                        <View style={styles.rowANDalign}>
                            <Text>OK</Text>
                            <Text>0</Text>
                        </View>
                        <View style={styles.rowANDalign}>
                            <Text>NOK</Text>
                            <Text>0</Text>
                        </View>
                    </Card>
                </View>
                <View style={[containerStyles.container2, { flex: 0.24, width: '100%' }]}>
                    <Card containerStyle={{ flex: 1, height: 150 }}>
                    </Card>
                </View>
                <View style={[containerStyles.container2, {flex: 0.07, width: '100%'}]}>
                    <Card containerStyle={styles.center}>
                        <Text>machine not ready</Text>
                    </Card>
                </View>
            </View>
        )
    }

};

export default MainScreen;


const styles = StyleSheet.create({
    led: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white'
    },
    row: {
        flexDirection: 'row'
    },
    rowANDalign: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});















