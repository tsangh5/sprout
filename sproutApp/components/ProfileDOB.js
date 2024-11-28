import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import CalendarIcon from "../assets/calendarIcon";

const ProfileDOB = ({ dob, setDob }) => {
    const [selected, setSelected] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Your Date of Birth</Text>
            <Text style={styles.date}>Date</Text>
            <View style={styles.selectedDate}>
                <Text style={styles.dateString}>{dob ? dob.dateString : "Select Date"}</Text>
                <CalendarIcon />
            </View>
            <View>
                <Calendar
                    initialDate="2000-01-01"
                    style={styles.calendar}
                    theme={{
                        calendarBackground: "#D9D9D9",
                        selectedDayBackgroundColor: "#51B664",
                        selectedDayTextColor: "white",
                        todayTextColor: "#51B664",
                        arrowColor: "#51B664",
                    }}
                    onDayPress={(day) => {
                        setDob(day);
                        setSelected(day.dateString); // Update selected date
                    }}
                    markedDates={{
                        [selected]: { selected: true, selectedColor: "#51B664", selectedTextColor: "white" },
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
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    selectedDate: {
        fontSize: 12,
        color: "#51B664",
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
        color: "#51B664",
        marginLeft: 20,
        flex: 0.95,
    },
    date: {
        marginTop: 10,
        color: "#51B664",
    },
    calendarIcon: {
        width: 24,
        height: 24,
    },
    calendar: {
        padding: 20,
        marginTop: 20,
        borderRadius: 16,
        backgroundColor: "#D9D9D9",
        width: 312,
        height: 400,
    },
});

export default ProfileDOB;
