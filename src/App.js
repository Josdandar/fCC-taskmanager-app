import "./App.css";
import freeCodeCampLogo from "./images/freecodecamp-logo.png"
import Task from "./components/Task"

function App() {
  return (
    <div className="task-manager-app">
      <div className="logo-container">
        <img 
        src={freeCodeCampLogo} 
        className="my-logo" 
        />
      </div>
      <div className="main-tasks-list">
        <h1>My homeworks</h1>
        <Task text="Learn React" />
      </div>
    </div>
  );
}

export default App;
