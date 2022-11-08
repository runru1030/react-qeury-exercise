import axios from "axios";
import { useEffect, useState } from "react";
import { useQueries } from "react-query";

const getTodoList = () => {
  return axios.get("/todos");
};
const getFriendTodoLit = (username: string) => {
  return axios.get("/friends-todos/filter", { params: { username } });
};
interface TodoList {
  id: number;
  username: string;
  title: string;
  content: string;
}
const UseQueriesBlock = () => {
  const friend = "BF1";
  const result = useQueries([
    {
      queryKey: ["my-todos"],
      queryFn: getTodoList,
    },
    {
      queryKey: ["friends-todos", friend],
      queryFn: (param: any) => {
        return getFriendTodoLit(param.queryKey[1]);
      },
    },
  ]);

  const [myTodoList, setMyTodoList] = useState<TodoList[]>([]);
  const [friendsTodoList, setFriendsTodoList] = useState<TodoList[]>([]);

  useEffect(() => {
    setMyTodoList(result[0]?.data?.data);
    setFriendsTodoList(result[1]?.data?.data);
  }, [result]);
  return (
    <ul>
      <hr />
      <br />
      <h3>My Todo</h3>
      {myTodoList?.map((todo) => (
        <li key={todo.id}>
          <h3>{todo.title}</h3>
          <span>{todo.content}</span>
        </li>
      ))}
      <br />
      <h3>Friends Todo</h3>
      {friendsTodoList?.map((todo) => (
        <li key={todo.id}>
          <h3>{todo.title}</h3>
          <span>{todo.content}</span>
        </li>
      ))}
    </ul>
  );
};
export default UseQueriesBlock;
