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

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;

  console.log(req.headers);
  console.log(query);

  console.log("Generating Albums Page!");

  // Fetch data from external API
  const response = await fetch("http://localhost:3001/albums");
  const data = await response.json();

  // Pass data to the page via props
  return { props: { data } };
}
