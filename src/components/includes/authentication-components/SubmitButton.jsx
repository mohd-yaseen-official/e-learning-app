import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const SubmitButton = ({
    backgroundColor = '#726AEC',
    color = '#FFF',
    onSubmit,
    text,
}) => {
    return (
        <TouchableOpacity
            style={[styles.submitButton, {backgroundColor}]}
            onPress={onSubmit}>
            <Text style={[styles.submitButtonText, {color}]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    submitButton: {
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
        width: '100%',
        elevation: 5,
    },
    submitButtonText: {
        fontSize: 16,
        fontFamily: 'DMSans-Medium',
    },
});
