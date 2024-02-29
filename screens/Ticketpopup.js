import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import QRCode from "react-native-qrcode-svg";

export default function Ticketpopup({ route, navigation }) {
  const { dl, busRoute, start, end, count, fare, color, cost, time } =
    route.params;
  const [show, setShow] = useState(false);
  let base64Logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..";
  return (
    <Pressable
      style={[styles.main, { backgroundColor: color }]}
      onPress={() => {
        navigation.navigate("My Tickets");
      }}
    >
      <Pressable style={styles.ticket}>
        {show ? (
          <Pressable
          style={{justifyContent: 'center', alignItems: 'center', padding: 25}}
            onPress={() => {
              setShow(false);
            }}
          >
            <QRCode
              value="String Value of the QR code. Can also accept an array of segments as defined in Manual mode. Ex. [{ data: 'ABCDEFG', mode: 'alphanumeric' }, { data: '0123456', mode: 'numeric' }, { data: [253,254,255], mode: 'byte' }]"
              logo={{ uri: base64Logo }}
              size={350}
              logoBackgroundColor="transparent"
            ></QRCode>
            {/* <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', height: '100%', }}>

            </View> */}
          </Pressable>
        ) : (
          <>
            <View style={styles.top}>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{ fontWeight: "700", fontSize: 18, marginTop: 10 }}
                >
                  Transport Dept. of Delhi
                </Text>
              </View>
              <View style={styles.top2}>
                <Text style={{ fontSize: 18 }}>DL{dl}</Text>
                <Text style={{ fontSize: 18 }}>₹{cost}</Text>
              </View>
              <View style={styles.border}></View>
            </View>
            <View style={styles.middle}>
              <View style={styles.space}>
                <Text>Bus Route</Text>
                <Text>Fare</Text>
              </View>
              <View style={styles.space2}>
                <Text style={{ fontSize: 18 }}>{busRoute}</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold'}}>₹{fare.toFixed(1)}</Text>
              </View>
              <View style={styles.space}>
                <Text>Booking Time</Text>
                <Text>Tickets</Text>
              </View>
              <View style={styles.space2}>
                <Text style={{ fontSize: 18 }}>{time}</Text>
                <Text style={{ fontSize: 18 }}>{count}</Text>
              </View>
              <View style={styles.space}>
                <Text>Starting Stop</Text>
              </View>
              <View style={styles.space2}>
                <Text style={{ fontSize: 18 }}>{start}</Text>
              </View>
              <View style={styles.space}>
                <Text>Ending Stop</Text>
              </View>
              <View style={styles.space2}>
                <Text style={{ fontSize: 18 }}>{end}</Text>
              </View>
            </View>
            <View style={styles.bottom}>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <Text>T2702202488f67940cf</Text>
              </View>
              <View>
                <Pressable
                  style={styles.button}
                  onPress={() => {
                    setShow(true);
                  }}
                >
                  <MaterialIcons name="qr-code-2" size={30} color="#C0D7C6" />
                  <View style={{ justifyContent: "center", marginLeft: 8 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#C0D7C6",
                      }}
                    >
                      Show QR Code
                    </Text>
                  </View>
                </Pressable>
              </View>
              <Text style={{ margin: 14, fontSize: 16 }}>Arrival: </Text>
            </View>
          </>
        )}
      </Pressable>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    marginLeft: 14,
    marginRight: 14,
    flexDirection: "row",
    backgroundColor: "#cefad0",
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
  },
  space2: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 14,
    marginRight: 14,
  },
  space: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 14,
    marginRight: 14,
    marginTop: 8,
  },
  border: {
    borderBottomWidth: 0.9,
    marginTop: 10,
    marginLeft: 14,
    marginRight: 14,
  },
  top2: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 14,
    marginRight: 14,
    marginTop: 10,
  },
  main: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  ticket: {
    backgroundColor: "white",
    // height: 435,
    width: 400,
    borderRadius: 6,
    elevation: 5,
    // padding: 10,
  },
});
