import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fontSize, fontWeight } from "../globalStyles";

const SmallText = ({ wrapperStyle, textStyle, title }) => {
  return (
    <View style={wrapperStyle}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </View>
  );
};

export default SmallText;

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.light,
  },
});
