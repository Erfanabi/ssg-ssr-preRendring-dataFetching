export default function Home({ posts }) {
  // console.log(posts);

  return (
    <div>
      <h1>page SSG with getStaticProps()</h1>
      <ul>
        {posts.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
}
