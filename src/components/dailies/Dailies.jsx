import styles from "../../css/dailies/dailies.module.css";
import DailySubCard from "./DailySubCard";
import vanishing from "../../assets/images/npc/VanishingJourney.png";
import chu from "../../assets/images/npc/lyon.png";
import lach from "../../assets/images/npc/lach.png";
import arc from "../../assets/images/npc/arcanaNpc.png";
import morass from "../../assets/images/npc/jean.png";
import esf from "../../assets/images/npc/esferaNpc.png";
import ten from "../../assets/images/npc/Tenebris.png";

export default function Dailies() {
  const arcaneList = [
    { image: vanishing, name: "Vanishing Journey" },
    { image: chu, name: "Chu-Chu Island" },
    { image: lach, name: "Lachelein" },
    { image: arc, name: "Arcana" },
    { image: morass, name: "Morass" },
    { image: esf, name: "Esfera" },
    { image: ten, name: "Tenebris" },
  ];

  return (
    <div className={styles.mainCard}>
      <div className={styles.subCards}>
        <DailySubCard title={"Arcane River"} list={arcaneList} />
        <DailySubCard title={"Arcane River"} />
        <DailySubCard title={"Arcane River"} />
      </div>
    </div>
  );
}
