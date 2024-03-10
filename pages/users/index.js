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
  console.log("Regenerating Users Page! | ISR");
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
    // ! Next.js will attempt to re-generate the page:
    // ! - When a request comes in
    // ! - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
