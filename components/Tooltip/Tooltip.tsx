import { View, Text, Platform } from "react-native";

export function Tooltip() {
    return (
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#ffffffdc',
          width: '80%',
          height: 60,
          borderRadius: 30,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          right: '10%',
          ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
            },
            android: {
              elevation: 5,
            },
          }),
        }}
      >
        <Text style={{ color: '#181818' }}>
          Finish quests to level up your profile and get bonuses!
        </Text>
      </View>
    );
  };