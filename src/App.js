import AddForm from "./Components/Form";
import Card from "./Components/Card/Card";
import { Button } from "antd";
import { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddForm tasks={tasks} setTasks={setTasks} className='form' />
      <Card tasks={tasks} setTasks={setTasks} />
      <br />
      <Button type="primary" danger onClick={() => setTasks([])}>
        {" "}
        Clear All{" "}
      </Button>
    </div>
  );
}

export default App;
