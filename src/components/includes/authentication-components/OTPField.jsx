import {Text, Platform, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const OTPField = ({onOTPComplete, handleRefresh}) => {
    const CELL_COUNT = 4;
    const [value, setValue] = useState('');
    const [timeLeft, setTimeLeft] = useState(10);
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    useEffect(() => {
        if (value.length === CELL_COUNT) {
            onOTPComplete(value);
        }
    }, [value, onOTPComplete]);

    useEffect(() => {
        if (timeLeft === 0) {
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleResendCode = () => {
        setTimeLeft(10);
        handleRefresh && handleRefresh();
        setValue('');
    };

    return (
        <>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                autoComplete={Platform.select({
                    android: 'sms-otp',
                    default: 'one-time-code',
                })}
                testID="my-code-input"
                renderCell={({index, symbol, isFocused}) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                )}
            />
            <Text style={styles.footerText}>
                Don't receive code?{' '}
                <Text style={styles.footerTime}>{timeLeft} Sec</Text>
            </Text>
            {timeLeft === 0 && (
                <TouchableOpacity onPress={handleResendCode}>
                    <Text style={styles.resendText}>Resend Code</Text>
                </TouchableOpacity>
            )}
        </>
    );
};

export default OTPField;

const styles = StyleSheet.create({
    cell: {
        height: 70,
        width: '21%',
        lineHeight: 40,
        fontSize: 30,
        borderWidth: 2,
        borderColor: '#EAEAEA',
        textAlign: 'center',
        verticalAlign: 'middle',
        borderRadius: 8,
        color: '#212236',
    },
    focusCell: {
        borderColor: '#726AEC',
    },
    footerText: {
        marginTop: 12,
        alignSelf: 'flex-end',
        color: '#212236',
        fontFamily: 'DMSans-SemiBold',
        fontSize: 14,
    },
    footerTime: {
        color: '#726AEC',
    },
    resendText: {
        marginTop: 8,
        color: '#726AEC',
        fontFamily: 'DMSans-SemiBold',
        textAlign: 'right',
    },
});
