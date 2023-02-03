import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Inital State
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 30000 },
    { id: 3, text: "Book", amount: -100 },
    { id: 4, text: "Camera", amount: 1500 },
  ],
};

// Create CONTEXT
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transactions) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transactions,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
