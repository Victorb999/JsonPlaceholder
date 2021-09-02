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

  const getTodo = async () => {
    const res = await api.get("todos");
    setTodo(res.data);
  };
  useEffect(() => {
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
