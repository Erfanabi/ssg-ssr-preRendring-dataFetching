import Link from "next/link";

function Albums({ data, query }) {
  console.log(query);
  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {data.map((item) => {
          return (
            <Link key={item.id} href={`/albums/${item.id}`}>
              <li>{item.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Albums;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;

  // console.log(req.headers);
  // console.log(query);

  console.log("Generating Albums Page! | SSR");

  // Fetch data from external API
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await response.json();

  // Pass data to the page via props
  return { props: { data, query } };
}
