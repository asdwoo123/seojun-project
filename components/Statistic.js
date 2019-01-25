import React, { Component } from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import AppHeader from "../sub_components/AppHeader";
import AlarmBar from "../sub_components/AlarmBar";
import containerStyles from "../styles/containerStyles";
import StatisticContent from "../sub_components/StatisticContent";
import Btn from 'react-native-micro-animated-button';


const con1 = [
    {
        key: 'last cycle',
        value: 0
    },
    {
        key: 'last 10 cycles',
        value: 0
    }
];
const con2 = [
    {
        key: 'shift OK',
        value: 0
    },
    {
        key: 'shift NOK',
        value: 0
    }
];
const con3 = [
    {
        key: 'shift OK',
        value: 0
    },
    {
        key: 'shift NOK',
        value: 0
    }
];
const con4 = [
    {
        key: 'last cycle',
        value: 0
    },
    {
        key: 'last 10 cycles',
        value: 0
    },
    {
        key: 'target cycletime',
        value: 40
    }
];
const con5 = [
    {
        key: 'palet content',
        value: 50
    },
    {
        key: 'palet counter',
        value: 0
    },
];
const con6 = [
    {
        key: 'HMI Version',
        value: 0
    },
    {
        key: 'PLC Version',
        value: 0
    }
];


class Statistic extends Component {
    static navigationOptions = {
        drawerLabel: 'STATISTIC'
    };

    btn1 = null;
    btn2 = null;
    btn3 = null;

    handleOnPress1 = () => {
        setTimeout(() => { this.btn1.success(); });
        setTimeout(() => { this.btn1.reset(); }, 500);
    };

    handleOnPress2 = () => {
        setTimeout(() => { this.btn2.success(); });
        setTimeout(() => { this.btn2.reset(); }, 500);
    };

    handleOnPress3 = () => {
        setTimeout(() => { this.btn3.success(); });
        setTimeout(() => { this.btn3.reset(); }, 500);
    };

    render() {
        return (
            <View style={[containerStyles.container]}>
                <AppHeader {...this.props} title="STATISTIC"/>
                <AlarmBar/>
                <View style={{ flexWrap: 'wrap' }}>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <StatisticContent title="CYCLE TIME MACHINE" content={con1}/>
                        <StatisticContent title="SHIFT COUNTER" content={con2}>
                            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                <Btn ref={ref => (this.btn1 = ref)} label="RESET" style={{ borderRadius: 5, height: 30, width: 70 }} onPress={this.handleOnPress1}/>
                            </View>
                        </StatisticContent>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <StatisticContent title="TOOL COUNTER" content={con3}/>
                        <StatisticContent title="CYCLE TIME PART TO PART" content={con4}/>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <StatisticContent title="COUNTER PALET" content={con5}>
                            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                <Btn ref={ref => (this.btn2 = ref)} label="-1" style={{ borderRadius: 5, width: 50, height: 30, marginRight: 10 }} onPress={this.handleOnPress2}/>
                                <Btn ref={ref => (this.btn3 = ref)} label="RESET" style={{ borderRadius: 5, height: 30, width: 70 }} onPress={this.handleOnPress3}/>
                            </View>
                        </StatisticContent>
                        <StatisticContent title="TOOL INFORMATION" content={con6}/>
                    </View>
                </View>
            </View>
        )
    }
};

export default Statistic;

const styles = StyleSheet.create({
    button: {
        width: '50%'
    }
})