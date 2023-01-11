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
  db.query("select * from minicrm.lead_table INNER JOIN minicrm.lead_status on lead_status.status_id=lead_table.LeadStatus", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/statuses", (req: Request, res: Response) => {
  db.query("select * from minicrm.lead_status", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}); 

app.put('/update',(req: Request, res: Response)=>{
  const {id,name,phone,event_date,email,location,LeadStatus}=req.body;
try{
db.query('UPDATE lead_table SET name = ?, phone = ?,event_date = ?,email = ?,location = ?, LeadStatus=? WHERE id = ?'
  ,[name, phone,event_date,email,location,LeadStatus, id])

res.send({ message: 'User updated successfully' })}
catch(error){
  res.status(500).send({ message: 'Error updating user', error });
}
})


app.delete(`/delete/:id`,(req: Request, res: Response)=>{
  const id=req.params.id
  try{
    db.query('DELETE FROM lead_table WHERE ID=?',id)
res.send({ message: 'User deleted successfully' })
  }
  catch(error){
    res.status(500).send({ message: 'Error deleting user', error });
  }
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
