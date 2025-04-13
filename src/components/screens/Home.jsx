import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native';
import React, {useState} from 'react';
import Lectures from '../includes/progress-components/Lectures';
import NotificationIcon from '../assets/home-screen-icons/notification.svg';
import CourseCard from '../includes/home-components/CourseCard';
import CourseSlider from '../includes/home-components/CourseSlider';

const Home = () => {
    const [userInfo, setUserInfo] = useState({
        name: 'Melissa Brown',
        email: 'melissabrown@gmail.com',
        profilePicture: require('../assets/profile-screen-icons/person.jpg'),
    });

    const [courses, setCourses] = useState([
        {
            id: 1,
            title: 'UI/UX Design',
            numberOfClasses: '03',
            icon: require('../assets/progress-screen-icons/ui-ux.png'),
            backgroundColor: '#726AEC',
        },
        {
            id: 2,
            title: 'Derivation',
            numberOfClasses: '05',
            icon: require('../assets/progress-screen-icons/derivation.png'),
            backgroundColor: '#84E9F4',
        },
        {
            id: 3,
            title: 'Photoshop',
            numberOfClasses: '08',
            icon: require('../assets/progress-screen-icons/photoshop.png'),
            backgroundColor: '#84E9F4',
        },
        {
            id: 4,
            title: 'Bussiness',
            numberOfClasses: '03',
            icon: require('../assets/progress-screen-icons/bussiness.png'),
            backgroundColor: '#E02B1D',
        },
    ]);

    const [ongoingCourses, setOngoingCourses] = useState([
        {
            id: 1,
            title: '3D Art & Illustration',
            status: 'Ongoing',
            progress: 0.5,
            icon: require('../assets/progress-screen-icons/3d-art-illution.png'),
            backgroundColor: '#726AEC',
        },
        {
            id: 2,
            title: 'Maths',
            status: 'Ongoing',
            progress: 0.3,
            icon: require('../assets/progress-screen-icons/maths.png'),
            backgroundColor: '#84E9F4',
        },
        {
            id: 3,
            title: 'UI/UX Design',
            status: 'Ongoing',
            progress: 0.6,
            icon: require('../assets/progress-screen-icons/ui-ux.png'),
            backgroundColor: '#E02B1D',
        },
    ]);

    const renderCourseCards = () =>
        courses.map(course => <CourseCard key={course.id} course={course} />);

    return (
        <ScrollView style={styles.safeArea}>
            <View style={styles.header}>
                <View style={styles.profilePictureContainer}>
                    <Image
                        source={userInfo.profilePicture}
                        style={styles.profilePicture}
                    />
                </View>
                <View style={styles.greetingContainer}>
                    <Text style={styles.greetingText}>
                        Hey, {userInfo.name} 👋
                    </Text>
                    <Text style={styles.greetingSubText}>
                        let's get started
                    </Text>
                </View>
                <NotificationIcon styles={styles.notificationIcon} />
                <View style={styles.redDot} />
            </View>

            <CourseSlider courses={ongoingCourses} />

            <View>
                <Text style={styles.subTitle}>Choose Your Course</Text>
                <View style={styles.courseCardsContainer}>
                    {renderCourseCards()}
                </View>
            </View>

            <View>
                <Text style={styles.subTitle}>Today's Lecture</Text>
                <Lectures />
            </View>
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    safeArea: {
        paddingHorizontal: 18,
        paddingVertical: 28,
        backgroundColor: '#F5F7FB',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 18,
    },
    profilePictureContainer: {
        width: 60,
        height: 60,
        marginRight: 12,
    },
    profilePicture: {
        width: '100%',
        height: '100%',
        borderRadius: 40,
    },
    greetingContainer: {
        flex: 1,
    },
    greetingText: {
        fontSize: 18,
        fontFamily: 'DMSans-SemiBold',
        color: '#212236',
    },
    greetingSubText: {
        fontSize: 14,
        color: '#A6A5A5',
        fontFamily: 'DMSans-Regular',
    },
    notificationIcon: {
        position: 'relative',
    },
    redDot: {
        position: 'absolute',
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E02B1D',
        right: 3,
        top: 20,
    },
    subTitle: {
        fontSize: 16,
        fontFamily: 'DMSans-Medium',
        color: '#676767',
        marginVertical: 12,
    },
    courseCardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
