import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mysql from "mysql";
import cors from "cors";

dotenv.config();
const app: Express = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: process.env.MYSQL_PASSWORD,
  database: "minicrm",
});

app.post("/create", (req: Request, res: Response) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const date = req.body.date;
  const email = req.body.email;
  const location = req.body.location;

  db.query(
    "INSERT INTO lead_table(name,phone,event_date,email,location) VALUES(?,?,?,?,?)",
    [name, phone, date, email, location],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

app.get("/events", (req: Request, res: Response) => {
  db.query("SELECT * FROM lead_table", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put('/update',(req: Request, res: Response)=>{
  const id=req.body.id;
  db.query("UPDATE SET lead_table", (err,result)=>{
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
