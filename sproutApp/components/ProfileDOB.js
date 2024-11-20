import React from "react";
import { View, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { StyleSheet } from "react-native";

const ProfileDOB = ({ dob, setDob }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Date of Birth</Text>
      <DateTimePicker
        value={dob}
        mode="date"
        display="default"
        onChange={(event, selectedDate) => {
          const currentDate = selectedDate || dob;
          setDob(currentDate);
        }}
      />
      <Text style={styles.inputPreview}>Selected Date: {dob.toDateString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputPreview: {
    marginTop: 10,
    fontStyle: "italic",
  },
});

export default ProfileDOB;