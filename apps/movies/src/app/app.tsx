import React, { useEffect, useState } from 'react';

import styles from './app.module.scss';
import { Card } from '@monorepo/movies/ui';

import { Route, useHistory } from 'react-router-dom';
import { MoviesFeatureMovieDetails } from '@monorepo/movies/feature-movie-details';
import { Movie } from '@monorepo/types';

export function App() {
  
  const history = useHistory();

  const [state, setState] = useState<{
    data: Movie[];
    loadingState: 'success' | 'error' | 'loading';
  }>({
    data: [],
    loadingState: 'success',
  });

  useEffect(() => {
    setState({
      ...state,
      loadingState: 'loading',
    });
    fetch('/api/movies')
      .then((x) => x.json())
      .then((res:Movie[]) => {
        setState({
          ...state,
          data: res,
          loadingState: 'success',
        });
      })
      .catch((err) => {
        setState({
          ...state,
          loadingState: 'error',
        });
      });
  }, []);


  return (
    <div className={styles.app} data-testid="app-container">
      <div className={styles.cardContainer}>

      {state.loadingState === 'loading'
            ? 'Loading...'
            : state.loadingState === 'error'
            ? '<div>Error retrieving data</div>'
            : state.data.map((props) => (
              <Card
              key={props.id}
              {...props}
              onClick={() => history.push(`/movie/${props.id}`)}
              />
              ))}

      </div>
      <Route
        path="/movie/:id"
        component={MoviesFeatureMovieDetails}
      />
    </div>
  );
}

export default App;
