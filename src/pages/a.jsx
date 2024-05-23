// import React, { useEffect, useState, Fragment } from 'react';
// import axios from 'axios';
// import { useInfiniteQuery } from 'react-query';
// import { Link } from 'react-router-dom';

// interface MainPokemon {
//     name: string;
//     url: string;
// }

// const DiscoverPage = () => {
//     const [query, setQuery] = useState<string>('');
//     const [filterData, setFilterData] = useState<MainPokemon[]>([]);

//     const fetchInfiniteData = ({ pageParam = 0 }) => {
//         return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${pageParam}`);
//     };

//     const {
//         isLoading,
//         isError,
//         data,
//         hasNextPage,
//         fetchNextPage,
//         isFetching,
//         isFetchingNextPage,
//     } = useInfiniteQuery('pokemon', fetchInfiniteData, {
//         getNextPageParam: (lastPage, pages) => {
//             const nextOffset = pages.length * 10;
//             return nextOffset < 130 ? nextOffset : undefined;
//         },
//     });

//     useEffect(() => {
//         if (data) {
//             const allResults = data.pages.flatMap((group) => group.data.results);
//             const filtered = allResults.filter((item: MainPokemon) =>
//                 item && item.name.toLowerCase().includes(query.toLowerCase())
//             );
//             setFilterData(filtered);
//         }
//     }, [query, data]);

//     if (isLoading) {
//         return <p>Loading</p>;
//     }
//     if (isError || !data) {
//         return <p>Error fetching data</p>;
//     }

//     const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setQuery(e.target.value);
//     };

//     return (
//         <div>
//             <input
//                 type='text'
//                 placeholder='Search'
//                 onChange={handleOnChange}
//                 className='m-4 border border-black'
//             />
//             <table className='border border-black w-full text-center'>
//                 <thead>
//                     <tr>
//                         <th>S.N</th>
//                         <th>Name</th>
//                         <th>URL</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filterData.map((item: MainPokemon, index: number) => {
//                         const id = item.url.split('/')[6];
//                         return (
//                             <tr key={id}>
//                                 <td>{id}</td>
//                                 <td>{item.name}</td>
//                                 <td><Link to={`/pokemon/${id}`}>{item.url}</Link></td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>
//             <button
//                 type='button'
//                 disabled={!hasNextPage || isFetchingNextPage}
//                 onClick={() => fetchNextPage()}
//             >
//                 {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'No More Data'}
//             </button>
//             <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
//         </div>
//     );
// };

// export default DiscoverPage;
