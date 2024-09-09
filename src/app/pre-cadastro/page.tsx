"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaCheck } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { MdClose } from "react-icons/md";

export default function PreCadastro() {
const [selectedRole, setSelectedRole] = useState('');

const handleRoleChange = (role: string) => {
setSelectedRole(role);
};

return (
<main className="bg-[url('/bg-precadastro.png')] h-screen flex items-center justify-center overflow-hidden">
  <div className='md:justify-center flex flex-col justify-items-center md:max-w-7xl w-full gap-3 px-4 md:px-0'>

    <div className="max-w-xl mx-auto bg-white  md:px-5 px-3 md:m-16 m-5 shadow-lg rounded-lg">

      <div className="flex justify-end items-center pt-5">

        <button type="submit" className="">
          <MdClose size={30} />
        </button>
      </div>

      {/* Imagem no topo */}
      <div className="md:mb-7 mb-2 text-center flex items-center justify-center md:pt-14 pt-0">
        <picture>
          <img src="/logo-onano.png" className="px-4" alt="Logo Onano" />
        </picture>
      </div>

      {/* Texto "Faça seu login" */}
      <p className="text-lg text-center mb-2">Faça seu login</p>

      <form>
        <div className=''>
          {/* Texto "Informe quem você é" */}
          <p className="pb-2">Informe se você é:</p>

          {/* Opções de Aluno e Professor */}
          <div className="flex justify-around md:mb-7 mb-2 space-x-4">

            <label className={`flex w-full items-center rounded-lg cursor-pointer border border-gray-300 ${
              selectedRole==='aluno' ? 'text-black font-bold ' : 'bg-white text-gray-500' }`} onClick={()=>
              handleRoleChange('aluno')}
              >
              <div className={`flex items-center justify-center h-full w-10 mr-2 rounded-l-lg ${ selectedRole==='aluno'
                ? 'bg-gradient-to-b from-amber-200 to-amber-500 px-3 py-2'
                : 'bg-white px-3 py-2 border-r border-gray-300' }`}>
                <FaCheck className={`h-6 w-6 ${ selectedRole==='aluno' ? 'text-white' : 'text-gray-500' }`} />
              </div>
              <span className={` ${selectedRole==='aluno' ? 'text-black font-bold' : 'text-gray-500' }`}>
                Aluno
              </span>
            </label>

            <label className={`flex w-full items-center rounded-lg cursor-pointer border border-gray-300 ${
              selectedRole==='professor' ? 'text-black font-bold' : 'bg-white text-gray-500' }`} onClick={()=>
              handleRoleChange('professor')}
              >
              <div className={`flex items-center justify-center h-full w-10 mr-2 rounded-l-lg ${
                selectedRole==='professor' ? 'bg-gradient-to-b from-green-300 to-green-600 px-3 py-2'
                : 'bg-white px-3 py-2 border-r border-gray-300' }`}>
                <FaCheck className={`h-6 w-6 ${ selectedRole==='professor' ? 'text-white' : 'text-gray-500' }`} />
              </div>
              <span className={` ${selectedRole==='professor' ? 'text-black font-bold' : 'text-gray-500' }`}>
                Professor
              </span>
            </label>

          </div>
        </div>

        {/* Campos de nome */}
        <div className="md:flex md:flex-row flex flex-col md:space-x-4">

          <div className="flex w-full md:mb-7 mb-2">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <FaRegUser />
            </div>
            <input type="text" id="firstName" name="firstName" placeholder='Primeiro Nome'
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-gray-500" />
          </div>

          <div className="flex w-full md:mb-7 mb-2">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <FaRegUser />
            </div>
            <input type="text" id="lastName" name="lastName" placeholder='Último Nome'
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-gray-500" />
          </div>

        </div>

        {/* Campo de email */}

        <div className="flex w-full md:mb-7 mb-2">
          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <MdOutlineMailOutline />

          </div>
          <input type="email" id="email" name="email" placeholder='E-mail'
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-gray-500" />
        </div>

        {/* Campos de senha e confirmação de senha */}
        <div className="md:flex md:flex-row flex flex-col md:space-x-4">

          <div className="flex w-full md:mb-7 mb-2">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <MdLockOutline />

            </div>
            <input type="password" id="password" name="password" placeholder='Criar Senha'
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-gray-500" />
          </div>

          <div className="flex w-full md:mb-7 mb-2">
            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
              <MdLockOutline />

            </div>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder='Confirmar Senha'
              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg bg-gray-100 border border-gray-200 outline-none focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder:text-gray-500" />
          </div>
        </div>

        {/* Link "Já sou cadastrado" e botão ENVIAR */}
        <div className="flex justify-between items-center md:mb-7 mb-2">
          <Link href="/login" className="text-blue-500 underline">
          Já sou cadastrado
          </Link>
          <button type="submit"
            className="bg-gradient-to-b from-amber-200 to-amber-500 text-black font-medium text-sm px-14 py-2 rounded-lg hover:bg-amber-500">
            ENVIAR
          </button>
        </div>

        {/* Texto sobre termos de uso */}
        <p className="text-base text-gray-600 w-full md:flex py-5 md:pt-24 pt-10">
          Ao cadastrar uma conta, você concorda com os
          <Link href="/terms" className="text-blue-500 underline pl-2">
          termos de uso
          </Link>.
        </p>
      </form>

    </div>

  </div>
</main>
);
}