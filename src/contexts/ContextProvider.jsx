/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';
import { userProfileData } from '../data/dummy';


const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setactiveMenu] = useState(true);

    return (
        <StateContext.Provider value={{ activeMenu, setactiveMenu }}>
          { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);