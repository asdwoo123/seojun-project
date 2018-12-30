import React from 'react';
import containerStyles from '../styles/containerStyles';
import { Text, View } from 'react-native';
import dataStyles from '../styles/dataStyles';
import { Card } from 'react-native-elements';
import DataTitle from './sub_components/DataTitle';
import MenuLayout from "./sub_components/MenuLayout";
import Placeholder from 'rn-placeholder';

const PageOneLayout1 = (props) => (
        <View style={[containerStyles.container2, { flex: 1.5 }]}>
        <Card containerStyle={[containerStyles.container3]}>
            <Placeholder.Paragraph
                lineNumber={3}
                textSize={16}
                lineSpacing={5}
                color="rgb(246, 247, 249)"
                width="100%"
                firstLineWidth="90%"
                animate="fade"
                onReady={props.isReady}
            >
            <View>
            <DataTitle>상부 경광등</DataTitle>
            <View style={containerStyles.container4}>
                <Text style={dataStyles.contentText}>GREEN</Text>
                <View style={[dataStyles.lightView, { backgroundColor: (props.TurkSignalLight_GREEN) ? '#01DF74' : '#585858'}]}/>
            </View>
            <View style={containerStyles.container4}>
                <Text style={dataStyles.contentText}>RED</Text>
                <View style={[dataStyles.lightView, { backgroundColor: (props.TurkSignalLight_GREEN) ? '#FF4000' : '#585858'}]}/>
            </View>
            </View>
            </Placeholder.Paragraph>
        </Card>
                <MenuLayout />
        </View>
);

export default PageOneLayout1;


