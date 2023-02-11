import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import ProfilePic from "../userLists/profilePic";
import { windowWidth } from "../../utils/dimensions";
import { padding } from "../../utils/globalStyles";
import DisplayBars from "./displayBars";

const StatusHeader = ({ userInfo, activeStatusIndex, activeUserIndex }) => {
  const statusArray = users[activeUserIndex].status;

  console.log(statusArray.length, activeUserIndex,  "status header");

  useEffect(() => {}, [statusArray]);

  return (
    <View style={styles.container}>
      <ProfilePic containerStyle={{ width: 40, height: 40 }} />
      {statusArray.map((item, index) => {
        return (
          <Text key={index} style={{ marginRight: 10 }}>
            <DisplayBars
              item={item}
              activeStatusIndex={activeStatusIndex}
              userInfo={userInfo}
            />
          </Text>
        );
      })}
    </View>
  );
};

export default StatusHeader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: padding.md,
    paddingVertical: padding.lg,
    position: "absolute",
    zIndex: 10,
    // backgroundColor: "blue",
    // paddingHorizontal: padding.md,
  },
});