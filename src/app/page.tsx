import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import avatar from "@/assets/icons/giraffe.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={avatar}
            alt="Avatar"
            className={styles.vercelLogo}
            width={50}
            height={100}
            priority
          />
        </a>
      </div>

      <div className={styles.center}>Ten Thousand Questions Why !!</div>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.input}
          placeholder="Ask your question ?"
        />

        <div className={styles.buttonSearch} id="button-addon2">
          <FontAwesomeIcon
            className={styles.iconSearch}
            icon={faMagnifyingGlass}
          />
        </div>
      </div>
    </main>
  );
}
