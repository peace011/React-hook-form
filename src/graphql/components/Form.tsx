import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { CREATE_USER_MUTATION } from '../elements/Mutations';

const Form = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const [loginUser,{error}]=useMutation(CREATE_USER_MUTATION);

    const addUser=()=>{
        loginUser({
            variables: {
                loginInput: {
                    password: password,
                    rememberMe: false,
                    userName: username
                }
            }
        }).then(response => {
            console.log('User created:', response.data);
        }).catch(err => {
            console.error('Error creating user:', err);
        });
    }

    if(error){
        console.log(error);
        
    }
  return (
    <div>
        <input type='text' placeholder='username'
        onChange={(e)=>setUsername(e.target.value)}/>

<input type='text' placeholder='passwotf'
        onChange={(e)=>setPassword(e.target.value)}/>

        <button onClick={addUser}>Create user</button>
    </div>
  )
}

export default Form