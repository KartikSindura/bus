import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";

export default function BusCreator({ isVisible, children, onClose }) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible} >
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Fill details</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color={"#fff"} size={25}/>
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
    modalContent: {
        height: '92.75%',
        width: '100%',
        backgroundColor: '#25292e',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        position: 'absolute',
        bottom: 0,
    },
    titleContainer: {
        height: '6%',
        backgroundColor: '#464C55',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      title: {
        color: '#fff',
        fontSize: 16,
      },
})
