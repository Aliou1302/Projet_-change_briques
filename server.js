// charger les configuration
import 'dotenv/config';

// Importation du projet
import express, { json } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
//import './baseDeDonnee/db.js';

//Création du server
const app = express();

//Ajout des meddleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(json());
app.use(express.static('public'));

//Démarrer le server
console.log("Le server est démarré: ");
console.log('http://localhost:' + process.env.PORT);
app.listen(process.env.PORT);


