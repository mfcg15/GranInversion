import PersonCard from "./components/PersonCard";
import './App.css';

const App = ()  => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="contendor-cards">
        <PersonCard firstName = "Jane" lastName = "Doe" age = "45" hairColor = "Black"/>
        <PersonCard firstName = "John" lastName = "Smith" age = "88" hairColor = "Brown"/>
        <PersonCard firstName = "Millard" lastName = "Fillmore" age = "50" hairColor = "Brown"/>
        <PersonCard firstName = "Maria" lastName = "Smith" age = "62" hairColor = "Brown"/>
      </div>
    </div>
  );
}

export default App;
