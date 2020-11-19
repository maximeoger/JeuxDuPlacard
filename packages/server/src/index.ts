import "reflect-metadata";
import { createConnection } from "./technical/typeorm/connexion";
import { User } from "./entity/User";

createConnection(error => console.log('ERROR', error)); // Todo: implement better error handler

