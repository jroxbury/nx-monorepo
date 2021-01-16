import React from 'react';

import styles from './card.module.scss';
import { Movie } from "@monorepo/types";

export function Card(props: Movie) {
  return (
    <div className={styles.card}>
      <h1>{props.title}</h1>
      <p>Year: {props.year}</p>
      <p>Length: {props.runtime}</p>
      <p>Genre: {props.genre}</p>
      <img src={props.image}/>
    </div>
  );
}

export default Card;
