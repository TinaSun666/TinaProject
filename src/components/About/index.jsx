import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import React, {useState} from 'react';

function Todo(){
    const [list, setList]= useState([]);
    const [input, setInput]= useState("");

    const addTodo=(todo)=>{
        const newTodo={
            id:Math.random(),
            todo:todo,
        };

        console.log(todo);

        setList([...list, newTodo]);

        setInput("");
    };


    const deleteTodo = (id)=>{
        const newList = list.filter((todo)=> todo.id !== id);

        setList(newList);
    }

    return (
        <div>
            
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
            <button className="addButton" onClick = {( ) => addTodo(input)}>Add</button>

            <ul>
                {list.map((todo)=>(
                    <li key={todo.id}>
                        {todo.todo}
                        
                        {/* &times; ---- delete sign */}
                        <button className="detButton" onClick={()=> deleteTodo(todo.id)}>&times;</button>
                    </li>
                ))}
            </ul>

        </div>
    );
}

const About = () => {
    return (
    <div className="back">
        <h1 className="title"> 
            <AnimatedLetters strArray={"Todo List".split('')} startIdx={1} />
               
        </h1>
        <Loader type="line-scale" color="#fed002" width={500} />

        <div className="todo">
            <Todo />
        </div>
    </div> 
    );
}

export default About;