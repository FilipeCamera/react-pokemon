import classNames from "classnames";
import React, { useCallback } from "react";
import filters from "./filter.json";
import styles from "./Filter.module.scss";

export interface IFilter {
  type: string;
  id: number;
}

interface Props {
  filter: IFilter | null;
  setFilter: React.Dispatch<React.SetStateAction<IFilter | null>>;
}

export default function Filter({ filter, setFilter }: Props) {
  const onSelect = useCallback(
    (filtro: IFilter) => {
      if (filter?.id === filtro.id) return setFilter(null);

      return setFilter(filtro);
    },
    [filter, setFilter]
  );

  return (
    <div className={styles.box}>
      <div className={styles.filter}>
        {filters.map((item) => (
          <button
            key={item.id}
            className={classNames({
              [styles.filter__button]: true,
              [styles["filter__button--selected"]]: item.id === filter?.id,
            })}
            onClick={() => onSelect(item)}
          >
            <p>{item.type}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
