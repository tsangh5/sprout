import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const SignUpReg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {/* Name Input */}
      <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#aaa" />

      {/* Email Input */}
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" />

      {/* Mobile Number Input */}
      <TextInput style={styles.input} placeholder="Mobile Number" placeholderTextColor="#aaa" />

      {/* Password Input */}
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaa" secureTextEntry/>

      {/* Confirm Password Input */}
      <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#aaa" secureTextEntry/>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Separator */}
      <View style={styles.separatorContainer}>
        <View style={styles.line} />
        <Text style={styles.separatorText}>or</Text>
        <View style={styles.line} />
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

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
    marginBottom: 20,
    marginTop: 100,
    marginBottom: 25,
    paddingLeft: 43,
  },
  input: {
    width: 272,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginLeft: 40,
    marginBottom: 20,
    fontSize: 16,
  },    
  signUpButton: {
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
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  signUpButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  separatorText: {
    marginHorizontal: 10,
    color: "#aaa",
    fontSize: 14,
  },
  signInButton: {
    width: 291,
    height: 52,
    borderWidth: 1,
    borderColor: "#36b37e",
    paddingVertical: 15,
    borderRadius: 25,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  signInButtonText: {
    color: "#36b37e",
    fontSize: 14,
  },
});

export default SignUpReg;