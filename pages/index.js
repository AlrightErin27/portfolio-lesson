import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Catfolio</title>
        {/* favicon is the little image next to the title on the browser tab */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>🌴 Welcome to here! 🌴</h1>
    </div>
  );
}
