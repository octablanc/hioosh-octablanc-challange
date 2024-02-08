import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000AD',
        height: 144,
        borderRadius: 32,
        padding: 24,
        marginBottom: 12,
    },
    infoContainer: {
        backgroundColor: '#FFFFFF3D',
        borderRadius: 12,
        flexDirection: 'row',
        height: 32,
        width: 223,
        alignItems: 'center',
        padding: 8,
        marginBottom: 32,
    },
    confidenceText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '700',
        paddingLeft: 8,
        paddingRight: 8,
    },
    quartzContainer: {
        borderRadius: 8,
        backgroundColor: '#FFFFFF3D',
        paddingLeft: 8,
        paddingRight: 8,
        height: 24,
        width: 73,
    },
    quartzText: {
        fontWeight: '700',
        color: '#FFFFFF',
        fontSize: 14,
        lineHeight: 24,
    },
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    plusIcon: {
        width: 14,
        height: 14,
    },
});