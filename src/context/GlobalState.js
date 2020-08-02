import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//initial state

const initialState = {
  transactions: [],
};

//Create context

export const GlobalContext = createContext(initialState);

//Actions

//Provider component
export const GlobalProvider = ({ children }) => {
  // eslint-disable-next-line no-undef
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
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
