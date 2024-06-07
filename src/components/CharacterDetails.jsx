import defaultChar from "../assets/images/mapleChar.jpg";
import styles from "../css/characterDetails.module.css";
import ArcaneSymbols from "./ArcaneSymbols";
import Equipment from "./Equipment";

export default function CharacterDetails() {
  return (
    <div>
      <div className={styles.card}>
        <img className={styles.image} src={defaultChar} alt="" />
        <div className={styles.information}>
          <h3>Name</h3>
          <div>Lv Level Class</div>
          <div>Arance Force:</div>
        </div>
      </div>

      <div className={styles.details}>
        <div>
          <Equipment />
        </div>
        <div>
          <ArcaneSymbols />
        </div>
      </div>
    </div>
  );
}
