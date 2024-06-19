import React, { useReducer, useState } from 'react'
import AddTask from './Alter';

const TodoList = () => {
    const [input, setInput]=useState('');
    const initialTasks = [
        { id: 0, text: 'Visit Kafka Museum', done: true },
        { id: 1, text: 'Watch a puppet show', done: false },
        { id: 2, text: 'Lennon Wall pic', done: true }
      ];
    const reducer=(state,action)=>{  //action value can be any string,number so action.id or action.text can be done incase only id is passed instead of delid
        switch(action.type){
            case 'added':{
               return [...state,{
                id:state.length,
                text:action.text,
                done:false,
               }];
            }
            case 'deleted':{
                const del=state.filter((item)=>item.id===action.delid? !action.delid: item) ;  //action.id if id is only passed
                return del;
            }
  
            }
            throw Error('Unknown action: ' + action.type);
        }
    
    const [state,dispatch]=useReducer(reducer,initialTasks);
    const handleAddtask=(text)=>{
        dispatch({type:'added',text:text});
    }
    const handleDelete=(id)=>{        
        dispatch({type:'deleted',delid:id})
    }
  return (
    <div>
       <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
       <button onClick={()=>handleAddtask(input)}>Add</button>
       {state.map((item)=>(
        <div key={item.id}>
       <p className={`${item.done?' line-through': 'none'}`}> {item.id} {item.text}</p>
       <button onClick={()=>handleDelete(item.id)}>Delete</button>
       
        </div>
       ))}
        
    </div>
  )
}

export default TodoList