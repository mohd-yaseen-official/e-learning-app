import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import * as Progress from 'react-native-progress';
import InformationIcon from '../assets/profile-screen-icons/information.svg';
import PaymentHistoryIcon from '../assets/profile-screen-icons/payment-history.svg';

const Profile = () => {
    const [userInfo, setUserInfo] = useState({
        name: 'Melissa Brown',
        email: 'melissabrown@gmail.com',
        profilePicture: require('../assets/profile-screen-icons/person.jpg'),
    });

    const [ongoingCourses, setOngoingCourses] = useState([
        {
            id: 1,
            title: '3D Art & Illustration',
            timeSpend: '18 Hour Spend',
            progress: 0.5,
            progressPercentage: '50%',
            color: '#726AEC',
        },
        {
            id: 2,
            title: 'Derivation',
            timeSpend: '14 Hour Spend',
            progress: 0.7,
            progressPercentage: '70%',
            color: '#84E9F4',
        },
        {
            id: 3,
            title: 'Business',
            timeSpend: '18 Hour Spend',
            progress: 0.5,
            progressPercentage: '50%',
            color: '#E02B1D',
        },
    ]);

    const [accountOptions, setAccountOptions] = useState([
        {
            id: 1,
            title: 'Account',
            icon: InformationIcon,
        },
        {
            id: 2,
            title: 'Payment History',
            icon: PaymentHistoryIcon,
        },
        {
            id: 3,
            title: 'Payment History',
            icon: PaymentHistoryIcon,
        },
    ]);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.profileContainer}>
                <Image
                    source={userInfo.profilePicture}
                    style={styles.profilePicture}
                />
                <Text style={styles.name}>{userInfo.name}</Text>
                <Text style={styles.email}>{userInfo.email}</Text>
            </View>
            <View style={styles.ongoingCourseContainer}>
                <Text style={styles.headerTitle}>Courses You're Taking</Text>
                <ScrollView horizontal>
                    {ongoingCourses.map(course => (
                        <View
                            key={course.id}
                            style={[
                                styles.ongoingCourse,
                                {backgroundColor: course.color},
                            ]}>
                            <Text style={styles.ongoingCourseTitle}>
                                {course.title}
                            </Text>
                            <Text style={styles.ongoingCourseTimeSpend}>
                                {course.timeSpend}
                            </Text>
                            <View
                                style={[styles.ongoingCourseProgressContainer]}>
                                <Text
                                    style={
                                        styles.ongoingCourseProgressPercentage
                                    }>
                                    {course.progressPercentage}
                                </Text>
                                <Progress.Bar
                                    progress={course.progress}
                                    color={'#FFF'}
                                    unfilledColor="rgba(255, 255, 255, 0.5)"
                                    borderWidth={0}
                                    height={8}
                                    style={styles.ongoingCourseProgress}
                                />
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.accountOptionsContainer}>
                <Text style={styles.headerTitle}>Account</Text>
                {accountOptions.map(option => (
                    <TouchableOpacity
                        key={option.id}
                        style={styles.accountOption}>
                        <option.icon style={styles.accountOptionIcon} />
                        <Text style={styles.accountOptionTitle}>
                            {option.title}
                        </Text>
                        <View style={styles.arrow} />
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    safeArea: {
        paddingTop: 56,
        backgroundColor: '#F5F7FB',
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 24,
    },
    profilePicture: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 18,
    },
    name: {
        color: '#676767',
        fontFamily: 'DMSans-SemiBold',
        fontSize: 26,
        marginBottom: 8,
    },
    email: {
        fontSize: 14,
        color: '#A6A5A5',
        fontFamily: 'DMSans-Medium',
    },
    headerTitle: {
        fontSize: 18,
        color: '#676767',
        fontFamily: 'DMSans-SemiBold',
        marginBottom: 12,
    },
    ongoingCourse: {
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 12,
        width: 176,
        flex: 1,
        marginRight: 6,
    },
    ongoingCourseTitle: {
        fontSize: 16,
        fontFamily: 'DMSans-SemiBold',
        color: '#FFF',
    },
    ongoingCourseTimeSpend: {
        fontSize: 14,
        marginBottom: 12,
        fontFamily: 'DMSans-Regular',
        color: '#FFF',
    },
    ongoingCourseProgressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        width: '100%',
    },
    ongoingCourseProgressPercentage: {
        color: '#FFF',
        fontFamily: 'DMSans-Regular',
    },
    ongoingCourseProgress: {
        flex: 1,
        marginLeft: 8,
        width: '75%',
    },
    ongoingCourseContainer: {
        marginBottom: 24,
        paddingLeft: 18,
    },
    accountOptionsContainer: {
        paddingHorizontal: 18,
    },
    accountOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        backgroundColor: '#FFF',
        paddingHorizontal: 12,
        paddingVertical: 16,
        borderRadius: 8,
        position: 'relative',
    },
    accountOptionTitle: {
        fontSize: 16,
        fontFamily: 'DMSans-Medium',
        marginLeft: 8,
        color: '#676767',
    },
    arrow: {
        width: 14,
        height: 14,
        transform: [{rotate: '45deg'}],
        borderWidth: 2,
        borderColor: '#676767',
        borderLeftWidth: 0,
        borderBottomWidth: 0,
        position: 'absolute',
        right: 24,
    },
});
