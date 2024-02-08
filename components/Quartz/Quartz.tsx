import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { styles } from './styles/Quartz.styles';

export function Quartz() {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.confidenceText}>CONFIDENCE INDEX</Text>
        <View style={styles.quartzContainer}>
          <Text style={styles.quartzText}>QUARTZ</Text>
        </View>
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Visionary Quartz</Text>
        <Image style={styles.plusIcon} source={require('../../assets/plus-icon.png')} />
      </View>
    </View>
  );
}