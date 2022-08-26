import styles from "./BoxBackground.module.scss";

import logo from "../../assets/img/pokebola.png";

interface Props {
  children: any;
}

export default function BoxBackground({ children }: Props) {
  return (
    <div className={styles.box}>
      <figure className={styles.box__logo}>
        <img src={logo} alt="Logo Pokemon" className={styles.box__img} />
      </figure>
      {children}
    </div>
  );
}
