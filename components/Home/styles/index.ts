import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    hiooshLogo: {
      width: 150,
      height: 29,
      resizeMode: 'cover',
      position: 'absolute',
      top: 50
    },
    milestonesButton: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 150,
      height: 150,
      backgroundColor: '#ff9b7f',
      borderRadius: 100
    },
    milestonesButtonText: {
      color: '#ffffff',
      textTransform: 'uppercase',
      fontSize: 20
    }
  });

  
  