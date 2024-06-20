import styles from "../../css/weeklies/questItem.module.css";

export default function QuestItem({ image, name }) {
  return (
    <div>
      <div className={styles.card}>
        <img className={styles.image} src={image} alt="" />
        <div className={styles.name}>{name}</div>
        <input className={styles.input} type="checkbox" id={name} />
      </div>
    </div>
  );
}
