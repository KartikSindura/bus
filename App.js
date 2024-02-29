import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "./components/Card";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./screens/Homescreen";
import Createbus from "./screens/Createbus";
import Mytickets from "./screens/Mytickets";
import Ticketpopup from "./screens/Ticketpopup"
import store from "./store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Homescreen} />
          {/* <Stack.Screen name="Create" component={Createbus}/> */}
          <Stack.Screen name="My Tickets" component={Mytickets} />
          <Stack.Screen name="Ticket" component={Ticketpopup} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
