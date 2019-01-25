import React from 'react';
import {View, Text} from "react-native";
import containerStyles from "../styles/containerStyles";
import {connect} from "react-redux";

const FirstRoute = (props) => (
    <View style={containerStyles.container}>
    </View>
);

export default connect(
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