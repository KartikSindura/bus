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
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, set } from "../slices/counterSlice";
import { setTrue, setFalse } from "../slices/toggleSlice";
import ticketController from "../controller/ticket";
import { setFareMultiplier } from "../slices/fareSlice";
import { setColor } from "../slices/colorSlice";

export default function Homescreen({ navigation }) {
  // const [busColor, setBusColor] = useState("#F28627")
  const [DL, setDL] = useState("1PD5327");
  const [route, setRoute] = useState("711");
  const [start, setStart] = useState("C2B Janak Puri");
  const [end, setEnd] = useState("Uttam Nagar Terminal");
  const fare = useSelector((state) => state.fare.value);
  const color = useSelector((state) => state.color.value)
  const count = useSelector((state) => state.counter.value);
  const isModalVisible = useSelector((state) => state.toggle.value);
  const dispatch = useDispatch();

  const onModalClose = () => {
    // setIsModalVisible(false);
    dispatch(setFalse());
    dispatch(set(1));
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
          dispatch(setFalse());
          dispatch(set(1));
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
              <BusButton color="#F28627" fareMultiplier={5} />
              <BusButton color="#219653" fareMultiplier={5} />
              <BusButton color="#D63A3A" fareMultiplier={10} />
              <BusButton color="#2E81EB" fareMultiplier={10} />
              <BusButton color="#1BBABF" fareMultiplier={10} />
            </View>
            <View style={styles.form}>
              <View style={styles.dl}>
                <Text style={styles.text}>DL</Text>
                <TextInput
                  style={styles.textInput}
                  keyboardType="numeric"
                  maxLength={4}
                  placeholder="0000"
                  onChangeText={setDL}
                ></TextInput>
              </View>
              <View style={styles.dl}>
                <Text style={styles.text}>Route</Text>
                <TextInput
                  style={styles.textInput}
                  autoCapitalize={"characters"}
                  placeholder="703A"
                  onChangeText={setRoute}
                ></TextInput>
              </View>
              <View style={styles.dl}>
                <Text style={styles.text}>Start</Text>
                <TextInput
                  style={styles.textInput}
                  defaultValue="C2B Janak Puri"
                  placeholder="Starting stop"
                  onChangeText={setStart}
                ></TextInput>
              </View>
              <View style={styles.dl}>
                <Text style={styles.text}>End</Text>
                <TextInput
                  style={styles.textInput}
                  defaultValue="Uttam Nagar Terminal"
                  placeholder="Ending stop"
                  onChangeText={setEnd}
                ></TextInput>
              </View>
              <View style={styles.dl}>
                <Text style={styles.text}>Tickets</Text>
                <View style={styles.counter}>
                  <Pressable
                    style={{ padding: 10, justifyContent: "center" }}
                    onPress={() => {
                      if (count > 1) {
                        dispatch(decrement());
                      }
                    }}
                  >
                    <FontAwesome5 name="minus" size={15} />
                  </Pressable>
                  <View
                    style={{
                      padding: 10,
                      width: 35,
                      alignItems: "center",
                    }}
                  >
                    <Text>{count}</Text>
                  </View>
                  <Pressable
                    style={{ padding: 10, justifyContent: "center" }}
                    onPress={() => {
                      if (count < 10) {
                        dispatch(increment());
                      }
                    }}
                  >
                    <FontAwesome5 name="plus" size={15} />
                  </Pressable>
                </View>
              </View>
              <View style={styles.dl}>
                <Text style={styles.text}>Fare</Text>
                <Text style={styles.text}>₹{count * fare}</Text>
              </View>
              <View
                style={[styles.dl, { justifyContent: "center", marginTop: 30 }]}
              >
                <Pressable
                  style={styles.submitButton}
                  onPress={() => {
                    dispatch(setFalse());
                    const ticket = ticketController.createTicket(
                      DL,
                      route,
                      start,
                      end,
                      count,
                      fare,
                      color
                    );
                    ticketController.addTicket(ticket);
                    dispatch(setFareMultiplier(5))
                    dispatch(set(1))
                    dispatch(setColor("#F28627"))
                    navigation.navigate("My Tickets");
                  }}
                >
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
          // setIsModalVisible(true);
          dispatch(setTrue());
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
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 2
  },
  modalContent: {
    height: "75%",
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
