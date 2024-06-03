
import React, { useEffect, useMemo, useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';

interface OptionsType {
  value: string;
  label: string;
}

const Autocomplete = () => {
  const [query, setQuery] = useState<string>('');
  const [showInput,setShowInput]=useState<boolean>(false);
  const [popovermenu,setPopoverMenu]=useState<string>('');

  const options: OptionsType[] = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'blueberry', label: 'Blueberry' },
    { value: 'grapes', label: 'Grapes' },
    { value: 'pineapple', label: 'Pineapple' },
    { value: 'aubergine', label: 'Aubergine' },
    { value: 'broccoli', label: 'Broccoli' },
  ];

  const filtered=()=>{
    if (options) {
      const filtered = options.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      return filtered;
    }
  }

const filteredOptions=useMemo(()=>filtered(),[query]);

  const handleSelectChange = (value: string) => {
    setQuery(value);
    setPopoverMenu(value);
    setShowInput(!showInput);
  };

const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setQuery(e.target.value);  
}

  return (
    <div>
    <Popover.Root open={showInput} onOpenChange={setShowInput}>
      <Popover.Trigger className='border border-gray-300'>
           {popovermenu ? popovermenu : "Fruits"}
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
 
      </Popover.Content>
    </Popover.Root>
  </div>
  );
};

export default Autocomplete;