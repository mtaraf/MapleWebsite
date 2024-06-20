import styles from "../../css/home/arcaneSymbols.module.css";
import vanishing from "../../assets/images/symbols/vanishing.jpg";
import chu from "../../assets/images/symbols/chu_chu.jpg";
import lach from "../../assets/images/symbols/lachelein.jpg";
import morass from "../../assets/images/symbols/morass.jpg";
import esfera from "../../assets/images/symbols/esfera.jpg";
import arcana from "../../assets/images/symbols/arcana.jpg";
import SymbolDetails from "./SymbolDetails";
import SymbolSelector from "./SymbolSelector";
import { useState } from "react";

export default function ArcaneSymbols() {
  const [currentSymbol, setCurrentSymbol] = useState("");

  // Todo: Create backend to save/write data to for each symbol

  const images = [vanishing, chu, lach, arcana, morass, esfera];

  return (
    <div className={styles.mainCard}>
      <div className={styles.title}>Arcane Symbols</div>
      <div className={styles.symbols}>
        <SymbolSelector images={images} setCurrentSymbol={setCurrentSymbol} />
        <SymbolDetails />
      </div>
    </div>
  );
}
