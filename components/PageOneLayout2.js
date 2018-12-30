import React from 'react';
import containerStyles from '../styles/containerStyles';
import { View } from 'react-native';
import SignalLight from './sub_components/SignalLight';
import DataTitle from "./sub_components/DataTitle";
import DataContent from "./sub_components/DataContent";
import { Card } from 'react-native-elements';
import Placeholder from 'rn-placeholder';

const PageOneLayout2 = (props) => (
        <View style={[containerStyles.container2, {flex: 4.5}]}>
        <Card containerStyle={[containerStyles.container3]}>
            <Placeholder.Paragraph
                lineNumber={8}
                textSize={16}
                lineSpacing={5}
                color="rgb(246, 247, 249)"
                width="100%"
                firstLineWidth="90%"
                animate="fade"
                onReady={props.isReady}
            >
            <View>
            <DataTitle>시그널 라이트</DataTitle>
            <SignalLight {...props} item="BalluffSignalLightB1" value={props.BalluffSignalLightB1} />
            <SignalLight {...props} item="BalluffSignalLightB2" value={props.BalluffSignalLightB2} />
            <SignalLight {...props} item="BalluffSignalLightB3" value={props.BalluffSignalLightB3} />
            <SignalLight {...props} item="BalluffSignalLightB4" value={props.BalluffSignalLightB4} />
            <SignalLight {...props} item="BalluffSignalLightB5" value={props.BalluffSignalLightB5} />
            <SignalLight {...props} item="BalluffSignalLightB6" value={props.BalluffSignalLightB6} />
            <SignalLight {...props} item="BalluffSignalLightB7" value={props.BalluffSignalLightB7} />
            </View>
            </Placeholder.Paragraph>
        </Card>

            <Card containerStyle={{flex: 0.4}}>
                <Placeholder.Paragraph
                    lineNumber={1}
                    textSize={16}
                    lineSpacing={5}
                    color="rgb(246, 247, 249)"
                    width="100%"
                    animate="fade"
                    onReady={props.isReady}
                >
                <View>
                <DataContent item="가동 시간" value={0} />
                </View>
                </Placeholder.Paragraph>
            </Card>
        </View>
);


export default PageOneLayout2;