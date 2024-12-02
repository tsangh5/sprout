import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import ProfileDOB from "../components/ProfileDOB";
import ProfileEdu from "../components/ProfileEdu";
import ProfileHobbies from "../components/ProfileHobbies";

const ProfileSetup = () => {
  const [currentStage, setCurrentStage] = useState(0); // Track current stage
  const translateX = useRef(new Animated.Value(0)).current; // Animation value

  // State for each stage's data
  const [dob, setDob] = useState(new Date());
  const [educationLevel, setEducationLevel] = useState("");
  const [major, setMajor] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [clubs, setClubs] = useState("");

  const stages = [ProfileDOB, ProfileEdu, ProfileHobbies];

  // Handle navigation to the next stage
  const handleContinue = () => {
    if (currentStage < stages.length - 1) {
      Animated.timing(translateX, {
        toValue: -300, // Adjust based on screen width
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        setCurrentStage((prev) => prev + 1);
        translateX.setValue(0); // Reset animation position
      });
    }
  };

  // Handle navigation to the previous stage
  const handleBack = () => {
    if (currentStage > 0) {
      Animated.timing(translateX, {
        toValue: 300, // Adjust based on screen width
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setCurrentStage((prev) => prev - 1);
        translateX.setValue(0); // Reset animation position
      });
    }
  };

  const CurrentStageComponent = stages[currentStage];

  return (
    <>
    <Text style={styles.title}> Profile </Text>
    <View style={styles.container}>
      {/* Stage Indicator */}
      <View style={styles.stageIndicator}>
        {stages.map((_, index) => (
          <View
            key={index}
            style={[
              styles.stageLine,
              { backgroundColor: currentStage >= index ?  "#51B664" : "#8D8787" },
            ]}
          />
        ))}
      </View>

      {/* Animated Stage */}
      <Animated.View
        style={[
          styles.stageContainer,
          { transform: [{ translateX }] },
        ]}
      >
        <CurrentStageComponent
          dob={dob}
          setDob={setDob}
          educationLevel={educationLevel}
          setEducationLevel={setEducationLevel}
          major={major}
          setMajor={setMajor}
          hobbies={hobbies}
          setHobbies={setHobbies}
          clubs={clubs}
          setClubs={setClubs}
        />
      </Animated.View>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        {currentStage > 0 && (
          <TouchableOpacity style={styles.button} onPress={handleBack}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        )}
        {currentStage < stages.length - 1 && (
          <TouchableOpacity style={styles.button} onPress={handleContinue}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        )}
        {currentStage === stages.length - 1 && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert("Profile Complete!")}
          >
            <Text style={styles.buttonText}>Finish</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    marginHorizontal: 20,
    position: "flex-start",
    alignContent:"flex-start",
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  stageIndicator: {
    flexDirection: "row",
    marginBottom: 20,
  },
  stageLine: {
    flex: 1,
    height: 3,
    marginHorizontal: 12,
  },
  stageContainer: {
    flex: 1, // Takes available space above buttons
    width: "100%",
    alignItems: "flex-start",
  },
  buttonContainer: {
    flexDirection: "column",
    marginTop: 10,
    justifyContent: "center", // Centers the buttons horizontally
    alignItems: "center",
  },
  button: {
    width: 290,
    height: 52,
    backgroundColor: "#51B664",
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 10,
    justifyContent: "center", // Center text vertically
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center"
  },
  
});

export default ProfileSetup;
