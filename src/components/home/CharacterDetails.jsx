import defaultChar from "../../assets/images/mapleChar.jpg";
import styles from "../../css/characterDetails.module.css";
import ArcaneSymbols from "./ArcaneSymbols";
import Nodes from "./Nodes";

export default function CharacterDetails() {
  return (
    <div className={styles.mainCard}>
      <div className={styles.characterCard}>
        <img className={styles.image} src={defaultChar} alt="" />
        <div className={styles.information}>
          <h3>Name</h3>
          <div>Lv Level Class</div>
          <div>Arance Force:</div>
        </div>
      </div>

      <div className={styles.details}>
        <div>
          <Nodes />
        </div>
        <div>
          <ArcaneSymbols />
        </div>
      </div>
    </div>
  );
}
