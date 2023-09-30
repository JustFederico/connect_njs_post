/*import express from 'express';
import filmsRouter from './routers/films';
import 'dotenv/config'; // importing library https://www.npmjs.com/package/dotenv
import pg from 'pg';



const app = express();
const { Pool } = pg;

app.use(express.json());
app.use ('api/films', filmsRouter);

*/
//two API routes for getting and adding countries
/*
app.get('/api/names', (req, res) => {
    res.json(countries);
  });
  */
  


//const pool = new Pool ()
// ({
//we will comment out everything because dotenv library is intelligent and will understand  . It will find .env file  
/*
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
port: process.env.PGPORT, */
//});


//console.log(process.env.PGUSER) //added line later and the terminal will say"undefined".njs Server cannot read environment properties we just set up
//we created nodejs from scratch. my scripts are missing. dotenv file cant be read. we need special package
//solution: Dotenv is a zero-dependency module that loads environment variables from a .env
//yes we need env var
/*const fetchData = async () => {
    try {
      const result = await pool.query('SELECT NOW()');
      console.log('Data retrieved:', result.rows);
    } catch (err) {
      console.error('Error retrieving data:', err);
    }
  };
  
  fetchData();
  
  const port = process.env.PORT || 8080;
  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  */
  import express from 'express';
  import filmsRouter from '../routers/films';
  import 'dotenv/config';
  import pg from 'pg';
  
  const app = express();
  const { Pool } = pg;
  
  app.use(express.json());
  app.use('/api/films', filmsRouter);
  
  const pool = new Pool();
  
  // ...
  
  // Define a route to get all users
  app.get('/api/users', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM users');
      res.json(rows);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // Define a route.... get one user by ID
  app.get('/api/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const { rows } = await pool.query('SELECT * FROM users WHERE id=$1', [id]);
      if (rows.length === 0) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(rows[0]);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
 
  
  const port = process.env.PORT || 8080;
  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  
