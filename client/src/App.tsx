import "./App.css";
import Header from "./components/Header";
import LeadForm from "./components/LeadForm";
import ShowEvents from "./components/ShowEvents";
import {useState} from 'react'

function App() {
  const [showEvents,setShowEvents]=useState<boolean>(false)
  const [leadForm,setLeadForm]=useState<boolean>(false)
  return (
    <div className="App">
      <Header title="Mini Crm"/>
      <div className="ButtonsDiv">
      <button onClick={()=>{setLeadForm(prev=>!prev)
      setShowEvents(false)}}>Add New Event</button>
      <button onClick={()=>{setShowEvents(prev=>!prev)
      setLeadForm(false)}}> Show all events</button>
      </div>
      {leadForm&&<LeadForm/>}
      {showEvents&&<ShowEvents/>}
    </div>
  );
}

export default App;
