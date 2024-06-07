import styles from "../css/arcaneSymbols.module.css";
import vanishing from "../assets/images/vanishing.jpg";
import chu from "../assets/images/chu_chu.jpg";
import lach from "../assets/images/lachelein.jpg";
import morass from "../assets/images/morass.jpg";
import esfera from "../assets/images/esfera.jpg";
import arcana from "../assets/images/arcana.jpg";
import SymbolDetails from "./SymbolDetails";
import SymbolSelector from "./SymbolSelector";
import { useState } from "react";

export default function ArcaneSymbols() {
  const [currentSymbol, setCurrentSymbol] = useState("");

  // Todo: Create backend to save/write data to for each symbol

  const images = [vanishing, chu, lach, arcana, morass, esfera];

  return (
    <div className={styles.mainCard}>
      <SymbolSelector images={images} setCurrentSymbol={setCurrentSymbol} />
      <SymbolDetails />
    </div>
  );
}
