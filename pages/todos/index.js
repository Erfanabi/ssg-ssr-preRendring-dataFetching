import { useEffect, useState } from "react";

function Todos() {
  const [dataTodo, setDataTodo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const todos = await res.json();
      setDataTodo(todos);
    }

    fetchData();
  }, []);

  console.log(dataTodo);

  return (
    <div>
      {dataTodo.length ? (
        dataTodo.map((todo) => {
          return <h3 key={todo.id}>{todo.title}</h3>;
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Todos;

// const res = await fetch("https://jsonplaceholder.typicode.com/users");
// const users = await res.json();
