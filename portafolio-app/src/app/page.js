import Image from "next/image";
import styles from "./page.module.css";
import Portafolio from "./components/Portafolio";

export default function Home() {
  return (
    <div className={styles.tabContent}>
      <Portafolio/>
    </div>
  );
}
