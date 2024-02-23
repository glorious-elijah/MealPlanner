/* eslint-disable @typescript-eslint/explicit-function-return-type */
import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import "./src/localization/i18n";
import HomeScreen from "./src/pages/HomeScreen.tsx";
import Settings from "./src/pages/Settings.tsx";
import Favorites from "./src/pages/Favorites.tsx";
import GroceryList from "./src/pages/GroceryList.tsx";
import MealDetail from "./src/screens/MealDetail.tsx";
import { NavigationContainer } from "@react-navigation/native";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AuxiliaryNavigation = () => {
  <Stack.Navigator>
    <Stack.Screen
      name="MealDetail"
      component={MealDetail}
      options={({ route }) => ({ title: `Meal ${route.params.mealId}` })}
    />
  </Stack.Navigator>;
};

const MainNavigation = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Agenda" }}
      />
      <BottomTab.Screen name="GroceryList" component={GroceryList} />
      <BottomTab.Screen name="Favorites" component={Favorites} />
      <BottomTab.Screen name="Settings" component={Settings} />
    </BottomTab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <MainNavigation />
        <AuxiliaryNavigation />
      </NavigationContainer>
    </>
  );
}
