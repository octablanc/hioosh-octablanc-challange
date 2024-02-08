import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      paddingLeft: 24,
      paddingRight: 24,
      paddingBottom: 16,
      paddingTop: 16,
      borderRadius: 24,
      height: 88,
    },
    milestoneContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
    },
    milestoneText: {
      fontWeight: '500',
      fontSize: 20,
      color: '#181818',
    },
    countContainer: {
      width: 32,
      height: 32,
      backgroundColor: '#FFE7DE',
      justifyContent: 'space-between',
      borderRadius: 8,
      marginLeft: 8,
      marginRight: 8,
    },
    countText: {
      fontSize: 20,
      fontWeight: '500',
      color: '#181818',
      textAlign: 'center',
      lineHeight: 31,
    },
    actionsAwayText: {
      fontWeight: '500',
      fontSize: 20,
      color: '#181818',
    },
    progressBarContainer: {
      height: 24,
      flexDirection: 'row',
      width: '100%',
      gap: 4,
      marginTop: 8,
      marginBottom: 8,
    },
    progressBar: {
      height: 8,
      borderWidth: 2,
      borderRadius: 4,
      flex: 1,
    },
  });