import React from "react";
import { useState } from "react";
import "../styles/LeadForm.css";
import axios from "axios";

export default function LeadForm() {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const addLead = () => {


    axios.post("http://localhost:8000/create", {
      name: name,
      phone: phone,
      date: date,
      email: email,
      location: location,
    }).then(()=>{
      console.log("success");
    })
  };

  return (
    <div className="LeadForm">

        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Phone:</label>
        <input
          type="number"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <label>Event date:</label>
        <input
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Location:</label>
        <input
          type="text"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <button onClick={addLead}>Submit</button>

    </div>
  );
}
