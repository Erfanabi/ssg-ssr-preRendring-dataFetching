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
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.albumId}`
  );
  const data = await response.json();
  //   console.log(params);

  if (!data.title) {
    return { notFound: true };
  }

  return { props: { data } };
}

// https://jsonplaceholder.typicode.com/albums
