import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "../styles/ShowEvents.css"
export default function ShowEvents() {
  const [eventsList, setEventsList] = useState<any[]>([]);

  const getEvents = () => {


    axios.get("http://localhost:8000/events").then((response) => {
      console.log(response);
      setEventsList(response.data);
    });
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="ShowEvents">
      {eventsList.map((val, key) => {
        console.log(val.name);

        return <div className="EventCard">
            <p> {val.id}  </p>
            <p>{val.name}</p>
            <p>{val.event_date}</p>
            <button>Edit Lead</button>
            </div>;
      })}
    </div>
  );
}
