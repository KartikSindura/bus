import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Modal,
  ScrollView,
  TextInput,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import BusCreator from "../components/BusCreator";
import BusButton from "../components/BusButton";
import { FontAwesome } from "@expo/vector-icons";

export default function Homescreen({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pin, setPin] = useState("0000");
  const [fare, setFare] = useState("5");
  const [DL, setDL] = useState(null);
  const [counter, setCounter] = useState(1);
  const onModalClose = () => {
    setIsModalVisible(false);
    setCounter(1);
  };
  const onCreate = () => {
    setIsModalVisible();
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false);
          setCounter(1);
        }}
      >
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Fill details</Text>
            <Pressable onPress={onModalClose}>
              <MaterialIcons name="close" color={"#fff"} size={25} />
            </Pressable>
          </View>
          <ScrollView>
            <View style={styles.buttonContainer}>
              <BusButton color="#F28627" />
              <BusButton color="#219653" />
              <BusButton color="#D63A3A" />
              <BusButton color="#2E81EB" />
              <BusButton color="#1BBABF" />
            </View>
            <View style={styles.form}>
              <View style={styles.dl}>
                <Text style={styles.text}>DL{DL}</Text>
                <TextInput
                  style={styles.textInput}
                  keyboardType="numeric"
                  maxLength={4}
                  placeholder="0000"
                ></TextInput>
              </View>
              <View style={styles.dl}>
                <Text style={styles.text}>Route</Text>
                <TextInput
                  style={styles.textInput}
                  autoCapitalize={"characters"}
                  placeholder="703A"
                ></TextInput>
              </View>
              <View style={styles.dl}>
                <Text style={styles.text}>Start</Text>
                <TextInput
                  style={styles.textInput}
                  defaultValue="C2B Janak Puri"
                  placeholder="Starting stop"
                ></TextInput>
              </View>
              <View style={styles.dl}>
                <Text style={styles.text}>End</Text>
                <TextInput
                  style={styles.textInput}
                  defaultValue="Uttam Nagar Terminal"
                  placeholder="Ending stop"
                ></TextInput>
              </View>
              <View style={styles.dl}>
                <Text style={styles.text}>Tickets</Text>
                <View style={styles.counter}>
                  <Pressable
                    style={{ padding: 10, justifyContent: "center" }}
                    onPress={() => {
                      if (counter > 1) {
                        setCounter(counter - 1);
                      }
                    }}
                  >
                    <FontAwesome name="minus" size={15} />
                  </Pressable>
                  <View
                    style={{
                      padding: 10,
                      width: 35,
                      alignItems: "center",
                    }}
                  >
                    <Text>{counter}</Text>
                  </View>
                  <Pressable
                    style={{ padding: 10, justifyContent: "center" }}
                    onPress={() => {
                      if (counter < 10) setCounter(counter + 1);
                    }}
                  >
                    <FontAwesome name="plus" size={15} />
                  </Pressable>
                </View>
              </View>
              <View
                style={[styles.dl, { justifyContent: "center", marginTop: 30 }]}
              >
                <Pressable style={styles.submitButton}>
                  <Text style={{ textAlign: "center" }}>Submit</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <Pressable
        style={styles.button}
        onPress={() => {
          setIsModalVisible(true);
        }}
      >
        <Text>Create Bus</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("My Tickets");
        }}
      >
        <Text>My Tickets</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    padding: 20,
    margin: 20,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 10,
  },
  modalContent: {
    height: "70%",
    width: "100%",
    backgroundColor: "#fff",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "10%",
    backgroundColor: "#464C55",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  buttonContainer: {
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row",
  },
  textInput: {
    borderColor: "#464C55",
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    width: "80%",
    paddingLeft: 15,
  },
  dl: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  form: {
    padding: 10,
  },
  text: {
    fontSize: 20,
    top: 10,
  },
  counter: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
  },
  submitButton: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    width: 150,
  },
});
