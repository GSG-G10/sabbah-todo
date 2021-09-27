import './App.css';
import 'antd/dist/antd.css';
import AddInput from './Components/Input';
import AddForm from './Components/Form';
import  Card  from './Components/Card/Card';

import {Button } from 'antd'

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddForm />
      <Card />
      <Button type="primary" danger > Clear </Button>
    </div>
  );
}

export default App;
