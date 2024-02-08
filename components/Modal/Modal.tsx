import { BlurView } from 'expo-blur';
import React, { useEffect, useRef, useState } from 'react';
import {  StyleSheet,  Dimensions,  Animated,  Easing,  SafeAreaView,  ScrollView,  Image,  View } from 'react-native';
import { ActionsLevel } from '../Quests';
import { Quartz } from '../Quartz';
import { Action } from '../Action/Action';
import { QuestsDivider } from '../QuestsDivider/QuestsDivider';
import { CloseButton } from '../CloseButton';
import { styles } from './styles/Modal.styles';

export function Modal({ visible, options, duration, onClose }) {
  const { height } = Dimensions.get('screen');
  const startPointY = options?.from === 'top' ? -height : height;
  const transY = useRef(new Animated.Value(startPointY));
  const [showCLoseButton, setShowCloseButton] = useState<boolean>(false);

  const objetives = [
    {
      stepTitle: 'Invite 3 of your contacts',
      stepsCompleted: 3,
      totalSteps: 3,
      iconSrc: require('../../assets/add-user-icon.png'),
      percent: false,
    },
    {
      stepTitle: 'Complete your profile',
      stepsCompleted: 1,
      totalSteps: 4,
      iconSrc: require('../../assets/pencil-icon.png'),
      percent: true,
    },
    {
      stepTitle: 'Complete your profile',
      stepsCompleted: 0,
      totalSteps: 1,
      iconSrc: require('../../assets/message-icon.png'),
      percent: true,
    },
  ];

  useEffect(() => {
    if (visible) {
      startAnimation(0);
    } else {
      startAnimation(startPointY);
    }
  }, [visible]);

  const startAnimation = (toValue) => {
    Animated.timing(transY.current, {
      toValue,
      duration,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const handleScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const maxOffset = event.nativeEvent.contentSize.height - event.nativeEvent.layoutMeasurement.height + 60;
    const minOffset = event.nativeEvent.contentSize.height - event.nativeEvent.layoutMeasurement.height - 1;

    if (currentOffset >= maxOffset && !showCLoseButton) setShowCloseButton(true);
    if (currentOffset <= minOffset && showCLoseButton) setShowCloseButton(false);
  };

  return (
    <>
      <Animated.View style={[styles.container, { transform: [{ translateY: transY.current }] }]}>
        <BlurView intensity={50} style={styles.outerContainer} tint='light'>
          <SafeAreaView />
          <ScrollView
            style={styles.scrollView}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.logoContainer}>
              <Image source={require('../../assets/hearth-logo.png')} style={styles.logo} />
            </View>
            <Quartz />
            <ActionsLevel actionsCompleted={objetives.filter((o) => o.stepsCompleted === o.totalSteps).length} totalActions={objetives.length} />
            <QuestsDivider />
            <View style={styles.objectivesContainer}>
              {objetives.map((objetive, index) => (
                <Action key={objetive.stepTitle+'-'+index} {...objetive} />
              ))}
            </View>
          </ScrollView>
          <CloseButton visible={showCLoseButton} onClose={() => {
            onClose();
            setShowCloseButton(false);
          }} />
        </BlurView>
      </Animated.View>
    </>
  );
}

