import React, {Component} from 'react';
import { View , Dimensions, Text, StyleSheet } from 'react-native';
import { socketDataLoad } from '../redux/socketReducer';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { FirstRouteComponent, SecondRoute, ThirdRoute } from '../page_route';

class PageOne extends Component {
    static navigationOptions = {
        title: '장비이름',
    };

    state = {
        index: 0,
        routes: [
            { key: 'first', title: '장비수치' },
            { key: 'second', title: '장비수치2' },
            { key: 'third', title: '장비제어' },
        ],
    };

    _renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={styles.tabbar}
            tabStyle={styles.tab}
            labelStyle={styles.label}
        />
    );

    componentDidMount() {
        socketDataLoad();
    }

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: FirstRouteComponent,
                    second: SecondRoute,
                    third: ThirdRoute
                })}
                renderTabBar={this._renderTabBar}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width, height: 0 }}
            />
        );
    }
}

export default PageOne;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabbar: {
        backgroundColor: '#3f51b5',
    },
    tab: {
        flex: 1
    },
    indicator: {
        backgroundColor: '#ffeb3b',
    },
    label: {
        color: '#fff',
        fontWeight: '400',
    },
});





