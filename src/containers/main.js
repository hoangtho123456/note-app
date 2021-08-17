// import { useEffect, useState } from 'react';
// import AddTask from '../components/addTask';
// import Tasks from '../components/tasks';
// import HeaderApp from './header-app';

// // [
// //     {
// //         id: 1,
// //         text: 'Doctor Appointment',
// //         day: 'Feb 5th 3:15pm',
// //         reminder: true
// //     },
// //     {
// //         id: 2,
// //         text: 'Meeting Project',
// //         day: 'Feb 7th 7:15am',
// //         reminder: false
// //     },
// //     {
// //         id: 3,
// //         text: 'Food Shopping',
// //         day: 'Feb 19th 12:35am',
// //         reminder: false
// //     },
// //     {
// //         id: 4,
// //         text: 'Doctor App',
// //         day: 'Feb 21th 9:20pm',
// //         reminder: true
// //     },
// //     {
// //         id: 5,
// //         text: 'Training',
// //         day: 'Feb 5th 14:15pm',
// //         reminder: true
// //     },
// //     {
// //         id: 6,
// //         text: 'Meeting customer',
// //         day: 'April 28th 10:15pm',
// //         reminder: false
// //     },
// // ]

// const Main = () => {
//     // const [tasks, setTasks] = useState([]);

//     // let addTask = async (task) => {
//     //     const res = await fetch('https://note-app-fd812-default-rtdb.firebaseio.com/tasks.json',{
//     //         method: 'POST',
//     //         headers: {
//     //             'Content-type':'application/json'
//     //         },
//     //         body: JSON.stringify(task)
//     //     });
//     //     const data = await res.json();
//     //     const fullTaskInfo = {id:data.name,...task};
//     //     setTasks([...tasks,fullTaskInfo]);
//     // }
    
//     // let deleteTask = async (id) => {
//     //     const res = await fetch(`https://note-app-fd812-default-rtdb.firebaseio.com/tasks/${id}.json`,{
//     //         method: 'DELETE',
//     //         headers: {
//     //             'Content-type':'application/json'
//     //         }
//     //     });
//     //     setTasks(tasks.filter(item => item.id!==id));
//     // }

//     // let toggleReminder = async (id) => {
//     //     const taskToToggle = await fetchTask(id);
//     //     const updatedTask = {...taskToToggle,reminder:!taskToToggle.reminder};
        
//     //     const res = await fetch(`https://note-app-fd812-default-rtdb.firebaseio.com/tasks/${id}.json`,{
//     //         method: 'PATCH',
//     //         headers: {
//     //             'Content-type':'application/json'
//     //         },
//     //         body: JSON.stringify(updatedTask)
//     //     }).then(res => res.json()).then(res => {
//     //         setTasks(tasks.map(task => task.id===id?
//     //             {...task, reminder: res.reminder}:task));
//     //     });
//     // }

//     // let fetchTask = async (id) => {
//     //     const res = await fetch(`https://note-app-fd812-default-rtdb.firebaseio.com/tasks/${id}.json`,{
//     //         method: 'GET',
//     //         headers: {
//     //             'Content-type':'application/json'
//     //         }
//     //     });
//     //     const data = await res.json();
//     //     return data;
//     // }

//     // let fetchTasks = async () => {
//     //     const res = await fetch('https://note-app-fd812-default-rtdb.firebaseio.com/tasks.json',{
//     //         method: 'GET',
//     //         headers: {
//     //             'Content-type':'application/json'
//     //         }
//     //     });
//     //     const data = await res.json();
//     //     // console.log(Object.keys(data).map(key => data[key]));
//     //     return data;
//     // }

//     // useEffect(()=>{
//     //     const getTasks = async () => {
//     //         const tasksFromServer = await fetchTasks();
//     //         const taskArr = Object.keys(tasksFromServer).map(key => ({id:key,...tasksFromServer[key]}));
//     //         setTasks(taskArr);
//     //     };
//     //     getTasks();
//     // },[]);

//     return (
//         <div className="mt-8 py-6 max-w-2xl px-4 m-auto border-solid border border-green-500">
//             <HeaderApp />
//             <AddTask onAddTask={addTask}/>
//             {tasks.length > 0?
//             (<Tasks tasks={tasks} onDelete={deleteTask} 
//                 onToggleReminder={toggleReminder}/>):"No Task Found!!!"}
//         </div>
//     );
// }

// export default Main;
