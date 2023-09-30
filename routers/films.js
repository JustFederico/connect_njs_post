import express from 'express';
const filmsRouter = express.Router();
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool();

filmsRouter.get("/", async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});

filmsRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const { rows } = await pool.query('SELECT * FROM users WHERE id=$1', [id]);
    res.json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default filmsRouter;



/*const filmsRouter = express.Router();
import pg from 'pg';
const { Pool } = pg;

const pool = new Pool();

filmsRouter.get("/", async (req, res) => {
    try {
        const {rows} = await pool.query('SELECT * FROM users');
        res.json(rows)

    } catch(err){
        res.status(500).json(err)
    }
})

filmsRouter.get("/:id", async (req, res) => {

    const id = req.params.id;
    try {
        const {rows} = await pool.query(SELECT * FROM users WHERE id=${id});
        res.json(rows)

    } catch(err){
        res.status(500).json(err)
    }
})

export default filmsRouter;
*/