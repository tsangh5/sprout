import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const SignInEmail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      {/* Email Input */}
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" />

      {/* Password Input */}
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaa" secureTextEntry />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot My Password</Text>
      </TouchableOpacity>

      {/* Log In Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      {/* Continue with Mobile */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue with mobile</Text>
      </TouchableOpacity>

      {/* Separator */}
      <View style={styles.separatorContainer}>
        <View style={styles.line} />
        <Text style={styles.separatorText}>or</Text>
        <View style={styles.line} />
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Sign up</Text>
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
    marginBottom: 25,
    marginTop: 100,
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
    marginBottom: 23,
    fontSize: 16,
  },
  forgotPassword: {
    color: "#469C55",
    fontSize: 14,
    textAlign: "right",
    marginTop: -10,
    marginBottom: 20,
    marginLeft: 50,
  },
  loginButton: {
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
  loginButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  continueButton: {
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
  continueButtonText: {
    color: "#36b37e",
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
  signupButton: {
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
  signupButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default SignInEmail;