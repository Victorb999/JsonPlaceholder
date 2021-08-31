import { useEffect, useState } from "react";
import { api } from "../../services/api";
import styles from "./styles.module.scss";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

function ToDos() {
  const [todos, setTodo] = useState<Todo[]>([] as Todo[]);
  useEffect(() => {
    async function getTodo() {
      const res = await api.get("todos").then((response) => {
        return response.data;
      });
      setTodo(res);
    }
    getTodo();
  }, []);

  return (
    <div className="container">
      <h1>ToDos</h1>
      <div className="grid">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className={styles.todo}>
              <h1>To do #{todo.id}</h1>
              <h2>{todo.title}</h2>
              <h3>
                Completed:{" "}
                {todo.completed ? (
                  <span role="img" aria-label="ok">
                    ✅
                  </span>
                ) : (
                  <span role="img" aria-label="NotOk">
                    ❌
                  </span>
                )}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ToDos;
