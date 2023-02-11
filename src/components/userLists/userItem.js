import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfilePic from "./profilePic";
import users from "../../data/users";
import { padding, radius } from "../../utils/globalStyles";
import { windowWidth } from "../../utils/dimensions";
import { useNavigation } from "@react-navigation/native";
import MediumText from "../../utils/texts/mediumText";
import SmallText from "../../utils/texts/smallText";

const UserItem = ({ index, name }) => {
  // const { index, name } = props;
  const navigation = useNavigation();

  return (
    <Pressable
      key={index}
      style={styles.container}
      onPress={() => {
        navigation.navigate("statusdisplay", { userInfo: index });
        console.log("User pressed");
      }}
    >
      {/*user profile picture */}

      <ProfilePic source={users[index]?.profiePic} />

      {/* user details */}
      <View>
        <MediumText title={name} />

        <SmallText title="Time..." />
        {/* <Text>Time..</Text> */}
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
    // backgroundColor: 'grey',
    borderRadius: radius.lg,
    // borderBottomWidth: 1,
    // borderBottomColor: 'grey'
  },
});
