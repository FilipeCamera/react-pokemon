import filter from "./filter.json";
import styles from "./Filter.module.scss";
import classNames from "classnames";

export default function Filter() {
  return (
    <div className={classNames({ [styles.box]: true })}>
      <div className={classNames({ [styles.filter]: true })}>
        {filter.map((item) => (
          <button
            key={item.id}
            className={classNames({ [styles.filter__button]: true })}
          >
            <p>{item.type}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
