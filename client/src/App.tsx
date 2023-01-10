import "./App.css";
import Header from "./Header";
import LeadForm from "./components/LeadForm";

function App() {
  return (
    <div className="App">
      <Header title="Hello World" color="red" />
      
      <LeadForm/>
    </div>
  );
}

export default App;
