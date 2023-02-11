import { StyleSheet, View } from "react-native";
import React from "react";
import users from "../../data/users";
import { windowWidth } from "../../utils/dimensions";
import { radius } from "../../utils/globalStyles";

const DisplayBars = ({
  userInfo,
  item,
  activeStatusIndex,
  activeUserIndex,
}) => {
  const statusArray = users[activeUserIndex].status;


  const totalMargin = (statusArray.length - 1) * 6;
  const barWidth = (windowWidth - 30 - totalMargin) / statusArray.length;

  const percentWidth = (barWidth / windowWidth) * 100 + "%";

  return (
    <View
      style={{
        width: percentWidth,
        height: 5,
        marginRight: 6,
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
