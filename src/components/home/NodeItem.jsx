import styles from "../../css/home/nodeItem.module.css";
import chainLightning from "../../assets/images/chain-lightning.jpg";

export default function NodeItem({ characterClass }) {
  // Depending on character class, get primary class trio

  return (
    <div className={styles.nodeList}>
      <img className={styles.image} src={chainLightning} alt="" />
      <div className={styles.nodeDetails}>Level: </div>
    </div>
  );
}
