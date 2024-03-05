import Link from "next/link";

function Users({ users }) {
  return (
    <div>
      <ul>
        {users.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/users/${item.id}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
