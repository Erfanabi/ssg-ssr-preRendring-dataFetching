import { useState } from "react";

function TodoId({ todo }) {
  const [data, setData] = useState(todo);

  const handleClick = async (id) => {
    const res = await fetch(`http://localhost:3001/todos/${id}`);
    const data = await res.json();
    setData(data);
  };

  return (
    <div>
      <h1>{data.id}</h1>
      <h3>{data.title}</h3>
      <h3>{`${data.completed}`}</h3>
      <button onClick={() => handleClick(data.id)}>update</button>
    </div>
  );
}

export default TodoId;

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3001/todos/${params.todoId}`);
  const todo = await res.json();

  return { props: { todo } };
}
