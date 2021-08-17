import React, { useState } from 'react';

const AddTask = ({onAddTask}) => {
    const [taskName, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(!taskName) {
            alert('Please add task name');
            return;
        }else if(!day) {
            alert('Please add Deathline');
            return;
        }
        const text = taskName;
        onAddTask({text, day, reminder});

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className="w-full mx-auto mb-7 max-w-4xl shadow-md bg-gray-200 hover:shadow-lg transition duration-300"
            onSubmit={onSubmit}>
            <div className="py-6 px-5">
                <div className="mb-6">
                    <label className="mr-4 text-gray-700 font-bold block mb-2" htmlFor="name">Task</label>
                    <input type="text" 
                        className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" 
                        placeholder="Your Task"
                        value={taskName}
                        onChange={(e)=>setText(e.target.value)}/>
                </div>
                <div className="mb-6">
                    <label className="mr-4 text-gray-700 font-bold block mb-2" htmlFor="name">Date and Time</label>
                    <input type="text" 
                        className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" 
                        placeholder="Date and Time"
                        value={day}
                        onChange={(e)=>setDay(e.target.value)}/>
                </div>
                <div className="mb-6">
                    <label className="mr-4 text-gray-700 font-bold inline-block mb-2" htmlFor="name">Remind</label>
                    <input type="checkbox"
                        checked={reminder}
                        value={reminder}
                        onChange={(e)=>setReminder(e.currentTarget.checked)}/>
                </div>
                <input type="submit" className="w-full text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300" value="Add Task"/>
            </div>    
        </form>
    );
}

export default AddTask;
