import React, { useRef } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const ComponentA = ({ onScroll }) => {
  return (
    <ScrollView onScroll={onScroll}>
      <View style={styles.container}>
        <Text style={styles.title}>Component A</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Scroll to Component B</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const ComponentB = () => {
  return (
    <View style={[styles.container, styles.containerB]}>
      <Text style={styles.title}>Component B</Text>
      <Text style={styles.text}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </Text>
    </View>
  );
};

const ScrollAnimation = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
    useNativeDriver: true,
  });

  const handlePress = () => {
    Animated.timing(scrollY, {
      toValue: 200,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <ComponentA onScroll={handleScroll} />
      <Animated.View
        style={[
          styles.containerB,
          {
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 200],
                  outputRange: [-200, 0],
                  extrapolateRight: 'clamp',
                }),
              },
            ],
          },
        ]}
      >
        <ComponentB />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  containerB: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ScrollAnimation;