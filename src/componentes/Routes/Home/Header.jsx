import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom";

import {
    GlobeIcon,
    ChevronDownIcon,
    ClipboardListIcon,
  } from '@heroicons/react/outline';
  
    const solutions = [
        {
            name: 'Ligas',
            description: 'Lo ultimo en ligas de futbol a nivel mundial',
            href: '/leagues',
            icon: ClipboardListIcon,
        },
        {
            name: 'Paises',
            description: 'Todos los paises asociados al futbol, información de equipos, jugadores, lugares, arbitros',
            href: '/countries',
            icon: GlobeIcon,
        },
    ]
    
  
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    function Header() {
        return(
            <>
            <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            >
                <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <Popover>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                    <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                            <div className="flex items-center justify-between w-full md:w-auto">
                            <Link to='/' title='My Sports'>
                                <span className="sr-only">My Sports</span>
                                <div className="h-10 w-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M177.1 228.6L207.9 320h96.5l29.62-91.38L256 172.1L177.1 228.6zM255.1 0C114.6 0 .0001 114.6 .0001 256S114.6 512 256 512s255.1-114.6 255.1-255.1S397.4 0 255.1 0zM416.6 360.9l-85.4-1.297l-25.15 81.59C290.1 445.5 273.4 448 256 448s-34.09-2.523-50.09-6.859L180.8 359.6l-85.4 1.297c-18.12-27.66-29.15-60.27-30.88-95.31L134.3 216.4L106.6 135.6c21.16-26.21 49.09-46.61 81.06-58.84L256 128l68.29-51.22c31.98 12.23 59.9 32.64 81.06 58.84L377.7 216.4l69.78 49.1C445.8 300.6 434.8 333.2 416.6 360.9z"/></svg>
                                </div>
                            </Link>
                            <div className="-mr-2 flex items-center md:hidden">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Abrir menu principal</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            </div>
                        </div>
                        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                        
                            </div>
                            <div className="-mr-2 -my-2 md:hidden">
                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Abrir menu principal</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                            <Popover.Group as="nav" className="hidden md:flex space-x-10">
                    
                                <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Inicio
                                </Link>
                    
                                <Link to="/videos" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Videos
                                </Link>
                                
                                <Popover className="relative">
                                {({ open }) => (
                                    <>
                                    <Popover.Button
                                        className={classNames(
                                        open ? 'text-gray-900' : 'text-gray-500',
                                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        )}
                                    >
                                        <span>Datos</span>
                                        <ChevronDownIcon
                                        className={classNames(
                                            open ? 'text-gray-600' : 'text-gray-400',
                                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                                        )}
                                        aria-hidden="true"
                                        />
                                    </Popover.Button>
                    
                                    <Transition
                                        as={React.Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                            {solutions.map((item) => (
                                                <Link
                                                key={item.name}
                                                to={item.href}
                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                >
                                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                </div>
                                                </Link>
                                            ))}
                                            </div>
                                        </div>
                                        </Popover.Panel>
                                    </Transition>
                                    </>
                                )}
                                </Popover>
                                <Popover className="relative">
                                {({ open }) => (
                                    <>
                    
                                    <Transition
                                        as={React.Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                    </Transition>
                                    </>
                                )}
                                </Popover>
                            </Popover.Group>
                        </div>
                    </nav>
                </div>
    
                <Transition
                as={React.Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                
                    <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 px-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Link to='/' title='My Sports'>
                                            <span className="sr-only">My Sports</span>
                                            <div className="h-10 w-10">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M177.1 228.6L207.9 320h96.5l29.62-91.38L256 172.1L177.1 228.6zM255.1 0C114.6 0 .0001 114.6 .0001 256S114.6 512 256 512s255.1-114.6 255.1-255.1S397.4 0 255.1 0zM416.6 360.9l-85.4-1.297l-25.15 81.59C290.1 445.5 273.4 448 256 448s-34.09-2.523-50.09-6.859L180.8 359.6l-85.4 1.297c-18.12-27.66-29.15-60.27-30.88-95.31L134.3 216.4L106.6 135.6c21.16-26.21 49.09-46.61 81.06-58.84L256 128l68.29-51.22c31.98 12.23 59.9 32.64 81.06 58.84L377.7 216.4l69.78 49.1C445.8 300.6 434.8 333.2 416.6 360.9z"/></svg>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-8">
                                    {solutions.map((item) => (
                                        <Link
                                        key={item.name}
                                        to={item.href}
                                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                        <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                        <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </Link>
                                    ))}
                                    </nav>
                                </div>
                            </div>
                            <div className="py-6 px-5 space-y-6">
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Inicio
                                    </Link>
                                    <Link to="/videos" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Videos
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel> 
                </Transition>
            </Popover>
            </>
        );
    }

export default Header; 
