import styles from "../css/navButton.module.css";

export default function NavButton({ title, setState }) {
  function setCurrentState() {
    setState(title);
    console.log(title);
  }

  return (
    <div>
      <button className={styles.button} onClick={setCurrentState}>
        {title}
      </button>
    </div>
  );
}
