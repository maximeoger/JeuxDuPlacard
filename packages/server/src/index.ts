import "reflect-metadata";
import { createConnection } from "./technical/typeorm/connexion";
import app from './app';

const port = 3002;

createConnection( error => { throw new Error(error.message) })
.catch(error => console.log(error));

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))





