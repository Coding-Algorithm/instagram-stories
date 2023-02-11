import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import users from "../data/users";
import UserItem from "../components/userLists/userItem";
import { calcWidth } from "../utils/calcHeightNWidth";
import { padding } from "../utils/globalStyles";

const UserLists = ({ navigation }) => {



  return (
    <View
      style={styles.container}
    >
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
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
