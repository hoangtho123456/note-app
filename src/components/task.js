import React from 'react';
import {FaTimes} from 'react-icons/fa';

const Task = ({task, onDelete, onToggleReminder}) => {
    let class_reminder = task.reminder?'border-solid border-green-500 border-l-8':null;
    return (
        <div className={ "px-3 md:px-4 py-2 mb-2 relative bg-gray-300 hover:bg-gray-400 cursor-pointer " + 
            class_reminder } onClick={() => onToggleReminder(task.id)}>
            <h3 className="text-xl">
                {task.text} 
                <FaTimes className="absolute top-4 right-3 hover:text-red-700"
                    onClick={onDelete}/>
            </h3>
            <p>{task.day}</p>
        </div>
    );
}

export default Task;
