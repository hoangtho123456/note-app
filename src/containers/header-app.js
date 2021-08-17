import React from 'react';
import Button from '../components/button';

const HeaderApp = ({title, onShowAddTask, showAddTask}) => {
    // const onCLick = () => {
    //     console.log('click');
    // };
    
    return (
        <section className="py-3 flex flex-wrap items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold uppercase">{title}</h1>
            <div>
                <Button title={showAddTask?"Close":"Add"} onClick={onShowAddTask} 
                    valClass={showAddTask?"bg-red-600 text-white":"bg-green-600 text-white"}/>
            </div>
        </section>
    );
}

HeaderApp.defaultProps = {
    title: 'App'
}
export default HeaderApp;
