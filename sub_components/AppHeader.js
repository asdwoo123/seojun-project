import React from 'react';
import ActionBar from 'react-native-action-bar';


const AppHeader = (props) => {
    return (
        <ActionBar
            backgroundColor="white"
            leftIconImageStyle={{ backgroundColor: 'black' }}
            titleStyle={{ color: 'black' }}
            containerStyle={{ marginTop: 26, height: 50, alignItems: 'center' }}
            title={props.title}
            leftIconName="menu"
            onLeftPress={() => props.navigation.openDrawer()}
        />
    )
};

export default AppHeader;