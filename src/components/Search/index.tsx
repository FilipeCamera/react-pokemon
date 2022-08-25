import styles from "./Search.module.scss";
import classNames from "classnames";

export default function Search() {
  return (
    <div className={classNames({ [styles.search]: true })}>
      <input
        type="text"
        placeholder="Pokemon..."
        className={classNames({ [styles.search__input]: true })}
      />
    </div>
  );
}
