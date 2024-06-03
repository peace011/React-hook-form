import React from 'react'

const RefProps = (props) => {
    const {name,age}=props;
    const message = age ? `Age is ${age}` : 'Age is not provided';

    console.log(name, age);
    
  return (
    <div>
       <p>Name: {name}</p>
      <p>{message}</p>
    </div>
  )
}

export default RefProps