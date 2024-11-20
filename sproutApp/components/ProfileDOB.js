import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ProfileDOB = ({ dob, setDob }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(true);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date) => {
    setDob(date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Date of Birth</Text>
      <Text style={styles.selectedDate}>
        Selected Date: {dob ? dob.toDateString() : "None"}
      </Text>
      <Button title="Pick a Date" onPress={showDatePicker} />
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  selectedDate: {
    marginVertical: 20,
    fontSize: 16,
    fontStyle: "italic",
  },
});

export default ProfileDOB;
