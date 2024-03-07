function Albums({ data }) {
//   console.log(data);
  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Albums;

export async function getServerSideProps() {
  console.log("Generating Albums Page!");
  // Fetch data from external API
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
