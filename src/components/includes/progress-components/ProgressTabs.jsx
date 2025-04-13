import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ProgressTabs = ({activeTab, setActiveTab}) => {
    const routes = [
        {
            id: 1,
            name: 'Lectures',
        },
        {
            id: 2,
            name: 'Ongoing',
        },
        {
            id: 3,
            name: 'Finished',
        },
    ];

    const handleNavigation = id => {
        routes.map(route => route.id === id && setActiveTab(route.name));
    };

    const renderTabs = () =>
        routes.map(route => (
            <TouchableOpacity
                key={route.id}
                onPress={() => handleNavigation(route.id)}
                style={[
                    styles.tab,
                    activeTab === route.name && styles.activeTab,
                ]}>
                <Text
                    style={[
                        styles.tabText,
                        activeTab === route.name && styles.activeTabtext,
                    ]}>
                    {route.name}
                </Text>
            </TouchableOpacity>
        ));
    return <View style={styles.tabsContainer}>{renderTabs()}</View>;
};

export default ProgressTabs;

const styles = StyleSheet.create({
    tabsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 18,
        paddingVertical: 12,
    },
    tab: {
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    activeTab: {
        borderBottomWidth: 3,
        borderBottomColor: '#726AEC',
    },
    tabText: {
        fontSize: 18,
        color: '#212236',
        fontFamily: 'DMSans-Regular',
    },
    activeTabtext: {
        color: '#726AEC',
        fontFamily: 'DMSans-SemiBold',
    },
});
