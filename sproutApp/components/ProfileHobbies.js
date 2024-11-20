import React from "react";
import { View, Text, TextInput } from "react-native";
import { StyleSheet } from "react-native";

const ProfileHobbies = ({ hobbies, setHobbies, clubs, setClubs }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hobbies and Interests</Text>
      <Text style={styles.label}>Hobbies/Interests</Text>
      <TextInput
        placeholder="Enter your hobbies"
        value={hobbies}
        onChangeText={setHobbies}
        style={styles.textInput}
      />

      <Text style={styles.label}>Clubs Involved</Text>
      <TextInput
        placeholder="Enter your clubs"
        value={clubs}
        onChangeText={setClubs}
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

export default ProfileHobbies;
