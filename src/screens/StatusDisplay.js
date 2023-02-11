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
import { screenHeight, screenWidth } from "../utils/dimensions";
import { COUNTDOWN } from "../utils/constants";
import { GetContext } from "../context/GlobalContext/GlobalContext";

const StatusDisplay = ({ navigation, route }) => {
  const { statusCount } = GetContext();

  const { params } = route;

  const { userInfo } = params;

  const [activeStatusIndex, setActiveStatusIndex] = useState(0);
  const [activeUserIndex, setActiveUserIndex] = useState(userInfo);

  const userStatusArray = users[activeUserIndex].status;

  const activeStatus = users[activeUserIndex].status[activeStatusIndex];

  console.log(activeStatus);

  const slidesRef = useRef(null);

  const increaseStatusCounter = () => (statusCount.current += 1);
  const resetStatusCounter = () => (statusCount.current = 0);

  const counter = () => {
    console.log(statusCount.current <= COUNTDOWN);
    if (statusCount.current <= COUNTDOWN) {
      console.log(statusCount.current, "count");
      increaseStatusCounter();
    }
    if (statusCount.current > COUNTDOWN) {
      users[activeUserIndex].status[activeStatusIndex].viewed = true;
      const nextStatusIndex = activeStatusIndex + 1;
      if (nextStatusIndex <= userStatusArray.length - 1) {
        setActiveStatusIndex(nextStatusIndex);
        slidesRef.current.scrollToIndex({ index: nextStatusIndex });
        resetStatusCounter();
      } else {
        const nextUserIndex = activeUserIndex + 1;
        if (nextUserIndex <= users.length - 1) {
          setActiveStatusIndex(0);
          slidesRef.current.scrollToIndex({ animated: false, index: 0 });
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
      clearInterval(count);
      resetStatusCounter();
    };
  }, [activeStatusIndex, activeUserIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusHeader
          activeStatusIndex={activeStatusIndex}
          activeUserIndex={activeUserIndex}
          setActiveStatusIndex={activeStatusIndex}
          userInfo={userInfo}
          statusCount={statusCount}
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
