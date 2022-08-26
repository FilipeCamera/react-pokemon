import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}>React Pokemon</h1>
    </div>
  );
}
