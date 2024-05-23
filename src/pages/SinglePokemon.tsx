import axios from 'axios';
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'

interface type{
    name:string,
    url:string,
}
interface pokType{
    slot:number,
    type:type,
    
}
interface pokStats{
    base_stat:number,
    effort:number,
    stat:type,
}
interface pokabilities{
    ability:type,
    is_hidden:boolean,
    slot:number,
}
interface pokmoves{
    move:type,
    version_group_details:{
        level_learned_at:number,
        move_learn_method:type,
        version_group:type,
       }[]
}
interface pokshowdown{
   back_default:string,
   back_female:string,
   back_shiny:string,
   back_shiny_female:string,
   front_default:string,
   front_female:string,
   front_shiny:string,
   front_shiny_femalet:string,
}

const SinglePokemon = () => {
    const {pokid}=useParams<{pokid:string}>();
    const fetchSinglePokemon=async()=>{
        const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokid}`);
        const result=res.data;
        return result;
        console.log("single",result);
        
    }
    const {data,isError,isLoading}=useQuery(['singlepokemon',pokid],fetchSinglePokemon)

    if(isLoading){
        return <p>Loading</p>
     }
     if (isError || !data) {
        return <p>Error fetching data</p>; // Return an error message if fetch fails or data is empty
    }
    const sprites=data.sprites.other.showdown;
    
  return (
    <div>SinglePokemon id {pokid} and data id is  {data.id}
    <p className='text-pink-500 text-xl'>Abililties</p>
   {
        data.abilities.map((ability:pokabilities,index:number)=>(
            <div key={index}>
               <p>nmae: {ability.ability.name}</p>
               {/* <a href={ability.ability.url}>ff</a> */}
               <p>url: {ability.ability.url}</p>
               <p>Hidden: {ability.is_hidden.toString()}</p>
                <p>Slot:{ability.slot}</p>
            </div>
        ))
    } 

    <p className='text-pink-500 text-xl'>Sprites showdown</p>
    <img src={sprites.back_default !== null ? sprites.back_default : 'null'}/>
    <img src={sprites.back_female !== null ? sprites.back_female : 'null'} />
       <img src={sprites.back_shiny !== null ? sprites.back_shiny : 'null'}/>
            <img src={sprites.back_shiny_female !== null ? sprites.back_shiny_female : 'null'}/>
            <img src={sprites.front_default !== null ? sprites.front_default : 'null'}/>
            <img src={sprites.front_female !== null ? sprites.front_female : 'null'}/>
            <img src={sprites.front_shiny !== null ? sprites.front_shiny : 'null'}/>
            <img src={sprites.front_shiny_female !== null ? sprites.front_shiny_female : 'null'}/>

            <p className='text-pink-500 text-xl'>Stats</p>
            {data.stats.map((item:pokStats,index:number)=>(
                <div key={index}>
                   <p>Base stat:{item.base_stat}</p>
                   <p>Effort:{item.effort}</p> 
                   <p>Stat name{item.stat.name}</p> 
                    <p>Stat url{item.stat.url}</p>


                    </div>
            ))}

<p className='text-pink-500 text-xl'>Types</p>
            {data.types.map((item:pokType,index:number)=>(
                <div key={index}>
                   <p>Base stat:{item.slot}</p>
                   <p>Type name{item.type.name}</p> 
                    <p>Type url{item.type.url}</p>
                    </div>
            ))}

<p className='text-pink-500 text-xl'>Moves</p>

            {data.moves.splice(1,10).map((item:pokmoves,index:number)=>(
                <div key={index}>
                    <table className='border border-black w-full text-center'>
                <thead>
                   <tr>
                   <th>ID</th>
                    <th>Move name</th>
                    <th>Move url</th>
                   </tr>
                 </thead>   
                    <tbody>
                    <tr>
                    <td>{index+1}</td>
                    <td>{item.move.name}</td>   
                    <td>{item.move.url}</td> 
                    </tr>  
                    </tbody>     

                    </table>

                    <table className='border border-black w-full text-center'>
                      <thead>
                          <tr>
                          <th>Level name:</th>
                          <th>Move level name</th>
                          <th>Move level url</th>
                          <th>Versiongroup name</th>
                          <th>Versiongroup url</th>
                          </tr>

                       </thead>  
                    {item.version_group_details.map((level,index)=>(
                     
                          <tbody key={index}>
                          <tr>
                          <td>{level.level_learned_at}</td>   
                          <td>{level.move_learn_method.name}</td>   
                          <td>{level.move_learn_method.url}</td>   
                          <td>{level.version_group.name}</td>   
                          <td>{level.version_group.url}</td> 
                          </tr>  

                          </tbody>     
      
               
                    ))}
                          </table>
                   

                    </div>
            ))}

         

    </div>
  )
}

export default SinglePokemon