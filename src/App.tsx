import React from "react";
import UseMutationBlock from "./components/UseMutationBlock/UseMutationBlock";
import UseQueriesBlock from "./components/UseQueriesBlock/UseQeuriesBlock";
import UseQueryBlock from "./components/UseQueryBlock/UseQueryBlock";

function App() {
  //QueryCache

  //useMutation
  //update후에 get 다시 실행
  return (
    <div className="App">
      <UseQueryBlock />
      <UseQueriesBlock />
      <UseMutationBlock />
    </div>
  );
}

export default App;
