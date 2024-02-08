import React, { useEffect, useRef } from 'react';
import { Text, TouchableHighlight, Animated, StyleSheet } from 'react-native';
import { styles } from './styles/ClouseButton.styles';

export function CloseButton({ visible, onClose }){
  const translateY = useRef(new Animated.Value(visible ? 0 : 100)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: visible ? 0 : 100,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [visible]);

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          onClose();
        }}
      >
        <Text style={styles.buttonText}>Close</Text>
      </TouchableHighlight>
    </Animated.View>
  );
};