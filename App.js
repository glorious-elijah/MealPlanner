/* eslint-disable @typescript-eslint/explicit-function-return-type */
import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./pages/HomeScreen.tsx";
import Settings from "./pages/Settings.tsx";
import Favorites from "./pages/Favorites.tsx";
import GroceryList from "./pages/GroceryList.tsx";
import MealDetails from "./pages/MealDetails.tsx";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AuxiliaryNavigation = () => {
  <Stack.Navigator>
    <Stack.Screen
      name="MealDetails"
      component={MealDetails}
      options={({ route }) => ({ title: `Meal ${route.params.mealId}` })}
    />
  </Stack.Navigator>;
};

const MainNavigation = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="GroceryList" component={GroceryList} />
      <BottomTab.Screen name="Favorites" component={Favorites} />
      <BottomTab.Screen name="Settings" component={Settings} />
    </BottomTab.Navigator>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MainNavigation />
      <AuxiliaryNavigation />
    </View>
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
