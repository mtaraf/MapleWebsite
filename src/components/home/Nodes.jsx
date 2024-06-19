import styles from "../../css/nodes.module.css";
import NodeItem from "./NodeItem";
import NodeList from "./NodeList";

export default function Nodes() {
  return (
    <div className={styles.mainCard}>
      <div className={styles.title}>Nodes</div>
      <div className={styles.details}>
        <NodeList title={"Primary Trio"} />
        <NodeList title={"Skill Nodes"} />
      </div>
    </div>
  );
}
