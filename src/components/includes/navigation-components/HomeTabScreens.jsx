import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProgressStackScreens from './ProgressStackScreens';
import Profile from '../../screens/Profile';
import Home from '../../screens/Home';
import {getAppropriateTabIcon} from '../Functions';

const HomeTabs = createBottomTabNavigator();

const HomeTabScreens = () => (
    <HomeTabs.Navigator
        screenOptions={({route}) => ({
            headerShown: false,
            tabBarStyle: {
                elevation: 0,
                borderTopWidth: 0,
                borderRadius: 30,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                paddingTop: 4,
            },
            tabBarIcon: ({focused}) => getAppropriateTabIcon(route, focused),
            tabBarLabel: '',
        })}>
        <HomeTabs.Screen name="Home" component={Home} />
        <HomeTabs.Screen
            name="ProgressScreen"
            component={ProgressStackScreens}
        />
        <HomeTabs.Screen name="Profile" component={Profile} />
    </HomeTabs.Navigator>
);

export default HomeTabScreens;
