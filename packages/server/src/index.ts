import "reflect-metadata";
import { createConnection } from "./technical/typeorm/connexion";
//import app from './app';
import express from 'express';
const port = 3002;

//createConnection( error => { throw new Error(error.message) });
const app = express();

app.get('/', (req, res) => res.send("coucou"));

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))

process.on('uncaughtException', function (err) {
  console.log(err);
}); 





