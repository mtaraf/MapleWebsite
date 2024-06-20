import styles from "../../css/weeklies/weeklies.module.css";
import BossItem from "./BossItem";
import meso from "../../assets/images/meso.jpg";
import pinkBean from "../../assets/images/bosses/pinkBean.jpg";
import zakum from "../../assets/images/bosses/zakum.jpg";
import magnus from "../../assets/images/bosses/magnus.jpg";
import hilla from "../../assets/images/bosses/hilla.png";
import pierre from "../../assets/images/bosses/pierre.png";
import vellum from "../../assets/images/bosses/vellum.png";
import vonBon from "../../assets/images/bosses/von-bon.png";
import queen from "../../assets/images/bosses/crimson-queen.png";
import cygnus from "../../assets/images/bosses/cygnus-boss.png";
import pap from "../../assets/images/bosses/pap.png";
import gloom from "../../assets/images/bosses/gloom.png";
import lotus from "../../assets/images/bosses/lotus.png";
import lucid from "../../assets/images/bosses/lucid.png";
import kalos from "../../assets/images/bosses/kalos.png";
import kaling from "../../assets/images/bosses/kaling.png";
import princessNo from "../../assets/images/bosses/princess-no-boss.png";
import will from "../../assets/images/bosses/will.png";
import seren from "../../assets/images/bosses/seren.png";
import slime from "../../assets/images/bosses/slimeBoss.png";
import vHilla from "../../assets/images/bosses/verus hilla.png";
import darknell from "../../assets/images/bosses/darknell.png";
import damien from "../../assets/images/bosses/damien.png";
import { useState } from "react";
import QuestItem from "./QuestItem";

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
    { name: "Princess No", image: princessNo, mesos: 16200000 },
    { name: "Aketchi", image: hilla, mesos: 28800000 },
  ];

  const bossListTwo = [
    { name: "Lotus", image: lotus, mesos: 32512500 },
    { name: "Damien", image: damien, mesos: 33800000 },
    { name: "Guardian Angel Slime", image: slime, mesos: 34322000 },
    { name: "Lucid", image: lucid, mesos: 35112500 },
    { name: "Will", image: will, mesos: 38255000 },
    { name: "Gloom", image: gloom, mesos: 49612500 },
    { name: "Darknell", image: darknell, mesos: 52812500 },
    { name: "Verus Hilla", image: vHilla, mesos: 89520000 },
    { name: "Kaling", image: kaling, mesos: 165000000 },
    { name: "Kalos", image: kalos, mesos: 150000000 },
    { name: "Seren", image: seren, mesos: 133687500 },
  ];

  const questList = [
    { name: "Scrapyard", image: lotus },
    { name: "Dark World Tree", image: damien },
    { name: "Culvert", image: slime },
    { name: "Flag Race", image: lucid },
  ];

  return (
    <div className={styles.mainCard}>
      <div className={styles.bossing}>
        <div className={styles.header}>
          <div className={styles.title}>Bossing</div>

          <div className={styles.subTitle}>
            <img src={meso} alt="" />
            <span>: {(mesos * 4).toLocaleString()}</span>
          </div>
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
            {bossListTwo.map((bossObject) => (
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
        <div className={styles.header}>
          <div className={styles.title}>Quests</div>
        </div>
        <div>
          {questList.map((quest) => (
            <QuestItem key={quest.name} image={quest.image} name={quest.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
