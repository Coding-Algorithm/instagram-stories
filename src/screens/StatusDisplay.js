import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import users from "../data/users";
import StatusHeader from "../components/statusDisplay/statusHeader";
import { padding } from "../utils/globalStyles";
import { screenHeight, screenWidth } from "../utils/dimensions";
import { COUNTDOWN } from "../utils/constants";

const StatusDisplay = ({ navigation, route }) => {
  const { params } = route;

  const { userInfo } = params;

  const [activeStatusIndex, setActiveStatusIndex] = useState(0);
  const [activeUserIndex, setActiveUserIndex] = useState(userInfo);

  const userStatusArray = users[activeUserIndex].status;


  let statusCount = 0;
  // let activeStatusIndex = 0;

  console.log(
    "array length: ",
    userStatusArray.length,
    "   --  id: ",
    users[activeUserIndex].id,
    "   --  index: ",
    activeStatusIndex
  );

  // let statusCount = 0;
  const slidesRef = useRef(null);

  const increaseStatusCounter = () => (statusCount += 1);
  const decreaseStatusCounter = () => (statusCount -= 1);
  const resetStatusCounter = () => (statusCount = 0);

  const counter = () => {
    if (statusCount <= COUNTDOWN) {
      increaseStatusCounter();
    }
    if (statusCount > COUNTDOWN) {
      const nextStatusIndex = activeStatusIndex + 1;
      console.log(nextStatusIndex <= userStatusArray.length - 1, "statusCount");
      if (nextStatusIndex <= userStatusArray.length - 1) {
        console.log('inside true', nextStatusIndex)
        setActiveStatusIndex(nextStatusIndex);
        slidesRef.current.scrollToIndex({ index: nextStatusIndex });
        resetStatusCounter();
      } else {
        const nextUserIndex = activeUserIndex + 1;
        console.log(nextUserIndex <= users.length - 1, activeStatusIndex, 'new user')
        if (nextUserIndex <= users.length - 1) {
          setActiveStatusIndex(0);
          slidesRef.current.scrollToIndex({animated: false, index: 0 });
          resetStatusCounter();
          setActiveUserIndex(nextUserIndex);
        } else {
          navigation.goBack();
        }
      }
    }
  };

  // subComponent
  const DisplayImage = ({ item, index }) => {
    const picSource = item.url;

    return (
      <View
        style={{
          width: screenWidth,
          height: screenHeight,
          backgroundColor: "black",
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
          source={{
            uri: picSource,
          }}
          resizeMode="contain"
        />
      </View>
    );
  };

  useEffect(() => {
    const count = setInterval(counter, 1000);
    resetStatusCounter();

    return () => {
      console.log('here..///')
      clearInterval(count);
      resetStatusCounter();
    };
  }, [activeStatusIndex, activeUserIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* header */}
        <StatusHeader
          activeStatusIndex={activeStatusIndex}
          activeUserIndex={activeUserIndex}
          setActiveStatusIndex={activeStatusIndex}
          userInfo={userInfo}
        />

        <View
          style={{
            width: screenWidth,
            height: screenHeight,
            backgroundColor: "black",
          }}
        >
          <FlatList
            data={users[activeUserIndex].status}
            renderItem={({ item, index }) => (
              <DisplayImage item={item} index={index} />
            )}
            horizontal
            pagingEnabled
            ref={slidesRef}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StatusDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
