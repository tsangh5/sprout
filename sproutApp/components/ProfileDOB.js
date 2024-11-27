import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";
import { useState } from "react";
import {DateTimePickerModal} from "react-native-modal-datetime-picker";

const ProfileDOB = ({ dob, setDob }) => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const handleConfirm = (date) => {
      setDob(date);
      hideDatePicker();
    };
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Enter Your Date of Birth</Text>
        <Text style={styles.selectedDate}>
            Selected Date: {dob ? dob.toDateString() : "None"}
        </Text>
        <Button title="Pick a Date" onPress={() => setDatePickerVisibility(true)} />
        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            display="inline"
            date={dob || new Date()}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
        />
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ProfileDOB;



