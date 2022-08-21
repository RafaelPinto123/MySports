import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

function Pagination({ postsPerPage, totalPosts, paginate, pageact}){
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                    Mostrando <span className="font-medium">{Math.ceil(((postsPerPage * pageact)-postsPerPage)+1)}</span> de <span className="font-medium">{(Math.ceil(postsPerPage * pageact) > totalPosts ? totalPosts : Math.ceil(postsPerPage * pageact) )}</span> de{' '}
                    <span className="font-medium">{totalPosts}</span> resultados
                    </p>
                </div>
            <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    {(pageact !== 1 ? (<button onClick={() => paginate(Math.ceil(pageact-1))} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"> <span className="sr-only">Anterior</span> <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> </button>) : (''))}
                    {/* (pageact - 3 !== 0 ? pageact - 3,pageact + 2 : (pageact - 2 !== 0 ? pageact - 2,pageact + 3  : pageact-1,pageact + 4 )) */}
                {pageNumbers.slice((Math.ceil(pageact-3) >= 0 ? Math.ceil(pageact-3) : (Math.ceil(pageact-2) >= 0 ? Math.ceil(pageact-2)  : Math.ceil(pageact-1) )),(Math.ceil(pageact- 3) >= 0 ? Math.ceil(pageact+2) : (Math.ceil(pageact-2) >= 0 ? Math.ceil(pageact+3)  : Math.ceil(pageact+4) ))).map(number => (
                    (pageact === number ? (
                        <button
                        key={number}
                        className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    >
                        {number}
                    </button>
                    ) :( <button
                        onClick={() => paginate(number)}
                        key={number}
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    >
                        {number}
                    </button>
                    ))
                   
                ))}
                {(pageact !== pageNumbers.length ? (<button onClick={() => paginate(Math.ceil(pageact+1))} className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"> <span className="sr-only">Siguiente</span><ChevronRightIcon className="h-5 w-5" aria-hidden="true" /> </button>) : (''))}
                </nav>
            </div>
            </div>
        </div>
    )
}

export default Pagination;