import React from 'react';

import styles from './app.module.scss';
import { Card } from '@monorepo/movies/ui';

import { Route, Link } from 'react-router-dom';

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
  return (
    <div className={styles.app}>
      Hello, World!
      <Card {...props} />
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/feature-movie-details">MoviesFeatureMovieDetails</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/feature-movie-details"
        component={MoviesFeatureMovieDetails}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </div>
  );
}

export default App;
