import styles from "../../css/home/symbolSelector.module.css";

export default function SymbolSelector({ images, setCurrentSymbol }) {
  function ChangeCurrentSymbol(symbol) {
    setCurrentSymbol(symbol);
  }

  return (
    <div className={styles.list}>
      {images.map((image) => (
        <button
          key={image}
          onClick={() => ChangeCurrentSymbol(image)}
          className={styles.symbolButton}
        >
          <img src={image} alt="" />
        </button>
      ))}
    </div>
  );
}
