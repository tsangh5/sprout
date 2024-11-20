import React from "react";
import { View, Text, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";

const ProfileEdu = ({ educationLevel, setEducationLevel, major, setMajor }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Education Information</Text>
      <Text style={styles.label}>Education Level</Text>
      <Picker
        selectedValue={educationLevel}
        onValueChange={(itemValue) => setEducationLevel(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select an option" value="" />
        <Picker.Item label="High School" value="highschool" />
        <Picker.Item label="Undergraduate" value="undergraduate" />
        <Picker.Item label="Postgraduate" value="postgraduate" />
      </Picker>

      <Text style={styles.label}>Major</Text>
      <TextInput
        placeholder="Enter your major"
        value={major}
        onChangeText={setMajor}
        style={styles.textInput}
      />
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
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  picker: {
    height: 50,
    width: 250,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    width: 250,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default ProfileEdu;
