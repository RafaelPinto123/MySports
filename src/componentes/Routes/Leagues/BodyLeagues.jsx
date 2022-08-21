import React, { Fragment,useEffect, useState } from 'react';
import {sportsdatastandings,sportsdatateams,sportsdatamatches,sportsdatarounds,sportsdataleague,sportsdatastages,sportsdataseason,sportsdatacountries,countriesurldef,ExecuteAplication,Loadingpage,Pagination} from '../apipoint';
import { Dialog,Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Spinner } from 'reactstrap';
import moment from 'moment';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function SeasonStandings(season){
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12);
  const [standingsxa, setStandingsxa] = useState(null);
  const [teams, setTeams] = useState(null);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  useEffect(() => {
    if(season.season.season_id !== null){
      ExecuteAplication(setStandingsxa,sportsdatastandings(season.season.season_id));
    }
  },[]);
  if(standingsxa !== null) console.log(standingsxa);
  useEffect(() => {
    if(season.season.country_id !== null){
      ExecuteAplication(setTeams,sportsdatateams(season.season.country_id));
    }
  },[]);
  const onToBackInf= (object) => {
    console.log(teams.filter(tim => tim.team_id === object));
    return teams.filter(tim => tim.team_id === object);
  }
  return (
    <>
      <div className='ps-2 pb-8 pt-2 border-b'>
        <h5 className='ms-2 mb-2 inline-block float-left'>
          Posiciones de la Temporada {season.season.name}
        </h5>
      </div>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      {standingsxa !== null ? (
        <>
          <div className="sm:flex sm:items-start">
            <div className="w-full ">
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2">
                {standingsxa.standings.slice(indexOfFirstPost,indexOfLastPost).map((standings, index) => (
                  <div key={index} className="group relative border-1 p-3">
                    <div className="row">
                      <div className="col-12">
                        {(teams !== null ?
                          <>
                            {teams.filter(con => con.team_id === standings.team_id).map((trix) => (
                              <>
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                  <img
                                    src={trix.logo}
                                    alt=""
                                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                  />
                                  </div>
                                <div className="mt-4 flex justify-between">
                                  <div>
                                    <h3 className="text-sm text-gray-700">
                                      <span aria-hidden="true" className="absolute inset-0" />
                                      {trix.name}
                                    </h3>
                                  </div>
                                 <p className="text-sm font-medium text-gray-400">({trix.short_code})</p>
                                </div>
                              </>
                            ))}
                          </>
                           : <Spinner size="sm" color="primary"></Spinner>)}
                        <h3 className='text-sm font-medium text-center mt-1 text-gray-700'>{standings.result}</h3>
                        <h3 className='text-sm font-medium text-center mt-1 text-gray-700'>{standings.status}</h3>
                      </div>
                      <div className="col-12 pt-2 border-t">
                        <h3 className='text-sm font-medium text-center mt-1 text-gray-700'>General</h3>
                      </div>
 
                      <div className="col-6 pb-1">
                        <h3 className='text-sm font-medium text-center mt-1 text-gray-700'>Jugados {standings.overall.games_played}</h3>
                        <h3 className='text-sm font-medium text-center mt-1 text-gray-700'>Ganados {standings.overall.won}</h3>
                        <h3 className='text-sm font-medium text-center mt-1 text-gray-700'>Empatados {standings.overall.draw}</h3>
                      </div>
                      <div className="col-6 pb-1">
                        <h3 className='text-sm font-medium text-center mt-1 text-gray-700'>Perdidos {standings.overall.lost}</h3>
                        <h3 className='text-sm font-medium text-center mt-1 text-gray-700'>Goles Anotados {standings.overall.goals_scored}</h3>
                        <h3 className='text-sm font-medium text-center mt-1 text-gray-700'>Goles Recibidos {standings.overall.goals_against}</h3>
                        </div>
                      <div className="col-6 text-center border-t border-r">  
                        <h3 className="text-sm font-medium text-gray-600 pt-1">
                          Residente
                        </h3>
                        <h3 className="text-sm font-medium text-gray-400">Jugados {standings.home.games_played} </h3>
                        <h3 className="text-sm font-medium text-gray-400">Ganados {standings.home.won}</h3>
                        <h3 className="text-sm font-medium text-gray-400">Empatados {standings.home.draw}</h3>
                        <h3 className="text-sm font-medium text-gray-400">Perdidos {standings.home.lost}</h3>
                        <h3 className="text-sm font-medium text-gray-400">Goles Anotados {standings.home.goals_scored}</h3>
                        <h3 className="text-sm font-medium text-gray-400">Goles Recibidos {standings.home.goals_against}</h3>
                      </div>
                      <div className="col-6 text-center border-t">  
                        <h3 className="text-sm font-medium text-gray-600 pt-1">
                          Visitante
                        </h3>
                        <h3 className="text-sm font-medium text-gray-400">Jugados {standings.away.games_played} </h3>
                        <h3 className="text-sm font-medium text-gray-400">Ganados {standings.away.won}</h3>
                        <h3 className="text-sm font-medium text-gray-400">Empatados {standings.away.draw}</h3>
                        <h3 className="text-sm font-medium text-gray-400">Perdidos {standings.away.lost}</h3>
                        <h3 className="text-sm font-medium text-gray-400">Goles Anotados {standings.away.goals_scored}</h3>
                        <h3 className="text-sm font-medium text-gray-400">Goles Recibidos {standings.away.goals_against}</h3>
                      </div>
                    </div>
                    
                  </div>
                ))
                }
              </div>
            </div>
          </div>
          <div className="col-12 pt-2">
            <Pagination postsPerPage={postsPerPage} totalPosts={standingsxa.standings.length} paginate={paginate} pageact={currentPage}/>
          </div>
        </>
        ) : (
          <Loadingpage/>
        )}
      </div>
    </>
  )
}

