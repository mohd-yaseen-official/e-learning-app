import React, {useState} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    Image,
    StyleSheet,
} from 'react-native';
import {
    getAppropriateHeaderImage,
    getAppropriateInputIcon,
} from '../includes/Functions';
import SubmitButton from '../includes/authentication-components/SubmitButton';

const Auth = ({
    navigation,
    route,
    title,
    subTitle,
    CustomForm,
    inputWidth,
    inputPadding = 48,
    boldInput,
    keyboardType = 'default',
    placeholder,
    fixedPlaceholder,
    InputAction,
    defaultVisibility = true,
    CustomSelection,
    submitButtonPosition = 'top',
    CustomValidation,
    nextScreen,
    buttonText = 'Submit',
    FooterView,
}) => {
    const screenName = route.name;
    const headerImage = getAppropriateHeaderImage(screenName);
    const InputIcon = getAppropriateInputIcon(screenName);

    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState(null);
    const [inputVisibility, setInputVisibility] = useState(defaultVisibility);

    const [validationResult, setValidationResult] = useState(false);

    if (screenName === 'OTP') {
        var {phoneNumber} = route.params;
    }

    const refresh = () => navigation.navigate(screenName, route.params);

    const renderForm = () => (
        <View style={[styles.form, inputWidth && {width: inputWidth}]}>
            {CustomForm ? (
                screenName === 'OTP' ? (
                    <CustomForm
                        onOTPComplete={handleOTPComplete}
                        handleRefresh={refresh}
                    />
                ) : (
                    <CustomForm />
                )
            ) : (
                <>
                    <InputIcon style={styles.inputIcon} />
                    <Text style={styles.fixedPlaceholder}>
                        {fixedPlaceholder}
                    </Text>
                    <TextInput
                        style={[
                            styles.mainInput,
                            boldInput && styles.boldInput,
                            inputPadding && {paddingLeft: inputPadding},
                            isFocused && styles.activeInput,
                        ]}
                        keyboardType={keyboardType}
                        placeholder={placeholder && placeholder}
                        secureTextEntry={!inputVisibility}
                        placeholderTextColor={'#A6A5A5'}
                        onChangeText={value => {
                            setInputValue(value);
                        }}
                        value={inputValue}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                    {InputAction && (
                        <View style={styles.inputAction}>
                            <InputAction
                                inputVisibility={inputVisibility}
                                setInputVisibility={setInputVisibility}
                            />
                        </View>
                    )}
                </>
            )}
        </View>
    );

    const handleSubmission = () => {
        if (
            nextScreen &&
            inputValue &&
            (CustomValidation ? validationResult : true)
        ) {
            navigation.navigate(
                nextScreen,
                screenName === 'Login' || screenName === 'Register'
                    ? {phoneNumber: inputValue}
                    : null,
            );
        }
    };

    const handleOTPComplete = otp => setInputValue(otp);

    return (
        <SafeAreaView style={styles.authScreen}>
            <View style={styles.headerImageContainer}>
                <Image source={headerImage} accessibilityLabel="Header image" />
            </View>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text
                    style={[
                        styles.subTitle,
                        !CustomSelection && styles.extraMargin,
                    ]}>
                    {subTitle}{' '}
                    {screenName === 'OTP' && (
                        <Text style={styles.phoneNumber}>
                            +91 {phoneNumber}
                        </Text>
                    )}
                </Text>

                <View style={styles.formContainer}>
                    {CustomSelection ? (
                        <>
                            <CustomSelection />
                            {renderForm()}
                        </>
                    ) : (
                        renderForm()
                    )}
                </View>

                {CustomValidation && (
                    <CustomValidation
                        password={inputValue}
                        setValidationResult={setValidationResult}
                    />
                )}
            </View>
            <View
                style={[
                    styles.submitContainer,
                    submitButtonPosition === 'bottom' &&
                        styles.bottomSubmitButtonContainer,
                ]}>
                <SubmitButton onSubmit={handleSubmission} text={buttonText} />
            </View>
            {FooterView && <FooterView screenName={screenName} />}
        </SafeAreaView>
    );
};

export default Auth;

const styles = StyleSheet.create({
    authScreen: {
        backgroundColor: '#FFF',
        paddingHorizontal: 24,
        paddingVertical: 38,
        height: '100%',
    },
    headerImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 48,
    },
    title: {
        fontSize: 26,
        fontFamily: 'DMSans-Bold',
        color: '#212236',
        textAlign: 'center',
        marginBottom: 18,
    },
    subTitle: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'DMSans-Regular',
        color: '#747474',
    },
    formContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    inputIcon: {
        position: 'absolute',
        top: 12,
        left: 16,
    },
    mainInput: {
        borderColor: '#EAEAEA',
        borderWidth: 1,
        width: '100%',
        borderRadius: 12,
        position: 'relative',
        color: '#212236',
        fontSize: 18,
        fontFamily: 'DMSans-Regular',
    },
    form: {
        width: '100%',
    },
    fixedPlaceholder: {
        position: 'absolute',
        left: 46,
        top: 13,
        fontSize: 18,
        color: '#212236',
        fontFamily: 'DMSans-SemiBold',
    },
    inputAction: {
        position: 'absolute',
        right: 16,
        top: 13,
    },
    bottomSubmitButtonContainer: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        width: '100%',
    },
    phoneNumber: {
        color: '#726AEC',
        fontFamily: 'DMSans-Medium',
    },
    activeInput: {borderColor: '#726AEC'},
    boldInput: {
        fontFamily: 'DMSans-SemiBold',
    },
    extraMargin: {marginBottom: 14},
});
