import Link from "next/link";
import useSWR from "swr";

function Todos() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:3001/todos",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log({ data, error });

  return (
    <div>
      {data.length ? (
        data.map((todo) => {
          return (
            <Link key={todo.id} href={`/todos/${todo.id}`}>
              <h3>{todo.title}</h3>
            </Link>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Todos;
