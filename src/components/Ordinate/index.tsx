import styles from "./Ordinate.module.scss";

export default function Ordinate() {
  return (
    <div className={styles.ordinate}>
      <p className={styles.ordinate__text}>Ordenar por</p>
      <select className={styles.ordinate__select}>
        <option>Peso</option>
        <option>Altura</option>
        <option>Experiência</option>
      </select>
    </div>
  );
}
