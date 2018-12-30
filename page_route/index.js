import React from 'react';
import {View, Text} from "react-native";
import containerStyles from "../styles/containerStyles";
import PageOneLayout1 from "../navigate/PageOne";
import PageOneLayout1 from '../components/PageOneLayout1';
import PageOneLayout2 from '../components/PageOneLayout2';
import PageOneLayout3 from '../components/PageOneLayout3';
import {connect} from "react-redux";

const FirstRoute = (props) => (
    <View style={containerStyles.container}>
        <PageOneLayout1 {...props} />
        <PageOneLayout2 {...props} />
        <PageOneLayout3 {...props} />
    </View>
);

export const FirstRouteComponent = connect(
    (state) => ({
        TurkSignalLight_GREEN: state.opc.TurkSignalLight_GREEN,
        TurkSignalLight_RED: state.opc.TurkSignalLight_RED,
        BalluffSignalLightB1: state.opc.BalluffSignalLightB1,
        BalluffSignalLightB2: state.opc.BalluffSignalLightB2,
        BalluffSignalLightB3: state.opc.BalluffSignalLightB3,
        BalluffSignalLightB4: state.opc.BalluffSignalLightB4,
        BalluffSignalLightB5: state.opc.BalluffSignalLightB5,
        BalluffSignalLightB6: state.opc.BalluffSignalLightB6,
        BalluffSignalLightB7: state.opc.BalluffSignalLightB7,
        C_Total: state.opc.C_Total,
        uliPC_Schift_OK: state.opc.uliPC_Schift_OK,
        uliPC_Schift_NOK: state.opc.uliPC_Schift_NOK,
        isReady: state.opc.isReady
    })
)(FirstRoute);

export const SecondRoute = () => (
    <View style={[containerStyles.container, { justifyContent: 'center', alignItems: 'center' }]}><Text>장비수치 2</Text></View>
);

export const ThirdRoute = () => (
    <View style={[containerStyles.container,  { justifyContent: 'center', alignItems: 'center' }]}><Text>장비제어</Text></View>
)