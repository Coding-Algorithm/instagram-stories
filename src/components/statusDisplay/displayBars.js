import { StyleSheet, View } from "react-native";
import React from "react";
import users from "../../data/users";
import { windowWidth } from "../../utils/dimensions";
import { radius } from "../../utils/globalStyles";
import { GetContext } from "../../context/GlobalContext/GlobalContext";

const DisplayBars = ({
  userInfo,
  item,
  activeStatusIndex,
  index,
  // statusCount,
  activeUserIndex,
}) => {
  const { statusCount } = GetContext();

  const indexedStatus = users[activeUserIndex].status[index];

  const isViewed = indexedStatus.viewed;

  console.log(isViewed);

  const statusArray = users[activeUserIndex].status;

  const totalMargin = (statusArray.length - 1) * 6;
  const barWidth = (windowWidth - 30 - totalMargin) / statusArray.length;

  const percentWidth = (barWidth / windowWidth) * 100 + "%";

  const activeStyle = {
    height: 3,
    backgroundColor: 'orange'
  };

  return (
    <View
      style={[
        {
          width: percentWidth,
          height: 5,
          marginRight: 6,
          backgroundColor: !isViewed ? "white" : "red",
          borderRadius: radius.sm,
        },
        index === activeStatusIndex && activeStyle,
      ]}
    >
      {/* {!isViewed && (
        <View
          style={{
            width: "50%",
            height: 5,
            backgroundColor: "white",
            borderRadius: radius.sm,
          }}
        ></View>
      )} */}
    </View>
  );
};

export default DisplayBars;

const styles = StyleSheet.create({});
