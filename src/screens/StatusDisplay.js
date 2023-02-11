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
import {
  screenHeight,
  screenWidth,
  windowHeight,
  windowWidth,
} from "../utils/dimensions";
import { COUNTDOWN } from "../utils/constants";

const StatusDisplay = ({ navigation, route }) => {
  // const navigation = useNavigation()
  const { params } = route;

  const { userInfo } = params;

  const [activeStatusIndex, setActiveStatusIndex] = useState(0);
  const [activeUserIndex, setActiveUserIndex] = useState(userInfo);

  const userStatusArray = users[activeUserIndex].status;

  console.log(
    "array length: ",
    userStatusArray.length,
    "   --  id: ",
    users[activeUserIndex].id,
    "   --  index: ",
    activeStatusIndex
  );

  let statusCount = 0;
  const slidesRef = useRef(null);

  const increaseStatusCounter = () => (statusCount += 1);
  const decreaseStatusCounter = () => (statusCount -= 1);
  const resetStatusCounter = () => (statusCount = 0);

  const counter = () => {
    console.log(statusCount < COUNTDOWN);

    if (statusCount <= COUNTDOWN) {
      console.log("lesser");
      increaseStatusCounter();
    }

    if (statusCount > COUNTDOWN) {
      const nextStatusIndex = activeStatusIndex + 1;
      if (nextStatusIndex <= userStatusArray.length - 1) {
        setActiveStatusIndex(nextStatusIndex);
        slidesRef.current.scrollToIndex({ index: nextStatusIndex });
        resetStatusCounter();
      } else {
        const nextUserIndex = activeUserIndex + 1;
        if (nextUserIndex <= users.length - 1) {
          setActiveStatusIndex(-1);
          resetStatusCounter();
          setActiveUserIndex(nextUserIndex);
        } else {
          navigation.goBack();
        }
      }
    }
  };

  const setIndex = (index) => {
    slidesRef.current.scrollToIndex({ animated: true, index: index });
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
    console.log(statusCount);

    const count = setInterval(counter, 1000);

    return () => {
      console.log("clearing");
      clearInterval(count);
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

        {/* image in background */}

        {/* <Image /> */}
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
            // bounces={false}
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
    // paddingHorizontal: padding.md,
    // paddingVertical: padding.lg,
    // backgroundColor: 'blue'
  },
});
