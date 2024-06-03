import React, { useEffect, useState, Fragment, useRef } from 'react';
import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

interface MainPokemon {
    name: string;
    url: string;
}

const DiscoverPage = () => {
    const [query, setQuery] = useState<string>('');
    const [filterdata, setFilterData] = useState<MainPokemon[]>([]);

    const fetchInfiniteData = async({ pageParam = 0 }: { pageParam?: number }) => {
        return await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pageParam}`);
    };

    const { isLoading, isError, data, hasNextPage, fetchNextPage } = useInfiniteQuery('pokemon',fetchInfiniteData, {
        getNextPageParam(lastPage, pages) {
            const nextOffset = pages.length * 20;
            return nextOffset < 1302 ? nextOffset : undefined;
        }
    });

    useEffect(() => {
        if (data) {
            const allResults = data.pages.flatMap(group => group.data.results);
            const filtered = allResults.filter((item: MainPokemon) =>
                item && item.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilterData(filtered);
        }
    }, [query, data]);
    

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };
    
    const itemCount = hasNextPage ? filterdata.length + 1 : filterdata.length;
    const loadMoreItems = isLoading ? () => {} : fetchNextPage;
    const isItemLoaded = (index: number) => !hasNextPage || index < filterdata.length;

    const Row=({index,style}:{index:number,style:React.CSSProperties})=>{
        if(!isItemLoaded(index)){
            return <div style={style}> Loading...</div>
        }
// console.log(filterdata.length);
// console.log(index);

        const item=filterdata[index];
        const id=item.url.split('/')[6];
        return(
                <div style={style}> 
                     {/* <p>{id}</p>
                       <p>{item.name}</p> */}
                       <p><Link to={`/pokemon/${id}`}>{item.url}</Link></p>
                </div>
        )

    }



    return (
        <div>
            <input type='text' placeholder='Search' onChange={handleOnChange} className='m-4 border border-black' />
            <button type='button'>Search</button>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching data</p>}
          
            <InfiniteLoader
                isItemLoaded={isItemLoaded}
                itemCount={itemCount}
                loadMoreItems={loadMoreItems}>
                    {({onItemsRendered,ref})=>(
                        <List
                        height={600}
                        itemCount={itemCount}
                        itemSize={50}
                        onItemsRendered={onItemsRendered}
                        ref={ref}
                        width={'100%'}
                        >
                            {Row}
                        </List>
                    )}
            </InfiniteLoader>
  
        </div>
    );
}

export default DiscoverPage;

