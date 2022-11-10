import React from "react";
import UseMutationBlock from "./components/UseMutationBlock/UseMutationBlock";
import UseQueriesBlock from "./components/UseQueriesBlock/UseQeuriesBlock";
import UseQueryBlock from "./components/UseQueryBlock/UseQueryBlock";

function App() {
  return (
    <div className="App">
      <UseQueryBlock />
      <UseQueriesBlock />
      <UseMutationBlock />
    </div>
  );
}

export default App;
