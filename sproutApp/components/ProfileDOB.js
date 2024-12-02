import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DatePicker from 'react-native-modern-datepicker';

const ProfileDOB = ({ dob, setDob }) => {
    const [selectedDate, setSelectedDate] = useState(dob ? dob.toISOString().split('T')[0] : '2020-02-01');

    const handleChange = (propDate) => {
        setSelectedDate(propDate);
    };
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Your Date of Birth</Text>
            <Text style={styles.date}>Date</Text>
            <View style={styles.selectedDate}>
                <Text style={styles.dateString}>{selectedDate || "Select Date"}</Text>
            </View>
            <View style={styles.calendar}>
                <DatePicker
                    mode="calendar"
                    selected={selectedDate}
                    onDateChange={handleChange}
                    style={styles.datePicker}
                    current = {todayString}
                    options={{
                        backgroundColor: "#D9D9D9",
                        selectedColor: "#51B664",
                        selectedTextColor: "white",
                        textHeaderColor: "black",
                        textMonthFontWeight: "bold",
                        textDayFontSize: 16,
                        textDayFontWeight: "bold",
                        arrowColor: "#51B664",
                        mainColor: "#51B664",
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: "100%",
        padding: 20,
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    selectedDate: {
        fontSize: 12,
        color: "black",
        borderColor: "#51B664",
        borderWidth: 3,
        flexDirection: "row",
        borderRadius: 5,
        width: 312,
        height: 56,
        alignItems: "center",
    },
    dateString: {
        fontSize: 15,
        color: "black",
        marginLeft: 20,
        flex: 0.95,
    },
    date: {
        marginTop: 10,
        color: "#51B664",
    },
    calendar: {
        marginTop: 20,
        borderRadius: 16,
        fontSize: 20,
        justifyContent: 'center',
    },
    datePicker: {
        backgroundColor: "#D9D9D9",
        borderRadius: 16,
        width: 320,
        fontSize: 20,
        height: 355,
    },
});

export default ProfileDOB;
