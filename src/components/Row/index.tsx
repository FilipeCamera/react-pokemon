import styles from "./Row.module.scss";

interface Props {
  children: any;
}

export default function Row({ children }: Props) {
  return <div className={styles.row}>{children}</div>;
}
