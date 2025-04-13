import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';
import CheckMarkIcon from '../assets/course-details-screen-icons/checkmark.svg';
import DropDownIcon from '../assets/course-details-screen-icons/drop-down.svg';
import {getAppropriateTopicStatusIcon} from '../includes/Functions';

const CourseDetails = ({route}) => {
    const [lessons, setLessons] = useState(route.params.lecture.lessons);
    const [activeSubtopic, setActiveSubtopic] = useState(() =>
        getLastUnlockedSubtopic(lessons),
    );
    const [expandedLessons, setExpandedLessons] = useState(
        lessons.map(lesson => lesson.id),
    );

    useEffect(() => {
        if (lessons && lessons.length > 0) {
            const lastUnlockedSubtopic = getLastUnlockedSubtopic(lessons);
            setActiveSubtopic(lastUnlockedSubtopic);
        } else {
            console.warn('Lessons data is empty or undefined');
        }
    }, [lessons]);

    function getLastUnlockedSubtopic(lectureLessons) {
        for (let i = lectureLessons.length - 1; i >= 0; i--) {
            const subtopics = lectureLessons[i].subtopics;
            for (let j = subtopics.length - 1; j >= 0; j--) {
                if (subtopics[j].unlocked) {
                    return subtopics[j];
                }
            }
        }
        return lectureLessons[0]?.subtopics[0];
    }

    const handleTopicSelection = subtopic => {
        setActiveSubtopic(subtopic);
    };

    const getNextSubtopic = id => {
        const [lessonIndex, subtopicIndex] = id.split('.').map(Number);

        try {
            const nextTopic = lessons[lessonIndex - 1].subtopics[subtopicIndex];
            if (!nextTopic) {
                throw new Error('Next subtopic is undefined');
            }
            return nextTopic;
        } catch {
            try {
                const nextTopic = lessons[lessonIndex].subtopics[0];
                if (!nextTopic) {
                    throw new Error('Next subtopic is undefined');
                }
                return nextTopic;
            } catch {
                return activeSubtopic;
            }
        }
    };

    const handleMarkAsComplete = () => {
        const currentTopicId = activeSubtopic.id;

        const updatedLessons = lessons.map(lesson => ({
            ...lesson,
            subtopics: lesson.subtopics.map(subtopic => ({...subtopic})),
        }));

        const [currentLessonIndex, currentSubtopicIndex] = currentTopicId
            .split('.')
            .map(Number);

        updatedLessons[currentLessonIndex - 1].subtopics[
            currentSubtopicIndex - 1
        ].completed = true;

        const nextSubtopic = getNextSubtopic(currentTopicId);
        if (nextSubtopic) {
            const [nextLessonIndex, nextSubtopicIndex] = nextSubtopic.id
                .split('.')
                .map(Number);

            updatedLessons[nextLessonIndex - 1].subtopics[
                nextSubtopicIndex - 1
            ].unlocked = true;
        }

        setLessons(updatedLessons);
    };

    const toggleLessonExpansion = lessonId => {
        setExpandedLessons(prev =>
            prev.includes(lessonId)
                ? prev.filter(id => id !== lessonId)
                : [...prev, lessonId],
        );
    };

    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.videoContainer}>
                <Video
                    source={{uri: activeSubtopic.videoUrl}}
                    style={styles.video}
                    controls
                />
            </View>
            <View style={styles.lessonDetailsContainer}>
                <View style={styles.lessonDetails}>
                    <Text style={styles.currentLesson}>
                        {activeSubtopic
                            ? activeSubtopic.title
                            : 'No Active Topic'}
                    </Text>
                    <Text style={styles.nextLesson}>
                        {getNextSubtopic(activeSubtopic.id).title}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.completeButton}
                    onPress={() => activeSubtopic && handleMarkAsComplete()}
                    disabled={!activeSubtopic}>
                    <CheckMarkIcon />
                    <Text style={styles.completeButtonText}>
                        Mark as Completed
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.lessonsContainer}>
                {lessons.map(lesson => (
                    <View key={lesson.id} style={styles.lesson}>
                        <TouchableOpacity
                            style={styles.lessonHeader}
                            onPress={() => toggleLessonExpansion(lesson.id)}>
                            <Text style={styles.lessonTitle}>
                                Lesson {lesson.id} - {lesson.title}
                            </Text>
                            <DropDownIcon style={styles.icon} />
                        </TouchableOpacity>
                        {expandedLessons.includes(lesson.id) && (
                            <View style={styles.subTopics}>
                                {lesson.subtopics.map(subtopic => (
                                    <TouchableOpacity
                                        key={subtopic.id}
                                        style={[
                                            styles.subtopic,
                                            activeSubtopic &&
                                            activeSubtopic.id === subtopic.id
                                                ? styles.activeSubtopic
                                                : null,
                                        ]}
                                        onPress={() =>
                                            subtopic.unlocked &&
                                            handleTopicSelection(subtopic)
                                        }>
                                        {getAppropriateTopicStatusIcon(
                                            subtopic,
                                            activeSubtopic &&
                                                activeSubtopic.id ===
                                                    subtopic.id,
                                        )}
                                        <Text
                                            style={[
                                                styles.subtopicText,
                                                activeSubtopic &&
                                                activeSubtopic.id ===
                                                    subtopic.id
                                                    ? styles.activeSubtopicText
                                                    : null,
                                            ]}>
                                            {subtopic.title}
                                        </Text>
                                        <Text
                                            style={[
                                                styles.subtopicDuration,
                                                activeSubtopic &&
                                                activeSubtopic.id ===
                                                    subtopic.id
                                                    ? styles.activeSubtopicText
                                                    : null,
                                            ]}>
                                            {subtopic.duration}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default CourseDetails;

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: '#F5F7FB',
    },
    videoContainer: {
        height: 200,
        backgroundColor: '#000',
    },
    video: {
        height: '100%',
        width: '100%',
    },
    lessonDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        paddingVertical: 24,
    },
    lessonDetails: {
        maxWidth: '50%',
    },
    currentLesson: {
        color: '#1B1C30',
        fontSize: 18,
        fontFamily: 'DMSans-SemiBold',
    },
    nextLesson: {
        color: '#A6A5A5',
        fontSize: 14,
        fontFamily: 'DMSans-Regular',
    },
    completeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#726AEC',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
    },
    completeButtonText: {
        color: '#726AEC',
        marginLeft: 5,
        fontFamily: 'DMSans-SemiBold',
    },
    lessonsContainer: {
        paddingHorizontal: 18,
    },
    lessonHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        backgroundColor: '#F8FAF6',
        paddingHorizontal: 12,
        paddingVertical: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E4E4E4',
    },
    lessonTitle: {
        fontSize: 16,
        color: '#212236',
        fontFamily: 'DMSans-SemiBold',
    },
    subtopic: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 8,
        marginBottom: 8,
        position: 'relative',
    },
    subtopicText: {
        fontSize: 16,
        color: '#212236',
        fontFamily: 'DMSans-Regular',
        marginLeft: 12,
    },
    subtopicDuration: {
        fontSize: 16,
        color: '#212236',
        fontFamily: 'DMSans-Regular',
        position: 'absolute',
        right: 12,
    },
    activeSubtopic: {
        backgroundColor: '#726AEC',
    },
    activeSubtopicText: {
        color: '#FFFFFF',
    },
});
