import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Button,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ProfileSetup = () => {
  const [currentStage, setCurrentStage] = useState(0); // Tracks the current stage (0, 1, or 2)
  const translateX = useRef(new Animated.Value(0)).current; // For sliding animation

  const stages = ["Stage 1", "Stage 2", "Stage 3"];

  const handleContinue = () => {
    if (currentStage < 2) {
      setCurrentStage((prev) => prev + 1);
      Animated.timing(translateX, {
        toValue: -(currentStage + 1) * 300, // Adjust for screen width
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleBack = () => {
    if (currentStage > 0) {
      setCurrentStage((prev) => prev - 1);
      Animated.timing(translateX, {
        toValue: -(currentStage - 1) * 300, // Adjust for screen width
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      {/* Stage Indicator */}
      <View style={styles.stageIndicator}>
        {stages.map((_, index) => (
          <View
            key={index}
            style={[
              styles.stageLine,
              { backgroundColor: currentStage >= index ? "green" : "gray" },
            ]}
          />
        ))}
      </View>

      {/* Sliding Screens */}
      <Animated.View
        style={[
          styles.slidingContainer,
          { transform: [{ translateX }] },
        ]}
      >
        {stages.map((stage, index) => (
          <View key={index} style={styles.stage}>
            <Text>{stage}</Text>
          </View>
        ))}
      </Animated.View>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        {currentStage > 0 && (
          <TouchableOpacity style={styles.button} onPress={handleBack}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        )}
        {currentStage < 2 && (
          <TouchableOpacity style={styles.button} onPress={handleContinue}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  stageIndicator: {
    flexDirection: "row",
    marginBottom: 20,
  },
  stageLine: {
    flex: 1,
    height: 5,
    marginHorizontal: 5,
  },
  slidingContainer: {
    flexDirection: "row",
    width: 900, // Adjust to the total width of the stages
  },
  stage: {
    width: 300, // Adjust for screen width
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ProfileSetup;
