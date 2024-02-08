import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles/ActionLevel.styles';

export function ActionsLevel({ actionsCompleted, totalActions }) {

  const progress:JSX.Element[] = [];

  for(let i=1; i<=totalActions; i++){
    progress.push(
      i<=actionsCompleted? 
      <View style={{...styles.progressBar, backgroundColor: '#FF9B7F', borderColor: '#FFE7DE'}}/>:
      <View style={{...styles.progressBar, backgroundColor: '#e6e5e3', borderColor: '#f1f1ee'}}/>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.milestoneContainer}>
        <Text style={styles.milestoneText}>Next milestone</Text>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>{totalActions - actionsCompleted}</Text>
        </View>
        <Text style={styles.actionsAwayText}>actions away</Text>
      </View>

      <View style={styles.progressBarContainer}>
        {
          progress
        }
      </View>
    </View>
  );
}