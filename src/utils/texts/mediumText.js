import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fontSize, fontWeight } from "../globalStyles";

const MediumText = ({ wrapperStyle, textStyle, title }) => {
  return (
    <View style={wrapperStyle}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </View>
  );
};

export default MediumText;

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
  },
});
