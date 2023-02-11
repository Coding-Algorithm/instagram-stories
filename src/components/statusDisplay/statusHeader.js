import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import ProfilePic from "../userLists/profilePic";
import { windowWidth } from "../../utils/dimensions";
import { padding } from "../../utils/globalStyles";
import DisplayBars from "./displayBars";

const StatusHeader = ({ userInfo, statusCount, activeStatusIndex, activeUserIndex }) => {
  const statusArray = users[activeUserIndex].status;

  const totalMargin = (statusArray.length - 1) * 6;
  const remainingWidth = windowWidth - 120;
  const barWidth = remainingWidth / statusArray.length - totalMargin;

  const percentWidth = (barWidth / remainingWidth) * 100 + "%";





  useEffect(() => {}, [statusArray]);

  return (
    <View style={styles.container}>
      <ProfilePic
        source={users[activeUserIndex].pPix}
        containerStyle={{ width: 40, height: 40 }}
      />

      <View
        style={{
          width: "90%",
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: "flex-start"
        }}
      >
        {statusArray.map((item, index) => {


          return (
            <DisplayBars
              statusCount={statusCount}
              key={index}
              index={index}
              item={item}
              activeUserIndex={activeUserIndex}
              activeStatusIndex={activeStatusIndex}
              userInfo={userInfo}
            />
          );
        })}
      </View>
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
  },
});
