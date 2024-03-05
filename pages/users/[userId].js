import React from "react";

function UserDetail({ data }) {
  console.log(data);
  return (
    <div>
      <h1>{data.name}</h1>
      <h3>{data.email}</h3>
    </div>
  );
}

export default UserDetail;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // ! Get the paths we want to pre-render based on data
  const paths = data.map((item) => ({
    params: { userId: item.id.toString() },
  }));

  // ! We'll pre-render only these paths at build time.
  // ! { fallback: false } means other routes should 404.
  return { paths, fallback: false };

  //   return {
  //     paths: [
  //       { params: { userId: "1" } },
  //       { params: { userId: "2" } },
  //       { params: { userId: "3" } },
  //       { params: { userId: "4" } },
  //       { params: { userId: "5" } },
  //       { params: { userId: "6" } },
  //       { params: { userId: "7" } },
  //       { params: { userId: "8" } },
  //       { params: { userId: "9" } },
  //       { params: { userId: "10" } },
  //     ],
  //     fallback: false,
  //   };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await res.json();
  //   console.log(data);
  return {
    props: {
      data,
    },
  };
}
