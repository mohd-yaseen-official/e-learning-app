import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import PasswordLockIcon from '../../assets/authentication-screens-icons/dont-view.svg';

const PasswordVisibility = ({inputVisibility, setInputVisibility}) => {
    const togglePasswordVisibility = () => {
        setInputVisibility(!inputVisibility);
    };

    return (
        <TouchableOpacity onPress={togglePasswordVisibility}>
            <PasswordLockIcon />
        </TouchableOpacity>
    );
};

export default PasswordVisibility;

const styles = StyleSheet.create({});
