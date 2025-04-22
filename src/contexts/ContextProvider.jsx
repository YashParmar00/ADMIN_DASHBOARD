/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";
import { userProfileData } from "../data/dummy";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setactiveMenu] = useState(true);
  const [isClicked, setisClicked] = useState(initialState);
  const [screenSize, setscreenSize] = useState(undefined);

  const handleClick = (clicked) => {
      setisClicked({ ...initialState, [clicked]: true });
  }

  return (
    <StateContext.Provider
      value={{ activeMenu, setactiveMenu, isClicked, setisClicked, handleClick, screenSize, setscreenSize }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
