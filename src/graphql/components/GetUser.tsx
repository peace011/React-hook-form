import React, { useEffect, useState } from 'react'
import {useQuery,gql} from '@apollo/client';
import { LOAD_USERS } from '../elements/Queries';

const GetUser = () => {
  const { error, loading, data } = useQuery(LOAD_USERS, {
    variables: { pageNumber: 1, rowPerPage: 10, search: "" }
  });
  const [users,setUsers]=useState([]);

  useEffect(()=>{
    if (data){
    console.log(data);
    console.log(data.getAllUsers[0]);

    setUsers(data.getAllUsers);

    }
    
  },[data]);

  return (
    <div>
      {users.map((val)=>{
        return <p key={val.id}>{val.userName}</p>
      })}
    </div>
  )
}

export default GetUser