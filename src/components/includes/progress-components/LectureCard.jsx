import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import * as Progress from 'react-native-progress';

const LectureCard = ({lecture}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.lectureCard}
            onPress={() =>
                navigation.navigate('ProgressScreen', {
                    screen: 'CourseDetails',
                    params: {lecture},
                })
            }>
            <View
                style={[
                    styles.lectureIconContainer,
                    lecture.status === 'Finished' &&
                        styles.finishedLectureIconContainer,
                ]}>
                <Image source={lecture.icon} style={styles.lectureIcon} />
            </View>
            <View style={styles.lectureDetailsContainer}>
                <Text style={styles.lectureSubject}>{lecture.subject}</Text>
                <Text
                    style={[
                        styles.lectureStatus,
                        lecture.status === 'Finished' &&
                            styles.finishedLectureStatus,
                    ]}>
                    {lecture.status}
                </Text>
            </View>
            <View style={styles.progressBarContainer}>
                <Progress.Bar
                    progress={lecture.progress}
                    color={
                        lecture.status === 'Finished' ? '#4AD082' : '#726AEC'
                    }
                    borderWidth={0}
                    unfilledColor="#F5F7FB"
                    style={styles.progressBar}
                    width={null}
                />
            </View>
        </TouchableOpacity>
    );
};

export default LectureCard;

const styles = StyleSheet.create({
    lectureCard: {
        backgroundColor: '#FFF',
        paddingHorizontal: 12,
        paddingVertical: 16,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        flex: 1,
        borderRadius: 8,
    },
    lectureIconContainer: {
        width: 60,
        height: 60,
        backgroundColor: '#726AEC',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    finishedLectureIconContainer: {
        backgroundColor: '#84E9F4',
    },
    lectureIcon: {
        width: 50,
        height: 50,
    },
    lectureDetailsContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 16,
    },
    lectureSubject: {
        color: '#1B1C30',
        fontSize: 16,
        fontFamily: 'DMSans-Bold',
    },
    lectureStatus: {
        color: '#7974B3',
        fontSize: 12,
        marginTop: 4,
        fontFamily: 'DMSans-SemiBold',
    },
    finishedLectureStatus: {
        color: '#4AD082',
    },
    progressBarContainer: {
        width: '55%',
        justifyContent: 'center',
    },
    progressBar: {
        width: '100%',
    },
});
