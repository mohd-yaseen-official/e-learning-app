import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const PasswordValidation = ({password = '', setValidationResult}) => {
    const requirements = {
        length: {
            label: 'Should contain at least 8 characters',
            isValid: password?.length >= 8,
        },
        lowercase: {
            label: 'Should contain a lowercase letter (a-z)',
            isValid: /[a-z]/.test(password),
        },
        uppercase: {
            label: 'Should contain an uppercase letter (A-Z)',
            isValid: /[A-Z]/.test(password),
        },
        digit: {
            label: 'Should contain at least one number (0-9)',
            isValid: /\d/.test(password),
        },
        symbol: {
            label: 'Should contain at least one symbol ($, @, #, %, !, ?, &)',
            isValid: /[^a-zA-Z0-9]/.test(password),
        },
    };

    const [allRequirementsMet, setAllRequirementsMet] = useState(false);

    useEffect(() => {
        const isValid = Object.values(requirements).every(req => req.isValid);
        setAllRequirementsMet(isValid);
        setValidationResult(isValid);
    }, [password]);

    return (
        <View style={styles.container}>
            {!allRequirementsMet && (
                <Text style={styles.errorText}>
                    Password does not meet requirements.
                </Text>
            )}

            {Object.values(requirements).map(req => (
                <View key={req.label} style={styles.requirementContainer}>
                    <View
                        style={[styles.icon, req.isValid && styles.validIcon]}>
                        {req.isValid && <View style={styles.childIcon} />}
                    </View>
                    <Text
                        style={[
                            styles.requirementText,
                            req.isValid && styles.validRequirementText,
                        ]}>
                        {req.label}
                    </Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    errorText: {
        color: '#DE3730',
        fontSize: 14,
        fontFamily: 'DMSans-SemiBold',
        marginBottom: 24,
        marginTop: -12,
    },
    requirementContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    icon: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#747474',
        alignItems: 'center',
        justifyContent: 'center',
    },
    childIcon: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#726AEC',
    },
    requirementText: {
        fontSize: 14,
        fontFamily: 'DMSans-Regular',
        marginLeft: 8,
        color: '#747474',
    },
    validRequirementText: {
        color: '#726AEC',
    },
    validIcon: {
        borderColor: '#726AEC',
    },
});

export default PasswordValidation;
