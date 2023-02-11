import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StatusDisplay from "../screens/StatusDisplay";
import UserLists from "../screens/UserLists";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return false ? (
    <Text>Good.</Text>
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="userlists"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="userlists"
          component={UserLists}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="statusdisplay"
          component={StatusDisplay}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
