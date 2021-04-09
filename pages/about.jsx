import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div>
      <center>
        <h1>🌟About Page🌟</h1>
        <p className={styles.paragraph}>I am a super cool engineer now!</p>

        {/* adding an image from in vscode */}
        <Image src="/clearevb.png" alt="logo" width={300} height={300} />
        <br />
        {/* adding an image from online */}
        <Image
          src="https://placekitten.com/400/400"
          alt="a magical creature"
          height={400}
          width={400}
        />
        {/* add a file called next.config.js on top level */}
      </center>
    </div>
  );
}
