'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { BiMenu } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoCloseSharp } from 'react-icons/io5';

export function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !(sidebarRef.current.contains(event.target as Node))) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            {/* Sidebar */}
            <div className={`fixed top-0 right-0 bg-blue-950 text-white w-full z-50 min-h-screen overflow-y-auto transition-transform
                ${isSidebarOpen ? 'right-0' : 'right-full' } ease-in-out duration-300`} ref={sidebarRef}>
                <div className="p-10">
                    <div className="flex justify-between items-center mb-4">
                        <picture>
                            <img src="/logo.webp" className="w-40" alt="Logo" />
                        </picture>
                        <button onClick={closeSidebar}
                            className="text-white hover:text-white focus:outline-none focus:text-white">
                            <IoCloseSharp className="block h-10 w-10 text-white" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-8 flex flex-col gap-5">
                        <Link href='#About' onClick={closeSidebar} className="text-white text-[17px]">Sobre</Link>
                        <Link href='#ObjectivesAndBenefits' onClick={closeSidebar} className="text-white text-[17px]">Objetivos</Link>
                        <Link href='#HowItWorks' onClick={closeSidebar} className="text-white text-[17px]">Como Funciona</Link>
                        <Link href='#Programming' onClick={closeSidebar} className="text-white text-[17px]">Programação</Link>
                        <Link href='#WhoCanParticipate' onClick={closeSidebar} className="text-white text-[17px]">Quem pode participar</Link>
                        <Link href='#Contact' onClick={closeSidebar} className="text-white text-[17px]">Contato</Link>
                        {/* Novo botão "ENTRAR" apenas no mobile */}
                        <Link href='/entrar'>
                            <button 
                                onClick={closeSidebar}
                                className="bg-yellow-500 text-black px-4 py-1 rounded-md hover:bg-yellow-600 transition-colors duration-300 block">
                                Entrar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Navbar */}
            <div className="relative top-0 left-0 w-full text-white z-40 py-10">
                <div className="bg-transparent text-white">
                    <div className="container mx-auto max-w-6xl flex items-center justify-center">
                        <div className='flex items-center justify-center p-2 md:hidden'>
                            <picture>
                                <img src="/logo.webp" className="hidden md:block" alt="Logo" />
                            </picture>
                        </div>
                        <div className="flex justify-end items-center py-4 px-2 w-full">
                            {/* Itens do menu */}
                            <div className="space-x-4 items-center justify-center hidden md:flex">
                                <Link href='#About' className="text-white">Sobre</Link>
                                <Link href='#ObjectivesAndBenefits' className="text-white">Objetivos</Link>
                                <Link href='#HowItWorks' className="text-white">Como Funciona</Link>
                                <Link href='#Programming' className="text-white">Programação</Link>
                                <Link href='#WhoCanParticipate' className="text-white">Quem pode participar</Link>
                                <Link href='#Contact' className="text-white">Contato</Link>
                                {/* Novo botão "ENTRAR" apenas no desktop */}
                                <Link href='/entrar'>
                                    <button 
                                    className="bg-yellow-500 text-black px-4 py-1 rounded-md hover:bg-yellow-600 transition-colors duration-300 block">
                                        Entrar
                                    </button>
                                </Link>
                            </div>
                            <button onClick={toggleSidebar}
                                className="text-white hover:text-whitebar flex items-center justify-center ml-5">
                                <BiMenu className="h-12 w-12 hidden md:block text-white" aria-hidden="true" />
                                <BsThreeDotsVertical className="block h-8 w-8 md:hidden text-white" aria-hidden="true" />                                
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
