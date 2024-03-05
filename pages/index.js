import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <h1>app : {data}</h1>
    </div>
  );
}

export async function getStaticProps() {
  const data = "Erfan Sharafi";

  return {
    props: {
      data,
    },
  };
}
