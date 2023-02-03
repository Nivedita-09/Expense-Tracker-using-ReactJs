import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { AddTransaction } from "./components/AddTransaction";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import { TransactionList } from "./components/TransactionList";
// import NameList from "./components/NameList";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
