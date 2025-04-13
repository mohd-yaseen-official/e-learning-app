import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Progress from '../../screens/Progress';
import CourseDetails from '../../screens/CourseDetails';
import GoBack from './GoBack';

const ProgressStack = createNativeStackNavigator();
const renderGoBackButton = navigation => () =>
    <GoBack navigation={navigation} />;
const ProgressStackScreens = () => (
    <ProgressStack.Navigator>
        <ProgressStack.Screen
            name="Progress"
            component={Progress}
            options={({navigation}) => ({
                headerStyle: {
                    backgroundColor: '#F5F7FB',
                },
                headerShadowVisible: false,
                headerTitleStyle: {
                    fontSize: 18,
                    fontFamily: 'DMSans-Medium',
                },
                headerLeft: renderGoBackButton(navigation),
            })}
        />
        <ProgressStack.Screen
            name="CourseDetails"
            component={CourseDetails}
            options={{
                headerShown: false,
            }}
        />
    </ProgressStack.Navigator>
);

export default ProgressStackScreens;
