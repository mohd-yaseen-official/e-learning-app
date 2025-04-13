import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import PlayIcon from '../../assets/home-screen-icons/white-play-button.svg';
import {useNavigation} from '@react-navigation/native';

const CourseCard = ({course}) => {
    const navigation = useNavigation();

    return (
        <View
            style={[
                styles.courseCard,
                {backgroundColor: course.backgroundColor},
                course.id % 2 !== 0 && styles.evenCard,
            ]}>
            <Text style={styles.courseTitle}>{course.title}</Text>
            <View style={styles.bottomContainer}>
                <View style={styles.bottomLeftContainer}>
                    <Text style={styles.numberOfClasses}>
                        {course.numberOfClasses} classes
                    </Text>
                    <TouchableOpacity
                        style={styles.playButtonContainer}
                        onPress={() => navigation.navigate('ProgressScreen')}>
                        <PlayIcon />
                    </TouchableOpacity>
                </View>
                <View style={styles.courseIconContainer}>
                    <Image source={course.icon} style={styles.courseIcon} />
                </View>
            </View>
        </View>
    );
};

export default CourseCard;

const styles = StyleSheet.create({
    courseCard: {
        width: '48.5%',
        marginBottom: 8,
        height: 120,
        borderRadius: 8,
        padding: 12,
    },
    courseTitle: {
        fontSize: 18,
        fontFamily: 'DMSans-Regular',
        color: '#FFF',
    },
    numberOfClasses: {
        fontSize: 14,
        fontFamily: 'DMSans-Regular',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
    },
    bottomLeftContainer: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    playButtonContainer: {
        padding: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 8,
    },
    courseIconContainer: {
        width: 65,
        height: 65,
    },
    courseIcon: {
        width: '100%',
        height: '100%',
    },
    evenCard: {
        marginRight: 8,
    },
});
