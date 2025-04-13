import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ProgressTabs from '../includes/progress-components/ProgressTabs';
import Lectures from '../includes/progress-components/Lectures';
import Ongoing from '../includes/progress-components/Ongoing';
import Finished from '../includes/progress-components/Finished';

const Progress = ({route, navigation}) => {
    const [activeTab, setActiveTab] = useState('Lectures');

    useEffect(() => {
        navigation.setOptions({
            headerTitle: activeTab,
        });
    }, [navigation, activeTab]);

    const renderTabs = () => {
        switch (activeTab) {
            case 'Lectures':
                return <Lectures />;
            case 'Ongoing':
                return <Ongoing />;
            case 'Finished':
                return <Finished />;
            default:
                return <Lectures />;
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ProgressTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            {renderTabs()}
        </SafeAreaView>
    );
};

export default Progress;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F5F7FB',
    },
});
