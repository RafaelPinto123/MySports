import React, { Fragment, useEffect,useState } from 'react';
import {ExecuteAplication,sportsdatavenues,sportsdatareferees,sportsdataplayers,sportsdatateams,sportsdatacountries,countriesurldef,Loadingpage,Pagination} from '../apipoint';
import { Dialog, Transition } from '@headlessui/react'

function CountriesTeam(countries){
  const [search, setSearch] = useState('');
  
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12);
  const [teams, setTeams] = useState(null);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onFiltered = (object) => {
    setSearch(object.target.value);
    setCurrentPage(1);
  }
  
  const currentPosts = () => {
    //return (search.length === 0 ? teams.slice(indexOfFirstPost,indexOfLastPost) : teams.filter(league => { return league.name.toLowerCase().indexOf(search.toLowerCase()) >= 0; }).slice(indexOfFirstPost,indexOfLastPost));
    var Array = teams;
    if(search.length > 0) Array = Array.filter(league => { return league.name.toLowerCase().indexOf(search.toLowerCase()) >= 0; })
    return Array;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  useEffect(() => {
    if(countries.countries.country_id !== null){
      ExecuteAplication(setTeams,sportsdatateams(countries.countries.country_id));
      setCurrentPage(1);
    }
  },[]);

  return (
    <>
      <div className='ps-2 pb-8 pt-2 border-b'>
        <img className='w-8 float-left' src={countriesurldef + countries.countries.country_code} alt="photox" />
        <h5 className='ms-2 mb-2 inline-block float-left'>
          Equipos de {countries.countries.name}
        </h5>
      </div>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      {teams !== null ? (
        <>
          <div className="col-12">
            <input
              type="text"
              name="search"
              id="search"
              className="form-control "
              placeholder="Buscar..."
              value={search}
              onChange={onFiltered}
            /></div>
          <div className="sm:flex sm:items-start">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-8">
                {currentPosts().slice(indexOfFirstPost,indexOfLastPost).map((teams) => (
                  <div key={teams.team_id} className="group relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src={teams.logo}
                        alt=""
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <span aria-hidden="true" className="absolute inset-0" />
                          {teams.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{teams.common_name}</p>
                      </div>
                      <p className="text-sm font-medium text-gray-400">({teams.short_code})</p>
                    </div>
                  </div>
                ))
                }
              </div>
            </div>
          </div>
          <div className="col-12 pt-2">
            <Pagination postsPerPage={postsPerPage} totalPosts={currentPosts().length} paginate={paginate} pageact={currentPage}/>
          </div>
        </>
        ) : (
          <Loadingpage/>
        )}
      </div>
    </>
  )
}

function CountriesPlayers(countries){
  const [searchx, setSearchx] = useState('');
  
  const [weightmin, setWeightmin] = useState('');
  const [weightmax, setWeightmax] = useState('');

  const [yearsmin, setYearsmin] = useState('');
  const [yearsmax, setYearsmax] = useState('');

  const [heightmin, setHeightmin] = useState('');
  const [heightmax, setHeightmax] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12);
  const [teams, setTeams] = useState(null);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onFilteredx = (object) => {
    setSearchx(object.target.value);
    setCurrentPage(1);
  }

  const onWeightmin = (object) => {
    setWeightmin(object.target.value);
    setCurrentPage(1);

  }
  const onWeightmax = (object) => {
    setWeightmax(object.target.value);
    setCurrentPage(1);
  }
  
  const onYearsmin = (object) => {
    setYearsmin(object.target.value);
    setCurrentPage(1);

  }
  const onYearsmax = (object) => {
    setYearsmax(object.target.value);
    setCurrentPage(1);
  }
  
  const onHeightsmin = (object) => {
    setHeightmin(object.target.value);
    setCurrentPage(1);

  }
  const onHeightsmax = (object) => {
    setHeightmax(object.target.value);
    setCurrentPage(1);
  }
  
  const currentPosts = () => {
    //return (search.length === 0 ? teams.slice(indexOfFirstPost,indexOfLastPost) : teams.slice(indexOfFirstPost,indexOfLastPost));
    var Array = teams;
    if((searchx.length > 0) || (searchx !== '')) Array = Array.filter(league => {
      var name = league.firstname.toLowerCase();
      name = name+" "+league.lastname.toLowerCase();
      return name.indexOf(searchx.toLowerCase()) >= 0; 
    });
    if((weightmin.length > 0) || (weightmin !== '')) Array = Array.filter(league => league.weight >= weightmin) ;
    if((weightmax.length > 0) || (weightmax !== '')) Array = Array.filter(league => league.weight <= weightmax) ;
    if((yearsmin.length > 0) || (yearsmin !== '')) Array = Array.filter(league => league.age >= yearsmin) ;
    if((yearsmax.length > 0) || (yearsmax !== '')) Array = Array.filter(league => league.age <= yearsmax) ;
    if((heightmin.length > 0) || (heightmin !== '')) Array = Array.filter(league => league.height >= heightmin) ;
    if((heightmax.length > 0) || (heightmax !== '')) Array = Array.filter(league => league.height <= heightmax) ;
    return Array;
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  useEffect(() => {
    if(countries.countries.country_id !== null){
      ExecuteAplication(setTeams,sportsdataplayers(countries.countries.country_id));
      setCurrentPage(1);
    }
  },[]);

  return (
    <>
      <div className='ps-2 pb-8 pt-2 border-b'>
        <img className='w-8 float-left' src={countriesurldef + countries.countries.country_code} alt="photox" />
        <h5 className='ms-2 mb-2 inline-block float-left'>
          Jugadores de {countries.countries.name}
        </h5>
      </div>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      {teams !== null ? (
        <>
          <div className='row'>
            <div className="col-12 col-lg-3">
              <div className="input-group mb-3">
                <input type="text" className="form-control " placeholder="Buscar..." value={searchx} onChange={onFilteredx} />
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Kg</span>
                <input type="number" className="form-control" placeholder="min" value={weightmin} onChange={onWeightmin} />
                <input type="number" className="form-control" placeholder="max" value={weightmax} onChange={onWeightmax} />
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Cm</span>
                <input type="number" className="form-control" placeholder="min" value={heightmin} onChange={onHeightsmin} />
                <input type="number" className="form-control" placeholder="max" value={heightmax} onChange={onHeightsmax} />
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Años</span>
                <input type="number" className="form-control" placeholder="min" value={yearsmin} onChange={onYearsmin} />
                <input type="number" className="form-control" placeholder="max" value={yearsmax} onChange={onYearsmax} />
              </div>
            </div>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="w-full ">
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                {currentPosts().slice(indexOfFirstPost,indexOfLastPost).map((teams, index) => (
                  <div key={teams.player_id} className="group relative border-1 p-3">
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <span aria-hidden="true" className="absolute inset-0" />
                          {teams.firstname} {teams.lastname}
                          <br/>
                          <p className="mt-1 text-sm text-gray-500">{teams.birthday}<br/><span className="text-sm font-medium text-gray-400">({teams.age} Años)</span></p>
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-gray-400">{(teams.weight !== null ? (teams.weight + ' Kg' ) : '' )}<br/>{(teams.height !== null ? (teams.height + ' cm') : '' )} </p>
                    </div>
                  </div>
                ))
                }
              </div>
            </div>
          </div>
          <div className="col-12 pt-2">
            <Pagination postsPerPage={postsPerPage} totalPosts={currentPosts().length} paginate={paginate} pageact={currentPage}/>
          </div>
        </>
        ) : (
          <Loadingpage/>
        )}
      </div>
    </>
  )
}

function CountriesReferees(countries){
  const [searchx, setSearchx] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12);
  const [teams, setTeams] = useState(null);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onFilteredx = (object) => {
    setSearchx(object.target.value);
    setCurrentPage(1);
  }

  const currentPosts = () => {
    //return (search.length === 0 ? teams.slice(indexOfFirstPost,indexOfLastPost) : teams.slice(indexOfFirstPost,indexOfLastPost));
    var Array = teams;
    if((searchx.length > 0) || (searchx !== '')) Array = Array.filter(league => {
      return league.name.indexOf(searchx.toLowerCase()) >= 0; 
    });
    return Array;
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  useEffect(() => {
    if(countries.countries.country_id !== null){
      ExecuteAplication(setTeams,sportsdatareferees(countries.countries.country_id));
      setCurrentPage(1);
    }
  },[]);

  return (
    <>
      <div className='ps-2 pb-8 pt-2 border-b'>
        <img className='w-8 float-left' src={countriesurldef + countries.countries.country_code} alt="photox" />
        <h5 className='ms-2 mb-2 inline-block float-left'>
          Arbitros de {countries.countries.name}
        </h5>
      </div>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      {teams !== null ? (
        <>
          <div className='row'>
            <div className="col-12 col-lg-3">
              <div className="input-group mb-3">
                <input type="text" className="form-control " placeholder="Buscar..." value={searchx} onChange={onFilteredx} />
              </div>
            </div>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="w-full ">
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                {currentPosts().slice(indexOfFirstPost,indexOfLastPost).map((teams, index) => (
                  <div key={teams.player_id} className="group relative border-1 p-3">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src={teams.img}
                        alt=""
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <span aria-hidden="true" className="absolute inset-0" />
                          {teams.name}
                        </h3>
                          <br/>
                          <p className="mt-1 text-sm text-gray-500">{teams.birthdate}</p>
                      </div>
                    </div>
                  </div>
                ))
                }
              </div>
            </div>
          </div>
          <div className="col-12 pt-2">
            <Pagination postsPerPage={postsPerPage} totalPosts={currentPosts().length} paginate={paginate} pageact={currentPage}/>
          </div>
        </>
        ) : (
          <Loadingpage/>
        )}
      </div>
    </>
  )
}

function CountriesVenues(countries){
  const [searchx, setSearchx] = useState('');

  const [capacitymin, setCapacitymin] = useState('');
  const [capacitymax, setCapacitymax] = useState('');

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12);
  const [teams, setTeams] = useState(null);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onFilteredx = (object) => {
    setSearchx(object.target.value);
    setCurrentPage(1);
  }

  const onCapacitymin = (object) => {
    setCapacitymin(object.target.value);
    setCurrentPage(1);
  }

  const onCapacitymax = (object) => {
    setCapacitymax(object.target.value);
    setCurrentPage(1);
  }
  

  const currentPosts = () => {
    var Array = teams;
    if((searchx.length > 0) || (searchx !== '')) Array = Array.filter(league => {
      return league.name.indexOf(searchx.toLowerCase()) >= 0; 
    });
    if((capacitymin.length > 0) || (capacitymin !== '')) Array = Array.filter(league => league.capacity >= capacitymin) ;
    if((capacitymax.length > 0) || (capacitymax !== '')) Array = Array.filter(league => league.capacity <= capacitymax) ;
    return Array;
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  useEffect(() => {
    if(countries.countries.country_id !== null){
      ExecuteAplication(setTeams,sportsdatavenues(countries.countries.country_id));
      setCurrentPage(1);
    }
  },[]);

  return (
    <>
      <div className='ps-2 pb-8 pt-2 border-b'>
        <img className='w-8 float-left' src={countriesurldef + countries.countries.country_code} alt="photox" />
        <h5 className='ms-2 mb-2 inline-block float-left'>
          Lugares de {countries.countries.name}
        </h5>
      </div>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      {teams !== null ? (
        <>
          <div className='row'>
            <div className="col-12 col-lg-6">
              <div className="input-group mb-3">
                <input type="text" className="form-control " placeholder="Buscar..." value={searchx} onChange={onFilteredx} />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Capacidad</span>
                <input type="number" className="form-control" placeholder="min" value={capacitymin} onChange={onCapacitymin} />
                <input type="number" className="form-control" placeholder="max" value={capacitymax} onChange={onCapacitymax} />
              </div>
            </div>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="w-full ">
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                {currentPosts().slice(indexOfFirstPost,indexOfLastPost).map((teams, index) => (
                  <div key={teams.player_id} className="group relative border-1 p-3">
                    <div className='text-center'>
                      <h3 className="text-sm font-medium text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {teams.name}
                      </h3>
                      <p className="text-sm font-medium text-gray-400">Capacidad {teams.capacity} </p>
                      <p className="text-sm font-medium text-gray-500">Ciudad {teams.city}</p>
                    </div>
                  </div>
                ))
                }
              </div>
            </div>
          </div>
          <div className="col-12 pt-2">
            <Pagination postsPerPage={postsPerPage} totalPosts={currentPosts().length} paginate={paginate} pageact={currentPage}/>
          </div>
        </>
        ) : (
          <Loadingpage/>
        )}
      </div>
    </>
  )
}

function ModalCountriesTeams({open,setOpen,countries,option}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-100 h-100 lg:w-75 lg:h-75">
                {(option === 1) ? <CountriesTeam countries={countries} /> : ('')}
                {(option === 2) ? <CountriesPlayers countries={countries} /> : ('')}
                {(option === 3) ? <CountriesReferees countries={countries} /> : ('')}
                {(option === 4) ? <CountriesVenues countries={countries} /> : ('')}
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Cerrar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

function BodyCountries() {
  const [open, setOpen] = useState(false)
  const [countriesact, setCountriesact] = useState(null);
  const [search, setSearch] = useState('');
  const [option, setOption] = useState(0);
  const [teams, setTeams] = useState(null);

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onOpenModalTeam = (object) => {
    setCountriesact(object);
    setOpen(true);
    setOption(1);
  }

  const onOpenModalPlayers = (object) => {
    setCountriesact(object);
    setOpen(true);
    setOption(2);
  }

  const onOpenModalReferes = (object) => {
    setCountriesact(object);
    setOpen(true);
    setOption(3);
  }

  const onOpenModalVenues = (object) => {
    setCountriesact(object);
    setOpen(true);
    setOption(4);
  }

  const onFiltered = (object) => {
    setSearch(object.target.value);
    setCurrentPage(1);
  }


  useEffect(() => {
    //setTeams(sportsdatacountries);
    ExecuteAplication(setTeams,sportsdatacountries);
    setCurrentPage(1);
  },[]);

  const currentPosts = () => {
    //return (search.length === 0 ? teams.slice(indexOfFirstPost,indexOfLastPost) : teams.filter(league => { return league.name.toLowerCase().indexOf(search.toLowerCase()) >= 0; }).slice(indexOfFirstPost,indexOfLastPost));
    var Array = teams.filter(league => league.country_code !== null);
    if(search.length > 0) Array = Array.filter(league => { return league.name.toLowerCase().indexOf(search.toLowerCase()) >= 0; })
    return Array;
  }
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  return(
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="lg:text-center">
          <h2 className="text-lg text-indigo-600 font-semibold">Paises</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
            Todos los paises asociados al futbol
          </p>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
            <div>
              <div className="mt-1 relative rounded-xl shadow-xl">
                <div className="absolute  flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
                  </span>
                </div>
                    <div className="col-12">
                      <input
                        type="text"
                        name="search"
                        id="search"
                        className="form-control "
                        placeholder="Buscar..."
                        value={search}
                        onChange={onFiltered}
                      /></div>
              </div>
            </div>
          </div>
        </div>
        {teams !== null ? (
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {currentPosts().slice(indexOfFirstPost,indexOfLastPost).map((league, index) => (
                <div key={index} className="relative border-b pb-2">
                    {league.country_code !== null ? (<div className="absolute flex items-center justify-center h-6 w-6 rounded-md text-white"><img src={countriesurldef + league.country_code} alt="photox" /></div>) : ('') }
                    <p className="text-center text-lg leading-6 font-medium text-gray-900">{league.name}</p>
                    <div className="inline-flex" role="group" aria-label="Button group">
                      <button onClick={() => onOpenModalTeam(league)} className="h-10 px-3 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-l-lg focus:shadow-outline hover:bg-indigo-800">Equipos</button>
                      <button onClick={() => onOpenModalPlayers(league)} className="h-10 px-3 text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800">Jugadores</button>
                      <button onClick={() => onOpenModalVenues(league)} className="h-10 px-3 text-indigo-100 transition-colors duration-150 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800">Lugares</button>
                      <button onClick={() => onOpenModalReferes(league)} className="h-10 px-3 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-r-lg focus:shadow-outline hover:bg-indigo-800">Arbitros</button>
                    </div>
                </div>
              ))} 
            </dl>
            <Pagination postsPerPage={postsPerPage} totalPosts={currentPosts().length} paginate={paginate} pageact={currentPage}/>
          </div>
        ) : (
          <Loadingpage/>
        )}
      </div>
      <ModalCountriesTeams setOpen={setOpen} open={open} countries={countriesact} option={option} />
    </div>
  )
}

export default BodyCountries;