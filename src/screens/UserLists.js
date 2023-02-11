import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import users from "../data/users";
import UserItem from "../components/userLists/userItem";
import { calcWidth } from "../utils/calcHeightNWidth";
import { padding } from "../utils/globalStyles";
import { GetContext } from "../context/GlobalContext/GlobalContext";

const UserLists = ({ navigation }) => {

  useEffect(() => {
    console.log('Good..')

    return (() => {
      console.log('Good..../')
    })
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item, index }) => (
          <UserItem name={item.name} index={index} />
        )}
      />
    </View>
  );
};

export default UserLists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: padding.sm,
    paddingVertical: padding.xlg,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
