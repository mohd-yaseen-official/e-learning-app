import React from 'react';
import {StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import SliderCard from './SliderCard';

const CourseSlider = ({courses}) => {
    const renderSliderCards = () =>
        courses.map(course => <SliderCard course={course} key={course.id} />);

    return (
        <Swiper
            style={styles.wrapper}
            showsPagination={true}
            paginationStyle={styles.paginationStyle}
            activeDotStyle={styles.activeDot}
            dotStyle={styles.dot}
            loop={true}
            horizontal={true}>
            {renderSliderCards()}
        </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: 180,
    },
    paginationStyle: {
        bottom: 0,
    },
    activeDot: {
        backgroundColor: '#726AEC',
        width: 18,
        height: 10,
        borderRadius: 5,
    },
    dot: {
        backgroundColor: 'rgba(114, 106, 236, 0.5)',
        width: 8,
        height: 8,
        borderRadius: 4,
    },
});

export default CourseSlider;
