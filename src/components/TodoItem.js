import React from 'react';

const TodoItem = (props) => {
    const {id,title,completed} = props.todo;
   
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{completed ? "✔️":"❌"}</td>
            <td>
                <button className='waves-effect waves-light btn' onClick={ (e) =>props.onDelete(id)}>Delete</button>
            </td>
        </tr>
    );
};

export default TodoItem;