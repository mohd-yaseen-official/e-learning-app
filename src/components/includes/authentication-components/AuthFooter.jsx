import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const AuthFooter = ({screenName}) => {
    const navigation = useNavigation();

    const footerText =
        screenName === 'Login'
            ? "don't have a account?"
            : 'already have an account?';
    const footerLinkText =
        screenName === 'Login' ? 'Create an Account' : 'Login to Account';

    const handleNavigation = () => {
        navigation.navigate(screenName !== 'Register' ? 'Register' : 'Login');
    };

    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>{footerText}</Text>
            <TouchableOpacity
                style={styles.footerLink}
                onPress={handleNavigation}>
                <Text style={[styles.footerText, styles.footerLinkText]}>
                    {footerLinkText}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default AuthFooter;

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        color: '#A6A5A5',
        fontFamily: 'DMSans-SemiBold',
        fontSize: 14,
    },
    footerLink: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 4,
    },
    footerLinkText: {
        color: '#726AEC',
    },
});
