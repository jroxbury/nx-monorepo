import * as express from 'express';
import { Request, Response } from 'express';

import { getAllMovies, getMovieById } from './app/data';

const app = express();

app.get('/api/movies', (req:Request, res:Response) => {
  res.send(getAllMovies());
});

app.get('/api/movies/:id', (req:Request,res:Response) => {
  res.send(getMovieById(req.params.id));
})

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
