import React from 'react';
import {StyleSheet} from 'react-native';

import LoginIcon from '../assets/authentication-screens-icons/phone.svg';
import NameCollectorIcon from '../assets/authentication-screens-icons/profile.svg';
import PasswordCollectorIcon from '../assets/authentication-screens-icons/password-lock.svg';

import CheckMarkIcon from '../assets/course-details-screen-icons/checkmark-custom.svg';
import PlayIcon from '../assets/course-details-screen-icons/play.svg';
import LockIcon from '../assets/course-details-screen-icons/lock.svg';

import HomeLightIcon from '../assets/navigation-icons/Home g.svg';
import HomeDarkIcon from '../assets/navigation-icons/Home b.svg';
import ProgressLightIcon from '../assets/navigation-icons/class-light.svg';
import ProgressDarkIcon from '../assets/navigation-icons/class-dark.svg';
import ProfileLightIcon from '../assets/navigation-icons/user-light.svg';
import ProfileDarkIcon from '../assets/navigation-icons/user-dark.svg';

const getAppropriateHeaderImage = screenName => {
    let headerImage;
    switch (screenName) {
        case 'Login':
        case 'Register':
            headerImage = require('../assets/authentication-screens-icons/login-page.jpg');
            break;
        case 'OTP':
            headerImage = require('../assets/authentication-screens-icons/otp-page.jpg');
            break;
        case 'NameCollector':
            headerImage = require('../assets/authentication-screens-icons/name-page.jpg');
            break;
        case 'PasswordCollector':
            headerImage = require('../assets/authentication-screens-icons/password-page.jpg');
            break;
        default:
            break;
    }

    return headerImage;
};

const getAppropriateInputIcon = screenName => {
    switch (screenName) {
        case 'Login':
        case 'Register':
            return LoginIcon;
        case 'NameCollector':
            return NameCollectorIcon;
        case 'PasswordCollector':
            return PasswordCollectorIcon;
        default:
            return null;
    }
};

const getAppropriateTopicStatusIcon = (topic, isActive) => {
    if (topic.completed) {
        // console.log(topic);
        return <CheckMarkIcon fill={isActive ? '#FFFFFF' : '#726aec'} />;
    } else if (topic.unlocked) {
        // console.log(topic);
        return <PlayIcon color={isActive ? '#FFFFFF' : '#212236'} />;
    } else {
        return <LockIcon color={'#212236'} />;
    }
};

const getAppropriateTabIcon = (route, focused) => {
    switch (route.name) {
        case 'Home':
            return focused ? (
                <HomeDarkIcon style={styles.tabIcon} />
            ) : (
                <HomeLightIcon style={styles.tabIcon} />
            );
        case 'ProgressScreen':
            return focused ? (
                <ProgressDarkIcon style={styles.tabIcon} />
            ) : (
                <ProgressLightIcon style={styles.tabIcon} />
            );
        case 'Profile':
            return focused ? (
                <ProfileDarkIcon style={styles.tabIcon} />
            ) : (
                <ProfileLightIcon style={styles.tabIcon} />
            );
        default:
    }
};

export {
    getAppropriateHeaderImage,
    getAppropriateInputIcon,
    getAppropriateTopicStatusIcon,
    getAppropriateTabIcon,
};

const styles = StyleSheet.create({
    tabIcon: {
        width: 24,
        height: 24,
    },
});
