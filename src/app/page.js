import styles from "./page.module.css";
import Image from "next/image";

import bgImage from "@/static/bozeman-resevoir-by-shawn.webp";

export default function Home() {
  return (
    <>
      <div className={styles.bgImage}>
        <Image
          src={bgImage}
          alt=""
          placeholder="empty"
          fill
          priority
        />
      </div>
      <main role="main" id="page" className={styles.page}>
        <section className={styles.content}>
          <h1>Coming Soon</h1>
        </section>
      </main>
    </>
  );
}
