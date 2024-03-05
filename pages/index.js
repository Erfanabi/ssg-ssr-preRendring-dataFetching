import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  console.log(data);

  return (
    <div className={styles.container}>
      <h1>page SSG with getStaticProps()</h1>
      <ul>
        {data.map((item) => {
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
      data,
    },
  };
}
