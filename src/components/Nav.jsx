import styles from "../css/nav.module.css";
import CharacterSelector from "./CharacterSelector";
import NavButton from "./NavButton";

export default function Nav({ setState }) {
  return (
    <div className={styles.nav}>
      <div className={styles.title}>
        <NavButton title={"Maple Home"} setState={setState} />
      </div>
      <div className={styles.pages}>
        <NavButton title={"Dailies"} setState={setState} />
        <NavButton title={"Weeklies"} setState={setState} />
        <NavButton title={"Calculators"} setState={setState} />
      </div>
      <div>
        <CharacterSelector />
      </div>
    </div>
  );
}
