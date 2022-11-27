import Head from "next/head";
import styles from "../styles/Home.module.css";

const githubHandle = () => {
  document.location.href = 'https://github.com/codenor';
}

const twitterHandle = () => {
  document.location.href = 'https://twitter.com/ArbnorOfficial';
}

const mastoHandle = () => {
  document.location.href = 'https://mas.to/@masnor';
}

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
        <button className="button" onClick={githubHandle}>Github</button>
        <button className="button" onClick={twitterHandle}>Twitter</button>
        <button className="button" onClick={mastoHandle}>Mastodon</button>
      </div>
    </div>
  );
}
