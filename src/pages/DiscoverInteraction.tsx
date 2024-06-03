import React, { useEffect, useState, Fragment, useRef } from 'react';
import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { FixedSizeList } from 'react-window';

interface MainPokemon {
    name: string;
    url: string;
}

const DiscoverInteraction = () => {
    const [query, setQuery] = useState<string>('');
    const [filterdata, setFilterData] = useState<MainPokemon[]>([]);
    const observer = useRef<IntersectionObserver | null>(null);
    const InfiniteDiv=useRef<HTMLDivElement | null>(null);

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

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            // `entries` is an array of IntersectionObserverEntry objects
            entries.forEach((entry) => {
                // `entry` is a single IntersectionObserverEntry object and if it is visible and has another page to load
                if (entry.isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            });
        }, {
            threshold: 1 // Trigger callback when the target element is fully visible
        });
    
        // const triggerElement = document.querySelector('.infinite-scroll-trigger');
        const triggerElement=InfiniteDiv.current;
        if (triggerElement && observer.current) {  //null check usually done in tsx
            // Observe the trigger element
            observer.current.observe(triggerElement);
        }
    
        return () => {
            if (observer.current) {
                // Cleanup the observer when the component unmounts
                observer.current.disconnect();
            }
        };
    }, [hasNextPage, fetchNextPage]);
    

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div>
            <input type='text' placeholder='Search' onChange={handleOnChange} className='m-4 border border-black' />
            <button type='button'>Search</button>

            <table className='border border-black w-full text-center'>
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>Name</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    {filterdata.map((item: MainPokemon, index: number) => {
                        const id = item.url.split("/")[6];
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{item.name}</td>
                                <td><Link to={`/pokemon/${id}`}>{item.url}</Link></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div ref={InfiniteDiv} className="infinite-scroll-trigger"></div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching data</p>}

           
        </div>
    );
}

export default DiscoverInteraction;