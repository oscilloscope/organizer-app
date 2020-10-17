import React from 'react';
import {connect} from 'react-redux';

export const TaskList = ({tasks, name}) => {
   console.log("TaskList.name:");
   console.log(name);
    
    return(<div>
        <h3>{name}</h3>
        {tasks.map(task=><div>{task.name}</div>)}
    </div>)

}


const mapStateToProps = (state, ownProps) => {
    let groupID = ownProps.id;
    
    
    console.log("state:");
    console.log(state)
    console.log("ownProps: ")
    console.log(ownProps)
    return{
        name: ownProps.name,
        id: groupID,
        tasks: state.tasks.filter(task => task.group === groupID)
    }
};

export const ConnectedTaskList = connect(mapStateToProps)(TaskList);