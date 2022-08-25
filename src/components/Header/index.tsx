import styles from "./Header.module.scss";
import classnames from "classnames";

export default function Header() {
  return (
    <div className={classnames({ [styles.header]: true })}>
      <h1 className={classnames({ [styles.header__title]: true })}>
        React Pokemon
      </h1>
    </div>
  );
}
