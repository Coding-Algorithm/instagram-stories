import { StyleSheet, View } from "react-native";
import React from "react";
import users from "../../data/users";
import { windowWidth } from "../../utils/dimensions";
import { radius } from "../../utils/globalStyles";

const DisplayBars = ({ userInfo, item, activeStatusIndex }) => {
  const statusArray = users[activeStatusIndex].status;

  const barWidth = windowWidth / statusArray.length - 30;

  console.log(barWidth, statusArray.length, 'width')

  return (
    <View
      style={{
        width: barWidth,
        height: 5,
        marginRight: 5,
        backgroundColor: "grey",
        borderRadius: radius.sm,
      }}
    >
      <View
        style={{
          width: "50%",
          height: 5,
          backgroundColor: "white",
          borderRadius: radius.sm,
        }}
      ></View>
    </View>
  );
};

export default DisplayBars;

const styles = StyleSheet.create({});
