import { useRouter } from "next/router";
import React from "react";

function UserDetail({ data }) {
  const router = useRouter();

  console.log(router.isFallback);
  console.log(data);

  // اینو حتما باید بنویسیم
  if (router.isFallback) {
    return <h2>Fallback Page!</h2>;
  }

  return (
    <div>
      <h1>{data?.name}</h1>
      <h3>{data?.email}</h3>
    </div>
  );
}

export default UserDetail;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const newData = data.slice(0, 4);

  // ! Get the paths we want to pre-render based on data
  const paths = newData.map((item) => ({
    params: { userId: item.id.toString() },
  }));

  // ! We'll pre-render only these paths at build time.
  // ! { fallback: false } means other routes should 404.
  return { paths, fallback: true };

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
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
  const data = await res.json();
  //   console.log(data);

  if (!data.name) {
    return {
      // notFound: true,
      redirect: { destination: "/" },
    };
  }

  return {
    props: {
      data,
    },
  };
}
