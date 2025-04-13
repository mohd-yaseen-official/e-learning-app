import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import BackArrowIcon from '../../assets/progress-screen-icons/back-arrow.svg';
const GoBack = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.goBack}
            onPress={() => navigation.goBack()}>
            <BackArrowIcon width={24} height={24} fill={'#212236'} />
        </TouchableOpacity>
    );
};

export default GoBack;

const styles = StyleSheet.create({
    goBack: {
        marginRight: 12,
    },
});
