import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import { H1 } from "./styled";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <H1>Tapttoo</H1>
    </div>
  );
};

export default Home;
