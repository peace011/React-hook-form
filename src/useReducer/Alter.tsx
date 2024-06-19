import React from 'react'

const Alter = () => {
  const reducer = (state, action) => {
    const actions = {
      TOGGLE: () => !state,
      INCREMENT: () => state + 1,
      DECREMENT: () => state - 1,
      // Add more actions as needed  //using key method and without using swich case
    };
  
    // Check if the action type exists in actions object
    if (actions[action.type]) {
      return actions[action.type]();
    } else {
      // Return unchanged state if action type is not recognized
      return state;
    }
  };
  return (
    <div>Alter</div>
  )
}

export default Alter