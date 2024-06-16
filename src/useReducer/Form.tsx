import React, { useReducer } from 'react'

const Form = () => {
    const reducer=(state,action)=>{
        switch(action.type){
            case 'increase_age':{
               return {...state,age:state.age+1};
            }
            case 'change_name':{
                return {...state,name:action.nextName};

            }
            throw Error('Unknown action: ' + action.type);
        }
    }
    const initial={name:'puja',age:0};
    const [state,dispatch]=useReducer(reducer,initial);
  return (
    <div>
       <p>Name: {state.name}</p>
      <p>Age: {state.age}</p>
      <button onClick={() => dispatch({ type: 'increase_age' })}>Increase Age</button>
      <input type='text'  value={state.name} onChange={(e) => dispatch({ type: 'change_name', nextName:e.target.value })}/>
    </div>
  )
}

export default Form