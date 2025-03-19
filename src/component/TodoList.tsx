import React from "react";
import { CiShop } from "react-icons/ci";
import { Todo } from "@/interface/todo.interface";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div className="content">
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              listStyle: "none",
              borderRadius: "10px",
              border: "1px solid black",
              padding: "10px",
              backgroundColor: "#C0C0C0",
              boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
              margin: "20px 20px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <CiShop style={{ fontSize: "20px" }} />
              <p style={{ textAlign: "left" }}>{todo.desc}</p>
              <div>
                <p style={{ fontWeight: "bold" }}>{todo.formattedDate}</p>
                <p>{todo.formattedTime}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
