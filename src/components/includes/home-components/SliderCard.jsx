import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import * as Progress from 'react-native-progress';

const SliderCard = ({course}) => {
    const navigation = useNavigation();

    return (
        <View
            style={[
                styles.sliderCard,
                {backgroundColor: course.backgroundColor},
            ]}>
            <View style={styles.cardContent}>
                <Text style={styles.courseText}>{course.status}</Text>
                <Text style={styles.courseTitle}>{course.title}</Text>
                <View style={styles.progressBarContainer}>
                    <Text style={styles.courseText}>
                        {(course.progress / 1) * 100}%
                    </Text>
                    <Progress.Bar
                        progress={course.progress}
                        color="#FFF"
                        borderWidth={0}
                        unfilledColor="rgba(255, 255, 255, 0.5)"
                        style={styles.progressBar}
                    />
                </View>
                <TouchableOpacity
                    style={styles.continueButton}
                    onPress={() => navigation.navigate('ProgressScreen')}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.courseIconContainer}>
                <Image source={course.icon} style={styles.courseIcon} />
            </View>
        </View>
    );
};

export default SliderCard;

const styles = StyleSheet.create({
    sliderCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 18,
        borderRadius: 26,
    },
    cardContent: {
        alignItems: 'flex-start',
        flex: 1,
    },
    courseText: {
        fontFamily: 'DMSans-Regular',
    },
    courseTitle: {
        fontSize: 18,
        fontFamily: 'DMSans-Regular',
        color: '#FFF',
        marginTop: 12,
        marginBottom: 6,
    },
    progressBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    continueButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 35,
        marginTop: 16,
    },
    buttonText: {
        color: '#FFF',
        fontFamily: 'DMSans-Medium',
    },
    courseIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        marginLeft: 24,
    },
    progressBar: {
        flex: 1,
        marginLeft: 6,
    },
    courseIcon: {
        width: '100%',
        flex: 1,
    },
});
