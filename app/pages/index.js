import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Arbnor | arbnor.xyz</title>
        <meta name="description" content="Hey, I'm Arbnor! 😊" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="WIP">
        <h2>Hello, welcome! ☺</h2>
        <p>My name is Arbnor, this site is currently WIP.</p>
        <p2>Although here are some neat links in the meantime:</p2>
      </div>
      <div className="btn">
        <button class="button">Github</button>
        <button class="button">Twitter</button>
        <button class="button">Mastodon</button>
      </div>
    </div>
  );
}
