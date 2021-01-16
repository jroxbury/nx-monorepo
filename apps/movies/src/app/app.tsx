import React from 'react';

import styles from './app.module.scss';
import { Card } from '@monorepo/movies/ui';
export function App() {
  return (
    <div className={styles.app}>
       Hello, World!
       <Card/>
    </div>
  );
}

export default App;
