import React, { useState } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { Tooltip } from '../Tooltip';
import { styles } from './styles/QuestsDivider.styles';

export function QuestsDivider() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handlePressIn = () => {
    setIsTooltipVisible(true);
  };

  const handlePressOut = () => {
    setIsTooltipVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questText}>Quests</Text>
      <TouchableHighlight
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        underlayColor="transparent"
      >
        <Image source={require('../../assets/tooltip-icon.png')} style={styles.tooltipIcon} />
      </TouchableHighlight>
      {isTooltipVisible && <Tooltip />}
    </View>
  );
}