import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import pageOne from './PageOne';
import HeaderMenu from "../components/sub_components/HeaderMenu";

const AppNavigator = createStackNavigator(
    {
       One: pageOne
    },
    {
       initalRouteName: 'One',
        defaultNavigationOptions: {
           headerStyle: {
               backgroundColor: '#3f51b5',
               elevation: 0,
               shadowOpacity: 0
           },
            headerTitleStyle: {
                left: 10
            },
            headerTintColor: '#fff',
            headerRight: (
                <HeaderMenu />
            )
        }
    }
);

export default createAppContainer(AppNavigator);




