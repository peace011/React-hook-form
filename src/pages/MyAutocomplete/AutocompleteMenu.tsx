import React from 'react'
import { Control, FieldPath, FieldValues,useController } from 'react-hook-form'
import * as  Autocomplete from './Autocomplete';
import { Grades } from './Grades';

interface FieldValuesType<TFieldValues extends FieldValues>{
    name:FieldPath<TFieldValues>;
    control:Control<TFieldValues>;
}

const AutocompleteMenu = <TFieldValues extends FieldValues>({name,control}:FieldValuesType<TFieldValues>)=>{
    const {field}=useController({
        name,
        control,    
    });
    
  return (
    <div>
        <Autocomplete.Root value={field.value}
         onValueChange={field.onChange }>
            <Autocomplete.Trigger
                  buttonFunction={(value)=>{
                         const grade=Grades.find((item)=>item.id.toString()===value);
                         if(!grade) return '';
                    return(
                       <> {grade.name}</>
                    )
                }         
                }
                />

        <Autocomplete.Content>
                <Autocomplete.Input/>
               
                        <Autocomplete.List>
                        {
                    Grades.map((item)=>(
                        <Autocomplete.Item key={item.id} keywords={[item.name]} value={item.id.toString()}>
                            <p>{item.name}</p>

                        </Autocomplete.Item>
                    ))
                }
                    </Autocomplete.List>

                  
               
            </Autocomplete.Content> 

        </Autocomplete.Root>
    </div>
  )
}

export default AutocompleteMenu





