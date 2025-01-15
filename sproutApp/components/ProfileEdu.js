import React from "react";
import { View, Text, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";

const ProfileEdu = ({ educationLevel, setEducationLevel, major, setMajor }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Your Education Information</Text>
        <Text style={styles.label}>Education Level</Text>
        <View style={styles.picker}>
          <Picker
              style={styles.pickerStyle}
              selectedValue={educationLevel}
              onValueChange={(itemValue) => setEducationLevel(itemValue)}
          >
            <Picker.Item style={[styles.pickerItem, { fontSize: 15 }]} label="Select an option" value="" />
            <Picker.Item style={[styles.pickerItem, { fontSize: 15 }]} label="High School" value="highschool" />
            <Picker.Item style={[styles.pickerItem, { fontSize: 15 }]} label="Undergraduate" value="undergraduate" />
            <Picker.Item style={[styles.pickerItem, { fontSize: 15 }]} label="Postgraduate" value="postgraduate" />
          </Picker>
        </View>

        <Text style={styles.label}>Major</Text>
        <TextInput
            placeholder="Enter your major"
            value={major}
            onChangeText={setMajor}
            style={styles.textInput}
            placeHolderTextColor="black"
        />
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
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  picker: {
    width: 250,
    marginBottom: 10,
    borderColor: "#14AE5C",
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
  },
  pickerItem: {
    borderColor: "#14AE5C",
    borderWidth: 2,
  },
  textInput: {
    height: 40,
    borderColor: "#14AE5C",
    borderWidth: 2,
    borderRadius: 5,
    width: 250,
    paddingHorizontal: 18,
    paddingVertical: 8,
    justifyContent: "center",
    color: "black",
    fontSize: 15, // Ensure this is the same as Picker.Item font size
  },
});

export default ProfileEdu;
