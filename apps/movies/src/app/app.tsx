import React from 'react';

import styles from './app.module.scss';
import { Card } from '@monorepo/movies/ui';
export function App() {
  const props = {
        "id":"1",
        "title":"The Rock",
        "year":"1996",
        "genre":"Action/Thriller",
        "runtime":"2h 16m",
        "image":"/assets/the-rock.jpeg"
  };
  return (
    <div className={styles.app}>
       Hello, World!
       <Card {...props}/>
    </div>
  );
}

export default App;
