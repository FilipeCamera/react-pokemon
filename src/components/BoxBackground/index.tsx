import React from "react";
import styles from "./BoxBackground.module.scss";
import classNames from "classnames";

import logo from "../../assets/img/pokebola.png";

interface Props {
  children: any;
}

export default function BoxBackground({ children }: Props) {
  return (
    <div className={classNames({ [styles.box]: true })}>
      <figure className={classNames({ [styles.box__logo]: true })}>
        <img
          src={logo}
          alt="Logo Pokemon"
          className={classNames({ [styles.box__img]: true })}
        />
      </figure>
      {children}
    </div>
  );
}
