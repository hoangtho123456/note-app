import React from 'react';
import Task from './task';

const Tasks = ({tasks, onDelete, onToggleReminder}) => {
    return (
        <div className="relative">
            {tasks.map(item =>(
                <Task key={item.id} task={item} 
                    onDelete={()=>onDelete(item.id)}
                    onToggleReminder={onToggleReminder}/>
            ))}
        </div>
    );
}

export default Tasks;
