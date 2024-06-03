// import React, { useRef, useEffect } from 'react';

// // Child component
// const ChildComponent = React.forwardRef((props, ref) => {
//   return <input ref={ref} />;
// });

// // Parent component
// const ParentComponent = () => {
//   const inputRef = useRef();

//   useEffect(() => {
//     // Focus on the input field when the component mounts
//     inputRef.current.focus();
    
//   }, []);

//   console.log("parent",inputRef.current);


//   return <ChildComponent ref={inputRef} />;
// };

// export default ParentComponent;
import React from 'react'
import RefProps from './RefProps';

const ref = () => {
  // const  obj={name:'John'};
  // const {name,age=30}=obj;
  // console.log(name,age);
  
  return (
    <div>
<RefProps name='John'/>
    </div>
  )
}

export default ref