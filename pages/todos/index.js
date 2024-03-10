import useSWR from "swr";

function Todos() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log({ data, error });

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
