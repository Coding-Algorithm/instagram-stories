import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ProfilePic from "./profilePic";
import users from "../../data/users";
import { padding, radius } from "../../utils/globalStyles";
import { windowWidth } from "../../utils/dimensions";
import { useNavigation } from "@react-navigation/native";
import MediumText from "../../utils/texts/mediumText";
import SmallText from "../../utils/texts/smallText";

const UserItem = ({ index, name }) => {
  const navigation = useNavigation();

  const [activeStatus, setActiveStatus] = useState(false);

  const userStatusArray = users[index].status;

  const activePicWrapper = {
    borderWidth: 2,
    borderColor: "orange",
  };

  useEffect(() => {
    // console.log(activeStatus, index)
    userStatusArray.forEach((stat, index) => {
      console.log(stat.viewed, index)
      !stat.viewed && !activeStatus && setActiveStatus(true);
      stat.viewed && activeStatus && setActiveStatus(false);
    });
  });

  return (
    <Pressable
      key={index}
      style={styles.container}
      onPress={() => {
        navigation.navigate("statusdisplay", { userInfo: index });
        console.log("User pressed");
      }}
    >
      <ProfilePic
        containerStyle={activeStatus ? activePicWrapper : {}}
        source={users[index]?.pPix}
      />

      <View>
        <MediumText title={name} />
        <SmallText title="Time..." />
      </View>
    </Pressable>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: windowWidth,
    padding: padding.lg,
    borderRadius: radius.lg,
  },
});
