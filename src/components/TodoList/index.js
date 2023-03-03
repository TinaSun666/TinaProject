import './index.scss';
import React, {useState} from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';


// todolist function
function Todo(){

    //create two state variables, one is to store the list 
    // and the other will track what we enter into the box
    const [list, setList]= useState([]);
    const [input, setInput]= useState("");
    
    //
    const addTodo=(todo)=>{
        const newTodo={
            //newTodo will have an id with random number and passed in to the addtodo function 
            id:Math.random(),
            todo:todo,
        };

        console.log(todo);
        
        //add tnewodo to the list
        // these three dots right here to indicate those existing elements
        setList([...list, newTodo]);

        // clear input box
        setInput("");
    };

    // delete button function
    //filter will check each todo if the id is not equal the one we want to remove, and will create a neww list
    const deleteTodo = (id)=>{
        const newList = list.filter((todo)=> todo.id !== id);
        setList(newList);
    }

    return (
        <div>
            
            {/* onChange will listen for any characters that are typed in and will set the value of input box */}
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}></input>

            {/* add this button to trigger addtodo function */}
            <button className="addButton" onClick = {( ) => addTodo(input)}>Add</button>

            <div className="listbox">
                <ul>
                    {list.map((todo)=>(
                        <li key={todo.id}> 
                        {todo.todo}
                        {/* &times; ---- delete sign */}
                        <button className="detButton" onClick={()=> deleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}
const TodoList = () => {
    return (
    <div className="back">
        <h1 className="title"> 
            <AnimatedLetters strArray={"Todo List".split('')} startIdx={1} />
               
        </h1>
        <div className="todo">
            <Todo />
        </div> 
    </div> 
    );
}

export default TodoList;