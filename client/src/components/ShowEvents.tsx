import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "../styles/ShowEvents.css";
export default function ShowEvents() {
  const [eventsList, setEventsList] = useState<any[]>([]);
  const [showEventsList,setShowEventsList]=useState<boolean>(true)
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [id, setId] = useState<number>(0);
  const [status, setStatus] = useState<string>("");

  const getEvents = () => {
    axios.get("http://localhost:8000/events").then((response) => {
      setEventsList(response.data);
    });
  };

  useEffect(() => {
    getEvents();
  }, []);

  const handleEditClick = (val: any) => {
    setShowEventsList(false)
    setName(val.name)
    setPhone(val.phone)
    setDate(val.event_date)
    setEmail(val.email)
    setLocation(val.location)
    setId(val.id)
    setStatus(val.status)
  };

  const handleSubmitEdit=()=>{
    axios.put("http://localhost:8000/update",{
      id:id,
      name:name,
      phone:phone,
      event_date:date,
      email:email,
      location:location
    })
    .then((response)=>{
      setShowEventsList(true)
    })

    
  }


  return (
    <div className="ShowEvents">
      {showEventsList&&eventsList.map((val, key) => {
        return (
          <div className="EventCard">
            <p> {val.id} </p>
            <p>{val.name}</p>
            <p>{val.event_date}</p>
            <p>{val.status_name}</p>
            <button
              onClick={() => {
                handleEditClick(val);
              }}
            >
              Edit Lead
            </button>
          </div>
        );
      })}
      {!showEventsList&&<div className="EditLead">
        
        <h2>Edit Lead</h2>
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
        <div className="EditButtons">
        <button onClick={()=>{setShowEventsList(true)}}>Cancel</button>
        <button>Delete</button>
        <button onClick={handleSubmitEdit}>Submit</button>
        </div>
      </div>
      }
    </div>
  );
}
