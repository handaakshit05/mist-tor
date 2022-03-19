import React, { useReducer } from "react";
import { AuthReducer, initialState } from './reducer'; 

const TorStateContext = React.createContext();
const TorDispatchContext = React.createContext();

export function useTorState() {
  const context = React.useContext(TorStateContext);
  if (context === undefined) {
    throw new Error("useTorState must be used within a TorProvider");
  }
 
  return context;
}
 
export function useTorDispatch() {
  const context = React.useContext(TorDispatchContext);
  if (context === undefined) {
    throw new Error("useTorDispatch must be used within a TorProvider");
  }
 
  return context;
}

export const TorProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);
 
  return (
    <TorStateContext.Provider value={user}>
      <TorDispatchContext.Provider value={dispatch}>
        {children}
      </TorDispatchContext.Provider>
    </TorStateContext.Provider>
  );
};