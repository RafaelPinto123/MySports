import React, { useEffect, useState } from 'react';
import {videosfootball,Exeapi,Loadingpage,Pagination} from '../apipoint';
  
function BodyMulti() {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12);
  useEffect(() => {
    Exeapi(setVideos,videosfootball);
  },[]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = videos.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Videos</h2>
        {videos !== null ? (
          <div>
            <div className='border-b'><Pagination postsPerPage={postsPerPage} totalPosts={videos.length} paginate={paginate} pageact={currentPage}/></div>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {currentPosts.map((product, index) => {
                  return(
                  <div key={index} className="group relative">
                    <a href={product.url}>
                    <div className="border-1 w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src={product.thumbnail}
                        alt={product.thumbnail}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <p className="text-xxl text-gray-700">{product.title}</p>
                    </div>

                    <div className="mt-4 flex justify-between">
                      <div>
                        <p className="mt-1 text-sm text-gray-500">{}</p>
                      </div>
                    </div>
                    </a>
                  </div>
                );
              })}
            </div>
            <div><Pagination postsPerPage={postsPerPage} totalPosts={videos.length} paginate={paginate} pageact={currentPage}/></div>
        </div>
        ) : (
          <Loadingpage/>
        )}
      </div>
    </div>
  )
}


export default BodyMulti;
/*

              
*/