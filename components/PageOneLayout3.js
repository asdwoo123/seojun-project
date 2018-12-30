import React, {Component} from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-elements';
import DataContent from "./sub_components/DataContent";
import Placeholder from 'rn-placeholder';

class PageOneLayout3 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card containerStyle={[{ flex: 2.5, marginBottom: 10 }]}>
                <Placeholder.Paragraph
                    lineNumber={3}
                    textSize={16}
                    lineSpacing={5}
                    color="rgb(246, 247, 249)"
                    width="100%"
                    animate="fade"
                    onReady={this.props.isReady}
                >
                <View>
                <DataContent item="전체 수량" value={this.props.C_Total}/>
                <DataContent item="합격" value={this.props.uliPC_Schift_OK}/>
                <DataContent item="불합격" value={this.props.uliPC_Schift_NOK}/>
                </View>
                </Placeholder.Paragraph>
            </Card>
        );
    }
}

export default PageOneLayout3;

