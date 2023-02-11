import React, { createContext } from "react";
import { StyleSheet, Text, View } from "react-native";

const GlobalContext = createContext();

const INITIAL_STATE = {
  activeIndex: 0,
};

const GlobalContextProvider = ({children}) => {

    

  return (
    <GlobalContext.Provider>
        {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export const GetContext = () => {};

const styles = StyleSheet.create({});
