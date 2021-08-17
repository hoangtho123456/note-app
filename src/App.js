import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import AddTask from './components/addTask';
import Tasks from './components/tasks';
import HeaderApp from './containers/header-app';
import AppFooter from './components/footer';
import About from './containers/about';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  /*"start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",*/
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  let addTask = async (task) => {
    const res = await fetch('https://note-app-fd812-default-rtdb.firebaseio.com/tasks.json',{
      method: 'POST',
      headers: {
          'Content-type':'application/json'
      },
      body: JSON.stringify(task)
    });
    const data = await res.json();
    const fullTaskInfo = {id:data.name,...task};
    setTasks([...tasks,fullTaskInfo]);
  }
  
  let deleteTask = async (id) => {
    const res = await fetch(`https://note-app-fd812-default-rtdb.firebaseio.com/tasks/${id}.json`,{
      method: 'DELETE',
      headers: {
        'Content-type':'application/json'
      }
    });
    setTasks(tasks.filter(item => item.id!==id));
  }

  let toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = {...taskToToggle,reminder:!taskToToggle.reminder};
    
    const res = await fetch(`https://note-app-fd812-default-rtdb.firebaseio.com/tasks/${id}.json`,{
        method: 'PATCH',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(updatedTask)
    }).then(res => res.json()).then(res => {
        setTasks(tasks.map(task => task.id===id?
            {...task, reminder: res.reminder}:task));
    });
  }

  let fetchTask = async (id) => {
    const res = await fetch(`https://note-app-fd812-default-rtdb.firebaseio.com/tasks/${id}.json`,{
        method: 'GET',
        headers: {
            'Content-type':'application/json'
        }
    });
    const data = await res.json();
    return data;
  }

  let fetchTasks = async () => {
    const res = await fetch('https://note-app-fd812-default-rtdb.firebaseio.com/tasks.json',{
        method: 'GET',
        headers: {
            'Content-type':'application/json'
        }
    });
    const data = await res.json();
    // console.log(Object.keys(data).map(key => data[key]));
    return data;
  }

  useEffect(()=>{
    const getTasks = async () => {
        const tasksFromServer = await fetchTasks();
        const taskArr = Object.keys(tasksFromServer).map(key => ({id:key,...tasksFromServer[key]}));
        setTasks(taskArr);
    };
    getTasks();
  },[]);

  return (
    <BrowserRouter>
      <Header/>
      <div className="mt-8 py-6 max-w-2xl px-4 m-auto border-solid border border-green-500">
        <HeaderApp onShowAddTask={()=>setShowAddTask(!showAddTask)}
          showAddTask={showAddTask}/>
        <Route path='/' exact render={props => (
          <>
            {showAddTask && (<AddTask onAddTask={addTask}/>)}
            {tasks.length > 0?
            (<Tasks tasks={tasks} onDelete={deleteTask} 
              onToggleReminder={toggleReminder}/>):"No Task Found!!!"} 
          </>
        )}/>
        <Route path='/about' component={About}/>
        <AppFooter/>
      </div>
    </BrowserRouter>
  );
}

export default App;
