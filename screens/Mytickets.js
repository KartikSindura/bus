import { View, FlatList, StyleSheet, Text } from "react-native";
import MyText from "../components/MyText";
import React, { useEffect, useState } from "react";
import ticketController from "../controller/ticket";
import { FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Octicons } from "@expo/vector-icons";

export default function Mytickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const getT = async () => {
      const tickets = await ticketController.getTickets();
      setTickets(tickets);
    };
    getT();
  }, [tickets]);

  const Item = ({ dl, route, start, end, count, fare, color, cost, time }) => (
    <View style={styles.item}>
      <View style={styles.top}>
        <View style={[styles.icon, { backgroundColor: color }]}>
          <FontAwesome5 name="bus" size={19} color="white" />
        </View>
        <View style={styles.left}>
          <Text style={{ fontWeight: "bold", position: "relative" }}>
            {route}
          </Text>
          <Text
            style={{
              position: "absolute",
              marginTop: 20,
              fontWeight: 100,
              fontSize: 13,
              color: "#999DA0",
            }}
          >
            DL{dl}
          </Text>
        </View>
        <View style={styles.pill}></View>
      </View>
      <View style={styles.middle}>
        <View style={{ flexDirection: "row" }}>
          <Text>{start} </Text>
          <View style={{ justifyContent: "center" }}>
            <Octicons name="arrow-both" size={20} color="#c3c3c3" />
          </View>
          <Text> {end}</Text>
        </View>
        <View style={styles.border}></View>
      </View>
      <View style={styles.bottom}>
        <View>
          <Text style={{ color: "#999DA0", fontSize: 15 }}>{time}</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            ₹{fare}.0 x {count} = ₹{cost}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={tickets}
        renderItem={({ item }) => (
          <Item
            dl={item.dl}
            route={item.route}
            start={item.start}
            end={item.end}
            count={item.count}
            fare={item.fare}
            color={item.color}
            cost={item.cost}
            time={item.time}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  middle: {
    marginTop: 16,
    marginBottom: 16,
  },
  border: {
    borderBottomColor: "#c3c3c3",
    borderBottomWidth: 0.2,
    marginTop: 18,
  },
  left: {
    flexDirection: "row",
    position: "absolute",
    marginLeft: 50,
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    borderRadius: 10,
    height: 170,
    padding: 20,
    backgroundColor: "white",
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    elevation: 2
  },
  top: {
    justifyContent: "space-between",
  },
});
