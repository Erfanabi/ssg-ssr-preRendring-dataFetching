function AlbumId({ data }) {
  return (
    <div>
      <h1>{data.id}</h1>
      <h3>{data.title}</h3>
    </div>
  );
}

export default AlbumId;

export async function getServerSideProps(context) {
  console.log("Generating Albums Page! | Dynamic SSR");

  const { params } = context;
  const response = await fetch(
    `http://localhost:3001/albums/${params.albumId}`
  );
  const data = await response.json();
  //   console.log(params);

  if (!data.title) {
    return { notFound: true };
  }

  return { props: { data } };
}

// http://localhost:3001/albums
