import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import React from 'react';
import MainScreen from "../components/MainScreen";
import AlarmOverview from "../components/AlarmOverview";
import Statistic from "../components/Statistic";
import MainTenance from "../components/MainTenance";
import PokaYoke from "../components/PokaYoke";
import ManualMode from "../components/ManualMode";
import IpSettings from "../components/IpSettings";


const AppNavigator = createDrawerNavigator(
    {
       Main: MainScreen,
       Alarm: AlarmOverview,
       Statis: Statistic,
       Poka: PokaYoke,
       tenan: MainTenance,
       Manual: ManualMode,
       IP: IpSettings
    },
    {
        defaultNavigationOptions: {
           headerStyle: {
               backgroundColor: '#3f51b5',
               elevation: 0,
               shadowOpacity: 0
           },
            headerTitleStyle: {
                left: 10
            },
            headerTintColor: '#fff'
        }
    }
);

export default createAppContainer(AppNavigator);







