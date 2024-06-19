import styles from "../../css/bossItem.module.css";

export default function BossItem({
  image,
  name,
  mesos,
  setMesos,
  currentMesos,
}) {
  function AddMesos(mesos, checked) {
    if (checked) {
      setMesos(currentMesos + mesos);
    } else {
      setMesos(currentMesos - mesos);
    }
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt="" />
      <div className={styles.bossName}>{name}</div>
      <input
        className={styles.input}
        type="checkbox"
        id={name}
        onChange={(e) => AddMesos(mesos, e.target.checked)}
      />
    </div>
  );
}
