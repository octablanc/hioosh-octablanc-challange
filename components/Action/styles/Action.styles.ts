import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    touchable: {
      borderRadius: 32,
    },
    container: {
      backgroundColor: '#0000003D',
      borderRadius: 32,
      height: 88,
      padding: 24,
      flexDirection: 'row',
      gap: 16,
      alignItems: 'center',
    },
    iconContainer: {
      padding: 6,
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      justifyContent: 'center',
    },
    icon: {
      width: 32,
      height: 32,
    },
    content: {
      flex: 1,
    },
    title: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: '500',
      marginBottom: 5
    },
    progressContainer: {
      flexDirection: 'row',
      gap: 8,
      alignItems: 'center',
    },
    progressBar: {
      height: 8,
      backgroundColor: '#ffffff36',
      padding: 2,
      borderRadius: 128,
      flex: 1,
    },
    progressFill: {
      height: '100%',
      borderRadius: 100,
    },
    progressText: {
      fontSize: 14,
      color: '#FFFFFF66',
      fontWeight: '700',
    }
  });