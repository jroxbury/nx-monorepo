import React from 'react';

import styles from './card.module.scss';
import { Movie } from "@monorepo/types";

export interface MovieProps extends Movie {
  onClick: () => void;
}

export function Card(props: MovieProps) {
  return (
    <div className={styles.card} onClick={props.onClick}>
      <h1>{props.title}</h1>
      <p>Genre: {props.genre}</p>
      <img src={props.image}/>
    </div>
  );
}

export default Card;
