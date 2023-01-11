"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mysql_1 = __importDefault(require("mysql"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const db = mysql_1.default.createConnection({
    user: "root",
    host: "localhost",
    password: process.env.MYSQL_PASSWORD,
    database: "minicrm",
});
app.post("/create", (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const date = req.body.date;
    const email = req.body.email;
    const location = req.body.location;
    db.query("INSERT INTO lead_table(name,phone,event_date,email,location) VALUES(?,?,?,?,?)", [name, phone, date, email, location], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values inserted");
        }
    });
});
app.get("/events", (req, res) => {
    db.query("select * from minicrm.lead_table INNER JOIN minicrm.lead_status on lead_status.status_id=lead_table.LeadStatus", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});
app.put('/update', (req, res) => {
    const { id, name, phone, event_date, email, location } = req.body;
    try {
        db.query('UPDATE lead_table SET name = ?, phone = ?,event_date = ?,email = ?,location = ? WHERE id = ?', [name, phone, event_date, email, location, id]);
        res.send({ message: 'User updated successfully' });
    }
    catch (error) {
        res.status(500).send({ message: 'Error updating user', error });
    }
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
