import React from "react";
import UseQueriesBlock from "./components/UseQueriesBlock/UseQeuriesBlock";
import UseQueryBlock from "./components/UseQueryBlock/UseQueryBlock";

function App() {
  //useQuery
  //useQuery 동기적으로 실행

  //useQueries
  //unique key 활용

  //QueryCache

  //useMutation
  //update후에 get 다시 실행
  return (
    <div className="App">
      <UseQueryBlock />
      <UseQueriesBlock />
    </div>
  );
}

export default App;
