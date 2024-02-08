import React, { useState } from "react";
import { SafeAreaView, Text, TouchableHighlight, View, Image } from "react-native";
import styles from "./styles";
import { Modal } from "../Modal";

export const Home = () => {
    const [ modalVisible, setModalVisible ] = useState<boolean>(false);

    const onPressOpenMileston = ()=> {
        setModalVisible(true);
    }

    const closeModal = ()=> {
        setModalVisible(false);
    }

    return (
        <>
            <SafeAreaView style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>
                    <Image style={styles.hiooshLogo} source={require('../../assets/hioosh-logo.png')}/>
                    <TouchableHighlight
                        underlayColor='#ff8260'
                        style={styles.milestonesButton}
                        onPress={onPressOpenMileston}
                    >
                        <Text style={styles.milestonesButtonText}>milestones</Text>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
            <Modal visible={modalVisible} options={{ from: 'bottom' }} onClose={closeModal} duration={400}/>
        </>
    );
}
