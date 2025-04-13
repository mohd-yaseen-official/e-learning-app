import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import DropDownIcon from '../../assets/authentication-screens-icons/drop-down.svg';

const CountrySelection = () => {
    return (
        <View style={styles.countryContainer}>
            <Image
                source={require('../../assets/authentication-screens-icons/flag.png')}
                style={styles.flag}
            />
            <TouchableOpacity>
                <DropDownIcon style={styles.dropDownIcon} />
            </TouchableOpacity>
        </View>
    );
};

export default CountrySelection;

const styles = StyleSheet.create({
    countryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    flag: {width: 42, marginRight: 4},
    dropDownIcon: {
        width: 16,
        height: 16,
        tintColor: '#747474',
    },
});
