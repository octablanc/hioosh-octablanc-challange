import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from './styles/Action.styles';

export function Action({ stepTitle, stepsCompleted, totalSteps, iconSrc, percent, }) {
    const [pressed, setPressed] = useState(false);

    const steps: JSX.Element[] = [];

    for (let i = 1; i <= totalSteps; i++) {
        steps.push(
            <View style={styles.progressBar}>
                <View style={{ ...styles.progressFill, backgroundColor: i <= stepsCompleted ? '#FFFFFF' : '#ffffff36' }} />
            </View>
        );
    }

    const onPress = () => {
        // logic when press
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            activeOpacity={1}
            style={[
                styles.touchable,
                { backgroundColor: pressed ? '#000000AD' : '#0000003D' }
            ]}
        >
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Image source={iconSrc} style={styles.icon} />
                </View>
                <View style={styles.content}>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{stepTitle}</Text>
                    <View style={styles.progressContainer}>
                        {
                            percent ?
                                <View style={styles.progressBar}>
                                    <View style={{ ...styles.progressFill, width: `${Math.round((stepsCompleted/totalSteps)*100)}%`, backgroundColor: '#FFFFFF' }} />
                                </View> :
                                <>
                                    {steps}
                                </>
                        }
                        <Text style={styles.progressText}>{percent? `${Math.round((stepsCompleted/totalSteps)*100)}%` : `${stepsCompleted} /${totalSteps}`}</Text>
                    </View>
                </View>
                <Image source={require('../../assets/right-arrow-icon.png')} />
            </View>
        </TouchableOpacity>
    );
}

