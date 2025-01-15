import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
  const navigation = useNavigation(); // Get navigation instance
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  const slides = [
    {
      title: 'Explore Clubs and Groups',
      description: 'Swipe to discover new clubs, groups and societies',
      icon: require('../assets/image.png'),
    },
    {
      title: 'Gain Valuable Experience',
      description: 'Match-make with clubs to find your position',
      icon: require('../assets/tick.png'),
    },
    {
      title: 'Meet New People',
      description: 'Expand your network with like minded people',
      icon: require('../assets/people.png'),
    },
  ];

  const onScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
    setActiveIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <View style={styles.iconContainer}>
            {typeof slide.icon === 'number' ? (
                <Image source={slide.icon} style={styles.icon} />
            ) : (
                <Text style={styles.icon}>{slide.icon}</Text>
            )}
            </View> 
            <Text style={styles.title}>{slide.title}</Text>
            <Text style={styles.description}>{slide.description}</Text>
          </View>
        ))}
      </ScrollView>
      
      {/* Dots for Navigation */}
      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfileSetup')}>
          <Text style={styles.buttonText}>Continue with email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.outlineButton]} onPress={() => navigation.navigate('ProfileSetup')}>
          <Text style={styles.outlineButtonText}>Continue with mobile</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>
          By signing in you are agreeing to our{' '}
          <Text style={styles.linkText}>Terms & conditions</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  slide: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  iconContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#EAF8E6',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 190,
    height: 190,
    resizeMode: 'contain', // sup ben
    textAlign: 'center',  // 
    fontSize: 40,         // 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 50,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6c6c6c',
    marginBottom: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 350, // Raise dots
    width: '100%',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#469C55',
  },
  inactiveDot: {
    backgroundColor: '#EAEAEA',
  },
  buttonsContainer: {
    alignItems: 'center',
    padding: 20,
    bottom: 70,
  },
  button: {
    backgroundColor: '#469C55',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 10,
  },
  outlineButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#51B664',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  outlineButtonText: {
    color: '#469C55',
    fontSize: 16,
    fontWeight: 'bold',
  },
  termsText: {
    fontSize: 12,
    color: '#6c6c6c',
    textAlign: 'center',
    marginTop: 10,
  },
  linkText: {
    color: '#51B664',
    fontWeight: 'bold',
  },
});

export default LandingScreen;
