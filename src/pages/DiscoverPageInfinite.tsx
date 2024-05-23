import React,{useEffect, useState,Fragment} from 'react'
import axios from 'axios'
import { useInfiniteQuery, useQuery } from 'react-query'
import { Link } from 'react-router-dom'

interface MainPokemon{
    name:string,
    url:string,
}

const DiscoverPage = () => {
const [query,setQuery]=useState<string>('');
const [filterdata,setFilterData]=useState<MainPokemon[]>([]);

    const fetchPokemon=async()=>{
        try{
            const res=await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0");
            const result=res.data.results;
            return result;
        }
        catch(error){
            console.error(error);
        }
    }
  
    // const {isLoading,isError,data}=useQuery('pokemon',fetchPokemon);
    const fetchInfiniteData=({pageParam=0})=>{
       return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${pageParam}`);
    }
    const {isLoading,isError,data,hasNextPage,fetchNextPage,isFetching,isFetchingNextPage}=useInfiniteQuery('pokemon',fetchInfiniteData,{
        getNextPageParam(_lastpage,pages){
            const nextOffset = pages.length * 10;
            return nextOffset < 130 ? nextOffset : undefined;
        }
    });

    useEffect(() => {
        if (data) {
            const allResults=data.pages.flatMap(group=>group.data.results); //combines arrays of arrays in single array roup also array and results also array so 
            
         const filtered = allResults.filter((item: MainPokemon) =>
      item && item.name.toLowerCase().includes(query.toLowerCase())
    );
          const timeoutId = setTimeout(() => {
            setFilterData(filtered);
          }, 3000);
    
          return () => clearTimeout(timeoutId);
        }
      }, [query, data]);

 if(isLoading){
    return <p>Loading</p>
 }
 if (isError || !data) {
    return <p>Error fetching data</p>; 
}

const handleonChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setQuery(e.target.value);
}

  return (
        <div>
            <input type='text' placeholder='Search' onChange={handleonChange} className='m-4 border border-black'/>
            <button type='button' >Search</button>
          
              <table  className='border border-black w-full text-center'>
                           <thead>
                           <tr>
                                <th>S.N</th>
                                <th>Name</th>
                                <th>URL</th>
                            </tr>
                           </thead>

             {
                filterdata.map((item:MainPokemon, index:number) => {
                    const id = item.url.split("/")[6]; 
                    return (
                        <tbody  key={id}>   
                            <tr>
                                <td>{id}</td>
                                <td>{item.name}</td>
                                <td><Link to={`/pokemon/${id}`}>{item.url}</Link></td>
                            </tr>
                        </tbody>
                          
                    );
                })
            }
                        </table>
                        <button type='button' disabled={!hasNextPage} onClick={()=>fetchNextPage()}>Load more</button>
                        <div className="d">{isFetching && !isFetchingNextPage ? 'Fetching...' :null}</div>

        </div>
    );
    
  
}

export default DiscoverPage



   {/* {
            data.pages.map((group,i)=>(
                <Fragment key={i}> 
                    {group.data.results.map((item:MainPokemon)=>{
                        const id=item.url.split('/')[6];
                        return(
                            <tbody key={id}>   
                            <tr>
                                <td>{id}</td>
                                <td>{item.name}</td>
                                <td><Link to={`/pokemon/${id}`}>{item.url}</Link></td>
                            </tr>
                        </tbody>
                        )              
                })}
                </Fragment>
            ))
            } */}