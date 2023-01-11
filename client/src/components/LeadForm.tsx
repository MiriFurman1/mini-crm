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
    axios
      .post("http://localhost:8000/create", {
        name: name,
        phone: phone,
        date: date,
        email: email,
        location: location,
      })
      .then(() => {
        console.log("success");
        setName("");
        setPhone("");
        setDate("");
        setEmail("");
        setLocation("");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="LeadForm">
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label>Phone:</label>
      <input
        type="number"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <label>Event date:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label>Location:</label>
      <input
        type="text"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      />
      <button onClick={addLead}>Submit</button>
    </div>
  );
}
