import React from 'react';

import styles from './app.module.scss';
import { Card } from '@monorepo/movies/ui';

import { Route, Link, useHistory } from 'react-router-dom';
import { MoviesFeatureMovieDetails } from '@monorepo/movies/feature-movie-details';

export function App() {
  const props = {
    id: '1',
    title: 'The Rock',
    year: '1996',
    genre: 'Action/Thriller',
    runtime: '2h 16m',
    image: '/assets/the-rock.jpeg',
  };
  const history = useHistory();

  return (
    <div className={styles.app}>
      Hello, World!
      <Card
        {...props}
        onClick={() => history.push(`/movie/${props.id}`)}
      />
      <Route
        path="/movie/:id"
        component={MoviesFeatureMovieDetails}
      />
    </div>
  );
}

export default App;
