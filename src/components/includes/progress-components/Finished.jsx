import {ScrollView} from 'react-native';
import React, {useState} from 'react';
import LectureCard from './LectureCard';

const Finished = () => {
    const [lectures, setLectures] = useState([
        {
            id: 4,
            subject: 'History',
            status: 'Finished',
            progress: 1,
            icon: require('../../assets/progress-screen-icons/history.png'),
            lessons: [
                {
                    id: '1',
                    title: 'Ancient Civilizations',
                    duration: '3:10',
                    completed: true,
                    unlocked: true,
                    subtopics: [
                        {
                            id: '1.1',
                            title: 'Mesopotamia',
                            duration: '1:30',
                            completed: true,
                            unlocked: true,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                        {
                            id: '1.2',
                            title: 'Egyptian Civilization',
                            duration: '1:40',
                            completed: true,
                            unlocked: true,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                    ],
                },
            ],
        },
        {
            id: 6,
            subject: 'Biology',
            status: 'Finished',
            progress: 1,
            icon: require('../../assets/progress-screen-icons/biology.png'),
            lessons: [
                {
                    id: '1',
                    title: 'Cell Biology',
                    duration: '3:20',
                    completed: true,
                    unlocked: true,
                    subtopics: [
                        {
                            id: '1.1',
                            title: 'Cell Structure',
                            duration: '1:20',
                            completed: true,
                            unlocked: true,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                        {
                            id: '1.2',
                            title: 'Cell Function',
                            duration: '2:00',
                            completed: true,
                            unlocked: true,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                    ],
                },
            ],
        },
        {
            id: 7,
            subject: 'Editing',
            status: 'Finished',
            progress: 1,
            icon: require('../../assets/progress-screen-icons/photoshop.png'),
            lessons: [
                {
                    id: '1',
                    title: 'Basic Editing Techniques',
                    duration: '2:55',
                    completed: true,
                    unlocked: true,
                    subtopics: [
                        {
                            id: '1.1',
                            title: 'Cropping and Resizing',
                            duration: '1:10',
                            completed: true,
                            unlocked: true,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                        {
                            id: '1.2',
                            title: 'Color Correction',
                            duration: '1:45',
                            completed: true,
                            unlocked: true,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                    ],
                },
            ],
        },
    ]);

    const renderLectures = () =>
        lectures.map(lecture => (
            <LectureCard lecture={lecture} key={lecture.id} />
        ));
    return <ScrollView>{renderLectures()}</ScrollView>;
};

export default Finished;