function SeasonMatches(season){
  const [searchx, setSearchx] = useState('');
  const MatchStatus = {
    0: {
      "name" : "No empezado",
      "desc" : "Actualmente no ha Comenzado",
      "status": 0,
    },
    1: {
      "name" : "En juego",
      "desc" : "Actualmente estan jugando",
      "status": 1,
    },
    2: {
      "name" : "Actualizando",
      "desc" : "Se esta actualizando los datos",
      "status": 0,
    },
    3: {
      "name" : "Terminado",
      "desc" : "El juego ha terminado después de 90 minutos.",
      "status": 0,
    },
    4: {
      "name" : "Pospuesto",
      "desc" : "El juego ha sido pospuesto.",
      "status": 0,
    },
    5: {
      "name" : "Cancelado",
      "desc" : "El juego ha sido cancelado",
      "status": 2,
    },
    6: {
      "name" : "Abandonado",
      "desc" : "El juego se ha abandonado y continuará en un momento o día posterior.",
      "status": 2,
    },
    7: {
      "name" : "Interrumpido",
      "desc" : "El juego ha sido interrumpido. Puede deberse al mal tiempo",
      "status": 3,
    },
    8: {
      "name" : "Suspendido",
      "desc" : "El juego se ha suspendido",
      "status": 3,
    },
    9: {
      "name" : "Galardonado",
      "desc" : "El ganador se decide externamente.",
      "status": 4,
    },
    10: {
      "name" : "Demorado",
      "desc" : "El Juego se retrasara",
      "status": 3,
    },
    11: {
      "name" : "Medio tiempo",
      "desc" : "El juego está en el medio tiempo.",
      "status": 0,
    },
    12: {
      "name" : "Tiempo extra",
      "desc" : "El juego tendra un tiempo extra",
      "status": 5,
    },
    13: {
      "name" : "Sanciones",
      "desc" : "El juego está en penales porque la prórroga no determinó un ganador",
      "status": 5,
    },
    14: {
      "name" : "Descanso",
      "desc" : "El juego está en receso esperando tiempo extra o penalizaciones",
      "status": 5,
    },
    17: {
      "name" : "Se anunciará",
      "desc" : "El juego aún no ha sido verificado.",
      "status": 5,
    },
    31: {
      "name" : "Después de los penaltis	",
      "desc" : "El evento ha terminado después de la tanda de penaltis.",
      "status": 5,
    },
    32: {
      "name" : "Después de la prórroga",
      "desc" : "El juego ha terminado después de la prórroga.",
      "status": 5,
    }
  }
  
  const onFormateo = (object) => {
    return moment(object).format("DD/MM/YYYY hh:mm:ss");;
  }
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12);
  const [teams, setTeams] = useState(null);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onFilteredx = (object) => {
    setSearchx(object.target.value);
    setCurrentPage(1);
  }

  const onBackColor= (object) => {
    if(object === 0) return 'secondary';
    if(object === 1) return 'success';
    if(object === 2) return 'danger';
    if(object === 3) return 'warning';
    if(object === 4) return 'primary';
    if(object === 5) return 'info';
  }

  const currentPosts = () => {
    var Array = teams;
    if((searchx.length > 0) || (searchx !== '')) Array = Array.filter(league => {
      return league.name.indexOf(searchx.toLowerCase()) >= 0; 
    });
    return Array;
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  useEffect(() => {
    if(season.season.season_id !== null){
      ExecuteAplication(setTeams,sportsdatamatches(season.season.season_id));
      setCurrentPage(1);
    }
  },[]);
  return (
    <>
      <div className='ps-2 pb-8 pt-2 border-b'>
        <h5 className='ms-2 mb-2 inline-block float-left'>
          Partidos de la Temporada {season.season.name}
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
          </div>

          <div className="sm:flex sm:items-start">
            <div className="w-full ">
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2">
                {currentPosts().slice(indexOfFirstPost,indexOfLastPost).map((teams, index) => (
                  <div key={teams.match_id} className="group relative border-1 p-3">
                    <div className="row">
                      <div className="col-6">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                          <img
                            src={teams.home_team.logo}
                            alt=""
                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                          />
                        </div>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-sm text-gray-700">
                              <span aria-hidden="true" className="absolute inset-0" />
                              {teams.home_team.name}
                              {/* <img className='w-8 float-left' src={countriesurldef + teams.home_team.country.country_code} alt="photox" />  */}
                            </h3>
                          </div>
                          <p className="text-sm font-medium text-gray-400">({teams.home_team.short_code})</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                          <img
                            src={teams.away_team.logo}
                            alt=""
                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                          />
                        </div>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-sm text-gray-700">
                              <span aria-hidden="true" className="absolute inset-0" />
                               {teams.away_team.name}
                               {/* <img className='w-8 float-left' src={countriesurldef + teams.away_team.country.country_code} alt="photox" /> */}
                            </h3>
                          </div>
                          <p className="text-sm font-medium text-gray-400">({teams.away_team.short_code})</p>
                        </div>
                      </div>
                      <h2 className='text-center mt-1 text-gray-700'>{teams.stats.ft_score}</h2>
                      <h3 className='text-center mt-1 text-gray-700'>
                        <div className=''>
                          <Spinner color={onBackColor(MatchStatus[teams.status_code].status)} type="grow" size='sm'> Loading... </Spinner>
                          <span className='text-sm'>{MatchStatus[teams.status_code].name}</span>
                          </div>
                        <span className='text-sm text-gray-500'>{MatchStatus[teams.status_code].desc}</span>

                      </h3>
                      <br/>
                      <div className="col-6 text-center">  
                        <h3 className="text-sm font-medium text-gray-600">
                          Lugar
                        </h3>
                        <h3 className="text-sm font-medium text-gray-700">
                          {teams.venue.name}
                        </h3>
                        <h3 className="text-sm font-medium text-gray-400">Capacidad {teams.venue.capacity} </h3>
                        <h3 className="text-sm font-medium text-gray-400">Ciudad {teams.venue.city}</h3>
                      </div>
                      <div className="col-6 text-center">
                        <h3 className="text-sm font-medium text-gray-600">
                          Datos
                        </h3>
                        <h3 className="text-sm font-medium text-gray-500">
                          {onFormateo(teams.match_start)}
                        </h3>
                        <h4 className="text-sm font-medium text-gray-500">
                          {teams.group.group_name}
                        </h4>
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

function SeasonRounds(season){
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
    var Array = teams;
    if((searchx.length > 0) || (searchx !== '')) Array = Array.filter(league => {
      return league.name.indexOf(searchx.toLowerCase()) >= 0; 
    });
    return Array;
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  useEffect(() => {
    if(season.season.season_id !== null){
      ExecuteAplication(setTeams,sportsdatarounds(season.season.season_id));
      setCurrentPage(1);
    }
  },[]);
  return (
    <>
      <div className='ps-2 pb-8 pt-2 border-b'>
        <h5 className='ms-2 mb-2 inline-block float-left'>
          Rondas de la Temporada {season.season.name}
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
          </div>

          <div className="sm:flex sm:items-start">
            <div className="w-full ">
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                {currentPosts().slice(indexOfFirstPost,indexOfLastPost).map((teams, index) => (
                  <div key={teams.id} className="group relative border-1 p-3">
                    <div className='text-center'>
                      <h3 className="text-sm font-medium text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {teams.name}
                      </h3>
                    </div>
                    {(teams.is_current === 0 ? <div className=''><Spinner color="success" type="grow" size='sm'> Loading... </Spinner> Finalizado </div> : <div className=''><Spinner color='primary' size='sm'>Loading...</Spinner> En curso </div>)}
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

function SeasonStages(season){
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
    var Array = teams;
    if((searchx.length > 0) || (searchx !== '')) Array = Array.filter(league => {
      return league.name.indexOf(searchx.toLowerCase()) >= 0; 
    });
    return Array;
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  useEffect(() => {
    if(season.season.season_id !== null){
      ExecuteAplication(setTeams,sportsdatastages(season.season.season_id));
      setCurrentPage(1);
    }
  },[]);
  return (
    <>
      <div className='ps-2 pb-8 pt-2 border-b'>
        <h5 className='ms-2 mb-2 inline-block float-left'>
          Etapas de la Temporada {season.season.name}
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
          </div>

          <div className="sm:flex sm:items-start">
            <div className="w-full ">
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                {currentPosts().slice(indexOfFirstPost,indexOfLastPost).map((teams, index) => (
                  <div key={teams.id} className="group relative border-1 p-3">
                    <div className='text-center'>
                      <h3 className="text-sm font-medium text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {teams.name}
                      </h3>
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

function ModalCountriesStages({open,setOpen,season,option}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={setOpen}>
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
                {(option === 1) ? <SeasonStages season={season} /> : ('')}
                {(option === 2) ? <SeasonRounds season={season} /> : ('')}
                {(option === 3) ? <SeasonMatches season={season} /> : ('')}
                {(option === 4) ? <SeasonStandings season={season} /> : ('')}
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

function LeagueSeasons(league){
  var date = new Date();
  var primerDia = date.getFullYear()+"-01"+"-01";
  var ultimoDia = date.getFullYear()+"-12"+"-31";
  
  const [searchx, setSearchx] = useState('');
  const [datemin, setDatemin] = useState(primerDia);
  const [datemax, setDatemax] = useState(ultimoDia);
  const [seasonact, setSeasonact] = useState(null);
  const [optionx, setOptionx] = useState(0);

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12);
  const [teams, setTeams] = useState(null);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [openx, setOpenx] = useState(false)

  const onFilteredx = (object) => {
    setSearchx(object.target.value);
    setCurrentPage(1);
  }

  const onDatemin = (object) => {
    setDatemin(object.target.value);
    setCurrentPage(1);
  }

  const onDatemax = (object) => {
    setDatemax(object.target.value);
    setCurrentPage(1);
  }

  const onFormateo = (object) => {
    return moment(object).format("DD/MM/YYYY");;
  }

  const onOpenModalStages = (object) => {
    setSeasonact(object);
    setOpenx(true);
    setOptionx(1);
  }
  const onOpenModalRounds = (object) => {
    setSeasonact(object);
    setOpenx(true);
    setOptionx(2);
  }
  const onOpenModalMatches = (object) => {
    setSeasonact(object);
    setOpenx(true);
    setOptionx(3);
  }
  const onOpenModalStandings = (object) => {
    setSeasonact(object);
    setOpenx(true);
    setOptionx(4);
  }
  
  

  const currentPosts = () => {
    var Array = teams;
    if((searchx.length > 0) || (searchx !== '')) Array = Array.filter(league => {
      return league.name.indexOf(searchx.toLowerCase()) >= 0; 
    });
    if((datemin.length > 0) || (datemin !== '')) Array = Array.filter(league => league.start_date >= datemin) ;
    if((datemax.length > 0) || (datemax !== '')) Array = Array.filter(league => league.end_date <= datemax) ;
    return Array;
  }
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  useEffect(() => {
    if(league.league.league_id !== null){
      ExecuteAplication(setTeams,sportsdataseason(league.league.league_id));
      setCurrentPage(1);
    }
  },[]);
  return (
    <>
      <div className='ps-2 pb-8 pt-2 border-b'>
        <h5 className='ms-2 mb-2 inline-block float-left'>
          Temporadas de la liga {league.league.name}
        </h5>
      </div>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      {((teams !== null)) ? (
        <>
          <div className='row'>
            <div className="col-12 col-lg-6">
              <div className="input-group mb-3">
                <input type="text" className="form-control " placeholder="Buscar..." value={searchx} onChange={onFilteredx} />
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Desde</span>
                <input type="date" className="form-control" placeholder="min" value={datemin} onChange={onDatemin} />
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Hasta</span>
                <input type="date" className="form-control" placeholder="max" value={datemax} onChange={onDatemax} />
              </div>
            </div>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="w-full ">
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2">
                {currentPosts().slice(indexOfFirstPost,indexOfLastPost).map((teams, index) => (
                  <div key={teams.season_id} className="group relative border-1 p-3">
                    <div className='text-center'>
                      <h3 className="text-sm font-medium text-gray-700">
                        {teams.name}
                      </h3>
                      <p className="text-sm font-medium text-gray-400">{onFormateo(teams.start_date)} - {onFormateo(teams.end_date)} </p>
                      <br/>
                      {(teams.is_current === 0 ? <div className=''><Spinner color="success" type="grow" size='sm'> Loading... </Spinner> Finalizado </div> : <div className=''><Spinner color='primary' size='sm'>Loading...</Spinner> En curso </div>)}
                      <br/>
                      <div className="row">
                        <div className="col-12 col-lg-3">
                          <button onClick={() => onOpenModalStages(teams)} className="h-10  w-full text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Etapas</button>
                        </div>
                        <div className="col-12 col-lg-3">
                          <button onClick={() => onOpenModalMatches(teams)} className="h-10  w-full text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Partidos</button>

                        </div>
                        <div className="col-12 col-lg-3">
                          <button onClick={() => onOpenModalStandings(teams)} className="h-10 w-full text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Posicion</button>
                        </div>
                        <div className="col-12 col-lg-3">
                          <button onClick={() => onOpenModalRounds(teams)} className="h-10  w-full text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Rondas</button>
                        </div>
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
      <ModalCountriesStages setOpen={setOpenx} open={openx} season={seasonact} option={optionx} />
    </>
  )
}

function ModalCountriesTeams({open,setOpen,league,option}) {
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
                {(option === 1) ? <LeagueSeasons league={league} /> : ('')}
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

function BodyLeagues() {
  const datainitial = 
  {
      "country_id": 0,
      "name": "Todos",
      "country_code": "",
      "continent": ""
  }
  const Pretermiando = 
  {
    "country_id": 127,
    "name": "Venezuela",
    "country_code": "ve",
    "continent": "South America"
  }
  const [selected, setSelected] = useState(Pretermiando);
  const [leagueact, setLeagueact] = useState(null);
  const [teams, setTeams] = useState(null);
  const [countries, setCountries] = useState(null);
  const [open, setOpen] = useState(false)
  const [option, setOption] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12);
  
  useEffect(() => {
    ExecuteAplication(setTeams,sportsdataleague);
  },[]);
  
  useEffect(() => {
    ExecuteAplication(setCountries,sportsdatacountries);
  },[]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const onFiltered = (value) => {
    setSelected(value);
    setCurrentPage(1);
  }

  const onOpenModalSeason = (object) => {
    setLeagueact(object);
    setOpen(true);
    setOption(1);
  }
  

  const currentPosts = () => {
    var array = teams;
    if(selected.country_id !== 0) array = array.filter(league => league.country_id === selected.country_id);
    return array;
  }
/*
  const currentPostsother = () => {
    if(countries == null) return ;
    var array = countries;
    //array = array.filter(person => person.country_code !== null);
    return array;
  }*/
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  return(
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="lg:text-center">
          <h2 className="text-lg text-indigo-600 font-semibold">Ligas</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:tracking-tight">
            Todas las ligas de futbol actuales
          </p>
        {countries !== null ? (
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <Listbox value={selected} onChange={onFiltered}>
              {({ open }) => (
                <>
                  <div className="mt-1 relative">
                    <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <span className="flex items-center">
                        {(selected.country_id === 0 ? ('') : (<img src={countriesurldef + selected.country_code} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />))}
                        
                        <span className="ml-3 block truncate">{selected.name}</span>
                      </span>
                      <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        <Listbox.Option
                          key="0"
                          className={({ active }) =>
                            classNames(
                              active ? 'text-white bg-indigo-600' : 'text-gray-900',
                              'cursor-default select-none relative py-2 pl-3 pr-9'
                            )
                          }
                          value={datainitial}
                          >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <span
                                  className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                >
                                  Todos
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                  )}
                                >
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                        {countries.filter(person => person.country_code !== null).map((person) => (
                          <Listbox.Option
                            key={person.country_id}
                            className={({ active }) =>
                              classNames(
                                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                'cursor-default select-none relative py-2 pl-3 pr-9'
                              )
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center">
                                  <img src={countriesurldef + person.country_code} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                                  <span
                                    className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                  >
                                    {person.name}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? 'text-white' : 'text-indigo-600',
                                      'absolute inset-y-0 right-0 flex items-center pr-4'
                                    )}
                                  >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          </div>
          ) : ('')}
        </div>
        {teams !== null ? (
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {currentPosts().slice(indexOfFirstPost,indexOfLastPost).map((league) => (
                <div key={countries.league_id} className="relative border-b pb-3 border-l pl-2 border-r pr-2 border-t pt-2">
                    <div className="text-center text-lg leading-6 font-medium text-gray-900">{countries.filter(con => con.country_id === league.country_id)[0].country_code !== null ? <img className='float-start h-6 w-6 rounded-md text-white' src={countriesurldef + countries.filter(con => con.country_id === league.country_id)[0].country_code} alt="photox" /> : '' } {league.name}</div>
                    <dd className="mb-2 text-center text-base text-gray-500">{countries.filter(con => con.country_id === league.country_id)[0].name} - ({countries.filter(con => con.country_id === league.country_id)[0].continent})</dd>
                    <button onClick={() => onOpenModalSeason(league)} className=" text-center  h-10 px-10 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Temporadas</button>
                </div>
              ))} 
            </dl>
            <Pagination postsPerPage={postsPerPage} totalPosts={currentPosts().length} paginate={paginate} pageact={currentPage}/>
          </div>
        ) : (
          <Loadingpage/>
        )}
      </div>
      <ModalCountriesTeams setOpen={setOpen} open={open} league={leagueact} option={option} />
    </div>
  )
}

export default BodyLeagues;