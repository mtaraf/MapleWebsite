import styles from "../../css/dailies/dailyObject.module.css";

export default function DailyObject({ name, image }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt="" />
      <div className={styles.name}>{name}</div>
      <input className={styles.input} type="checkbox" id={name} />
    </div>
  );
}
