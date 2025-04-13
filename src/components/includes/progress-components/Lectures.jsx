import {ScrollView} from 'react-native';
import React, { useState } from 'react';
import LectureCard from './LectureCard';

const Lectures = () => {
    const [lectures, setLectures] = useState([
        {
            id: 1,
            subject: 'Maths',
            status: 'Running',
            progress: 0.3,
            icon: require('../../assets/progress-screen-icons/maths.png'),
            lessons: [
                {
                    id: '1',
                    title: 'Introduction to Maths',
                    duration: '2:10',
                    completed: false,
                    unlocked: true,
                    subtopics: [
                        {
                            id: '1.1',
                            title: 'What is Mathematics?',
                            duration: '1:00',
                            completed: false,
                            unlocked: true,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                        {
                            id: '1.2',
                            title: 'Basic Concepts',
                            duration: '2:10',
                            completed: false,
                            unlocked: false,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                        {
                            id: '1.3',
                            title: 'Importance of Maths',
                            duration: '2:05',
                            completed: false,
                            unlocked: false,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                    ],
                },
                {
                    id: '2',
                    title: 'Algebra Basics',
                    duration: '3:05',
                    completed: false,
                    unlocked: false,
                    subtopics: [
                        {
                            id: '2.1',
                            title: 'Variables and Expressions',
                            duration: '2:00',
                            completed: false,
                            unlocked: false,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                        {
                            id: '2.2',
                            title: 'Solving Equations',
                            duration: '1:50',
                            completed: false,
                            unlocked: false,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                        {
                            id: '2.3',
                            title: 'Polynomials',
                            duration: '3:15',
                            completed: false,
                            unlocked: false,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            subject: 'UIUX',
            status: 'Running',
            progress: 0.6,
            icon: require('../../assets/progress-screen-icons/ui-ux.png'),
            lessons: [
                {
                    id: '1',
                    title: 'UI/UX Basics',
                    duration: '3:00',
                    completed: false,
                    unlocked: true,
                    subtopics: [
                        {
                            id: '1.1',
                            title: 'Introduction to UI/UX',
                            duration: '1:30',
                            completed: false,
                            unlocked: true,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                        {
                            id: '1.2',
                            title: 'Design Principles',
                            duration: '2:15',
                            completed: false,
                            unlocked: false,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                    ],
                },
                {
                    id: '2',
                    title: 'Color Theory',
                    duration: '4:15',
                    completed: false,
                    unlocked: false,
                    subtopics: [
                        {
                            id: '2.1',
                            title: 'Understanding Colors',
                            duration: '2:20',
                            completed: false,
                            unlocked: false,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                        {
                            id: '2.2',
                            title: 'Color Schemes',
                            duration: '2:00',
                            completed: false,
                            unlocked: false,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                    ],
                },
            ],
        },
        {
            id: 3,
            subject: '3D Art',
            status: 'Running',
            progress: 0.25,
            icon: require('../../assets/progress-screen-icons/3d-art-illution.png'),
            lessons: [
                {
                    id: '1',
                    title: 'Introduction to 3D Art',
                    duration: '4:30',
                    completed: false,
                    unlocked: true,
                    subtopics: [
                        {
                            id: '1.1',
                            title: 'What is 3D Art?',
                            duration: '2:10',
                            completed: false,
                            unlocked: true,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                        {
                            id: '1.2',
                            title: 'Basic Tools',
                            duration: '2:20',
                            completed: false,
                            unlocked: false,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                    ],
                },
                {
                    id: '2',
                    title: '3D Modeling Basics',
                    duration: '3:25',
                    completed: false,
                    unlocked: false,
                    subtopics: [
                        {
                            id: '2.1',
                            title: 'Understanding 3D Models',
                            duration: '1:30',
                            completed: false,
                            unlocked: false,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                        {
                            id: '2.2',
                            title: 'Basic Modeling Techniques',
                            duration: '2:00',
                            completed: false,
                            unlocked: false,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                    ],
                },
            ],
        },
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
            id: 5,
            subject: 'Python',
            status: 'Running',
            progress: 0.5,
            icon: require('../../assets/progress-screen-icons/derivation.png'),
            lessons: [
                {
                    id: '1',
                    title: 'Introduction to Python',
                    duration: '2:30',
                    completed: false,
                    unlocked: true,
                    subtopics: [
                        {
                            id: '1.1',
                            title: 'Getting Started with Python',
                            duration: '1:20',
                            completed: false,
                            unlocked: true,
                            videoUrl: require('../../assets/progress-screen-icons/video-lecture.mp4'),
                        },
                        {
                            id: '1.2',
                            title: 'Python Syntax',
                            duration: '1:10',
                            completed: false,
                            unlocked: false,
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

export default Lectures;
