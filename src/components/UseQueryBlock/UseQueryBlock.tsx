import axios from "axios";
import { useQuery } from "react-query";

const getTodoList = () => {
  return axios.get("/todos");
};
interface TodoList {
  id: number;
  username: string;
  title: string;
  content: string;
}
const UseQueryBlock = () => {
  const { isLoading, isError, data, error } = useQuery("todos", getTodoList, {
    refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    retry: 0, // 실패시 재호출 몇번 할지
    onSuccess: (data: { data: TodoList[] }) => {
      console.log(data);
    },
    onError: (e: any) => {
      console.log(e.message);
    },
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <ul>
      {data?.data.map((todo) => (
        <li key={todo.id}>
          <h3>{todo.title}</h3>
          <span>{todo.content}</span>
        </li>
      ))}
    </ul>
  );
};
export default UseQueryBlock;
