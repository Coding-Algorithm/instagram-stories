import { COUNTDOWN } from "../utils/constants";

export let statusCount = 0;

export const increaseStatusCounter = () => (statusCount += 1);
export const resetStatusCounter = () => (statusCount = 0);

export const counter = (
  statusCount,
  userStatusArray,
  activeStatusIndex,
  setActiveStatusIndex,
  setActiveUserIndex,
  activeUserIndex,
  navigation,
  slidesRef
) => {
  console.log("got here..", statusCount, COUNTDOWN);

  if (statusCount <= COUNTDOWN) {
    console.log("not here");
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
