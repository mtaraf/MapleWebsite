import styles from "../../css/weeklies.module.css";
import BossItem from "./BossItem";
import meso from "../../assets/images/meso.jpg";
import pinkBean from "../../assets/images/pinkBean.jpg";
import zakum from "../../assets/images/zakum.jpg";
import magnus from "../../assets/images/magnus.jpg";
import hilla from "../../assets/images/hilla.png";
import pierre from "../../assets/images/pierre.png";
import vellum from "../../assets/images/vellum.png";
import vonBon from "../../assets/images/von-bon.png";
import queen from "../../assets/images/crimson-queen.png";
import cygnus from "../../assets/images/cygnus-boss.png";
import pap from "../../assets/images/pap.png";
import { useState } from "react";

export default function Weeklies() {
  const [mesos, setMesos] = useState(0);

  const bossListOne = [
    { name: "Chaos Pink Bean", image: pinkBean, mesos: 12800000 },
    { name: "Chaos Zakum", image: zakum, mesos: 16200000 },
    { name: "Hard Magnus", image: magnus, mesos: 19012500 },
    { name: "Hard Hilla", image: hilla, mesos: 11250000 },
    { name: "Chaos Papulatus", image: pap, mesos: 26450000 },
    { name: "Chaos Crimson Queen", image: queen, mesos: 16200000 },
    { name: "Chaos Pierre", image: pierre, mesos: 16200000 },
    { name: "Chaos Von Bon", image: vonBon, mesos: 16200000 },
    { name: "Chaos Vellum", image: vellum, mesos: 21012500 },
    { name: "Normal Cygnus", image: cygnus, mesos: 14450000 },
  ];

  return (
    <div className={styles.mainCard}>
      <div className={styles.bossing}>
        <div className={styles.title}>Bossing</div>

        <div className={styles.subTitle}>
          <img src={meso} alt="" />
          <span>: {mesos.toLocaleString()}</span>
        </div>

        <div className={styles.lists}>
          <div className={styles.leftList}>
            {bossListOne.map((bossObject) => (
              <BossItem
                key={bossObject.name}
                image={bossObject.image}
                name={bossObject.name}
                mesos={bossObject.mesos}
                currentMesos={mesos}
                setMesos={setMesos}
              />
            ))}
          </div>

          <div>
            {bossListOne.map((bossObject) => (
              <BossItem
                key={bossObject.name}
                image={bossObject.image}
                name={bossObject.name}
                mesos={bossObject.mesos}
                currentMesos={mesos}
                setMesos={setMesos}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.quests}>
        <div className={styles.title}>Quests</div>
        <div>q</div>
      </div>
    </div>
  );
}
