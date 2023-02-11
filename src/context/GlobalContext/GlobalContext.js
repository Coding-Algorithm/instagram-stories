import React, { createContext, useContext, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

const GlobalContext = createContext();

const INITIAL_STATE = {
  activeIndex: 0,
};

const GlobalContextProvider = ({children}) => {

  const statusCount = useRef(0)

  return (
    <GlobalContext.Provider
    value={{
      statusCount
    }}
    >
        {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export const GetContext = () => {
  return useContext(GlobalContext)
};

const styles = StyleSheet.create({});
