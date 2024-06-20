import styles from "../../css/dailies/dailySubCard.module.css";
import DailyObject from "./DailyObject";

export default function DailySubCard({ title, list }) {
  return (
    <div className={styles.subCard}>
      <div className={styles.title}>{title}</div>
      {list?.map((listObject) => (
        <DailyObject name={listObject.name} image={listObject.image} />
      ))}
    </div>
  );
}
