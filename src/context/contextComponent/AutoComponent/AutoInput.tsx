import React, { useContext,Dispatch,ReactNode,SetStateAction } from 'react'
import * as Popover from '@radix-ui/react-popover';
import { AutoContext } from './AutoState';

const AutoInput = () => {
    const {showInput,setShowInput,popoverMenu,setPopoverMenu,query,setQuery,filteredOptions,handleSelectChange}=useContext(AutoContext);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
      };
  return (
    <div>
         <Popover.Root open={showInput} onOpenChange={setShowInput}>
      <Popover.Trigger className='border border-gray-300'>
           {popoverMenu ? popoverMenu : "Fruits"}
      </Popover.Trigger>
      <Popover.Content
        side="right"
        align="start"
      >
      
        <div className="flex border border-gray-300 justify-center items-center px-2">
           <input type='text' value={query} onChange={handleChange} placeholder='input here' className='p-2'/>

        </div>
             
              {filteredOptions && filteredOptions.map((item)=>(
          <div key={item.value}>
          <p onClick={()=>handleSelectChange(item.label)}>
            {item.label}
            </p>

          </div>
        ))} 

{/* {children} */}
 
      </Popover.Content>
    </Popover.Root>
        
        
        </div>
  )
}

export default AutoInput