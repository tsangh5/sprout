import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Modal,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import moment from 'moment';

const { width } = Dimensions.get('window');

const CustomCalendar = () => {
    const [currentDate, setCurrentDate] = useState(moment()); // Current displayed month/year
    const [selectedDate, setSelectedDate] = useState(null); // Selected date
    const [isYearModalVisible, setYearModalVisible] = useState(false); // Year selection modal

    // Generate days for the current month
    const generateCalendarDays = () => {
        const startOfMonth = currentDate.clone().startOf('month');
        const endOfMonth = currentDate.clone().endOf('month');
        const startOfWeek = startOfMonth.clone().startOf('week');
        const endOfWeek = endOfMonth.clone().endOf('week');

        const days = [];
        let day = startOfWeek;

        while (day.isBefore(endOfWeek, 'day')) {
            days.push(day.clone());
            day.add(1, 'day');
        }

        return days;
    };

    const changeMonth = (direction) => {
        setCurrentDate(currentDate.clone().add(direction, 'month'));
    };

    const handleSwipe = ({ nativeEvent }) => {
        if (nativeEvent.translationX > 50) {
            changeMonth(-1); // Swipe right to go to the previous month
        } else if (nativeEvent.translationX < -50) {
            changeMonth(1); // Swipe left to go to the next month
        }
    };

    const openYearModal = () => {
        setYearModalVisible(true);
    };

    const selectYear = (year) => {
        setCurrentDate(currentDate.clone().year(year));
        setYearModalVisible(false);
    };

    const renderYearModal = () => {
        const years = Array.from({ length: 200 }, (_, i) => moment().year() - 100 + i); // Past 100 to future 100 years

        return (
            <Modal visible={isYearModalVisible} transparent>
                <View style={styles.modalContainer}>
                    <FlatList
                        data={years}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => selectYear(item)}>
                                <Text style={styles.yearText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </Modal>
        );
    };

    const days = generateCalendarDays();
    const weekdays = moment.weekdaysShort();

    return (
        <View style={styles.container}>
            {/* Year and Month Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={openYearModal}>
                    <Text style={styles.headerText}>{currentDate.format('YYYY')}</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>{currentDate.format('MMMM')}</Text>
            </View>

            {/* Weekdays */}
            <View style={styles.weekdays}>
                {weekdays.map((day, index) => (
                    <Text key={index} style={styles.weekdayText}>
                        {day}
                    </Text>
                ))}
            </View>

            {/* Swipeable Calendar Days */}
            <PanGestureHandler onGestureEvent={handleSwipe}>
                <View style={styles.days}>
                    {days.map((day, index) => {
                        const isCurrentMonth = day.isSame(currentDate, 'month');
                        const isToday = day.isSame(moment(), 'day');
                        const isSelected = selectedDate && day.isSame(selectedDate, 'day');

                        return (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.day,
                                    isCurrentMonth ? styles.currentMonth : styles.otherMonth,
                                    isToday && styles.today,
                                    isSelected && styles.selectedDay,
                                ]}
                                onPress={() => setSelectedDate(day)}
                            >
                                <Text
                                    style={[
                                        styles.dayText,
                                        isCurrentMonth ? styles.currentMonthText : styles.otherMonthText,
                                        isToday && styles.todayText,
                                        isSelected && styles.selectedDayText,
                                    ]}
                                >
                                    {day.date()}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </PanGestureHandler>

            {/* Year Selection Modal */}
            {renderYearModal()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
        height: 350,
        width: 280,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    weekdays: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    weekdayText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold',
        color: '#666',
    },
    days: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    day: {
        width: width / 7 - 10,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
    },
    dayText: {
        fontSize: 16,
    },
    currentMonth: {
        backgroundColor: '#E0F7FA',
        borderRadius: 20,
    },
    otherMonth: {
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
    },
    today: {
        borderWidth: 2,
        borderColor: '#FF5722',
        borderRadius: 20,
    },
    selectedDay: {
        backgroundColor: '#00796B',
        borderRadius: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    yearText: {
        fontSize: 18,
        padding: 10,
        color: '#fff',
    },
});

export default CustomCalendar;
