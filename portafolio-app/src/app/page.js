import Image from "next/image";
import styles from "./page.module.css";
import Perfil from "./components/Perfil";
import Facts from "./components/Facts";
import PerfilBtn from "./components/PerfilBotones";
import TabBotones from "./components/TabBotones";
import TabContent from "./components/TabsContent";
export default function Home() {
  return (
    <div className={styles.tabContent}>
      <Perfil/>
      <Facts/>
      <PerfilBtn/>
      <TabBotones/>
      <TabContent/>
    </div>
  );
}
