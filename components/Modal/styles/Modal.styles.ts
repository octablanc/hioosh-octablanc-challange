import { StyleSheet } from "react-native"; 

export const styles = StyleSheet.create({
    outerContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#80808066',
        alignItems: 'center',
    },
    container: {
        backgroundColor: '#80808066',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        width: '100%',
        height: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 32,
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 24,
    },
    logo: {
        width: 200,
        height: 150,
    },
    objectivesContainer: {
        gap: 8,
        paddingBottom: 16,
    },
});