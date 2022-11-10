import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";

const postTodo = (todo: Todo) => {
  return axios.post("/todos", { todo });
};
interface Todo {
  title: string;
  content: string;
}
const UseMutationBlock = () => {
  const postingMutation = useMutation(postTodo, {
    onMutate: (variable) => {
      console.log("onMutate", variable);
    },
    onError: (error, variable, context) => {
      // error
    },
    onSuccess: (data, variables, context) => {
      console.log("success", data, variables, context);
    },
    onSettled: () => {
      console.log("end");
    },
  });

  const [todo, setTodo] = useState({ title: "", content: "" });
  return (
    <>
      <div>
        <hr />
        <br />
        <h3>Create My Todo</h3>
        <span>제목</span>
        <input
          type="text"
          value={todo.title}
          onChange={(e) => {
            setTodo((p) => ({ ...p, title: e.target.value }));
          }}
        />
      </div>
      <div>
        <span>내용</span>
        <input
          type="text"
          value={todo.content}
          onChange={(e) => {
            setTodo((p) => ({ ...p, content: e.target.value }));
          }}
        />
      </div>
      <button
        onClick={() => {
          postingMutation.mutate(todo);
        }}
      >
        작성
      </button>
    </>
  );
};
export default UseMutationBlock;
