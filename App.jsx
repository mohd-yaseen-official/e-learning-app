import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Auth from './src/components/screens/Auth';
import HomeTabScreens from './src/components/includes/navigation-components/HomeTabScreens';
import CountrySelection from './src/components/includes/authentication-components/CountrySelection';
import AuthFooter from './src/components/includes/authentication-components/AuthFooter';
import OTPField from './src/components/includes/authentication-components/OTPField';
import PasswordValidation from './src/components/includes/authentication-components/PasswordValidation';
import PasswordVisibility from './src/components/includes/authentication-components/PasswordVisibility';

const App = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName="Login">
                <Stack.Screen name="Login">
                    {props => (
                        <Auth
                            {...props}
                            title="Login to your account"
                            subTitle="Login with your phone number"
                            CustomForm={false}
                            boldInput={true}
                            inputWidth={'78%'}
                            inputPadding={84}
                            keyboardType="numeric"
                            fixedPlaceholder="+91"
                            CustomSelection={CountrySelection}
                            submitButtonPosition="top"
                            CustomValidation={false}
                            nextScreen="OTP"
                            buttonText="Join Now"
                            FooterView={AuthFooter}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name="Register">
                    {props => (
                        <Auth
                            {...props}
                            title="Create your account"
                            subTitle="Create with your phone number"
                            CustomForm={false}
                            boldInput={true}
                            inputWidth={'78%'}
                            inputPadding={84}
                            keyboardType="numeric"
                            fixedPlaceholder="+91"
                            CustomSelection={CountrySelection}
                            submitButtonPosition="top"
                            CustomValidation={false}
                            nextScreen="OTP"
                            buttonText="Create Now"
                            FooterView={AuthFooter}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name="OTP">
                    {props => (
                        <Auth
                            {...props}
                            title="Verify OTP"
                            subTitle="Please enter 4 digit code that is send to you at"
                            CustomForm={OTPField}
                            CustomSelection={false}
                            submitButtonPosition="top"
                            CustomValidation={false}
                            nextScreen="NameCollector"
                            buttonText="Verify"
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name="NameCollector">
                    {props => (
                        <Auth
                            {...props}
                            title="Enter Your Name"
                            subTitle="Enter your full name for your account"
                            CustomForm={false}
                            placeholder="Enter Name"
                            CustomSelection={false}
                            submitButtonPosition="bottom"
                            CustomValidation={false}
                            nextScreen="PasswordCollector"
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name="PasswordCollector">
                    {props => (
                        <Auth
                            {...props}
                            title="Set a Strong Password"
                            subTitle="Set a strong password for your account"
                            CustomForm={false}
                            placeholder="Enter strong password"
                            InputAction={PasswordVisibility}
                            defaultVisibility={false}
                            CustomSelection={false}
                            submitButtonPosition="bottom"
                            CustomValidation={PasswordValidation}
                            nextScreen="HomeScreen"
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen name="HomeScreen" component={HomeTabScreens} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
