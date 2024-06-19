import styles from "../../css/nodeList.module.css";
import NodeItem from "./NodeItem";

export default function NodeList({ title }) {
  return (
    <div>
      <div className={styles.subTitle}>{title}</div>
      <div className={styles.nodes}>
        <NodeItem characterClass="" />
        <NodeItem characterClass="" />
        <NodeItem characterClass="" />
      </div>
    </div>
  );
}
