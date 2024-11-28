import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUpVerify = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {/* Greeting */}
      <Text style={styles.subtitle}>Hi [Name],</Text>

      {/* Description */}
      <Text style={styles.description}>
        As an extra security measure, please verify this is the correct email address for your account, which is linked to the email [email].
      </Text>

      {/* Verification Code Input */}
      <TextInput
        style={[styles.input]}
        placeholder="Verification Code"
        placeholderTextColor="#ccc"
        keyboardType="number-pad"
      />

      {/* Continue Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 25,
    marginTop: 100,
    paddingLeft: 43,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'normal',
    marginBottom: 20,
    paddingLeft: 45,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    lineHeight: 20,
    width: 300,
    height: 60,
    alignSelf: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginVertical: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    width: 272,
    height: 40,
    alignSelf: "center",
  },
  button: {
    backgroundColor: '#469C55',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 291,
    height: 52,
    alignSelf: "center",
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default SignUpVerify;