import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { margin } from "../../utils/globalStyles";

const ProfilePic = ({ containerStyle, picUrl }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        source={require("../../assets/images/img1.jpg")}
        resizeMode="cover"
      />
    </View>
  );
};

export default ProfilePic;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: "grey",
    borderRadius: 50,
    marginRight: margin.md,
    overflow: 'hidden'
  },
});
