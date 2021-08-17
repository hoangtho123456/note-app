import React from 'react';
import Button from '../components/button';
import { useLocation } from 'react-router-dom';
const HeaderApp = ({title, onShowAddTask, showAddTask}) => {
    const location = useLocation();
    
    return (
        <section className="py-3 flex flex-wrap items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold uppercase">{title}</h1>
            {location.pathname==='/' && (
                <div>
                    <Button title={showAddTask?"Close":"Add"} onClick={onShowAddTask} 
                        valClass={showAddTask?"bg-red-600 text-white":"bg-green-600 text-white"}/>
                </div>
            )}
        </section>
    );
}

HeaderApp.defaultProps = {
    title: 'App'
}
export default HeaderApp;
