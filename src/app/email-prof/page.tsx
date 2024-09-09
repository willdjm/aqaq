import { FaCheck } from "react-icons/fa";

export default function EmailAluno() {
return (

<main className="w-full flex flex-col items-center justify-center">
  <div className="relative w-full h-screen md:h-auto overflow-hidden max-w-5xl ">
    <picture className="object-cover w-full h-full">
      <img src="/bg-banneremailprof.png" className="w-full h-full object-cover" alt="Background" />
    </picture>
    <div className="absolute gap-20 inset-0 flex flex-col items-center justify-center text-white z-40">
      <picture className=" w-full relative items-center justify-center flex max-w-3xl">
        <img src="/logobanner.png" className="w-2/3" alt="" />
      </picture>
      <div className="w-full relative items-center justify-end flex max-w-3xl">
        <button className="flex items-center bg-gray-200 rounded-md border border-gray-200">
          <div
            className="flex items-center justify-center rounded-l-md w-10 h-10 bg-gradient-to-b from-green-400 to-green-800 ">
            <FaCheck />
          </div>
          <span className="text-gray-800 font-medium px-3">Professor</span>
        </button>
      </div>
    </div>
  </div>

  <div className='md:justify-center flex flex-col justify-items-center md:max-w-5xl w-full px-4'>
    <div className="flex flex-col gap-10 py-10 text-blue-950">
      <p className="text-left">Olá Aluno(a),</p>
      <p className="font-bold">Miguel de Cervates Cavalcante de Alcântara Machado</p>
      <p>Sua senha foi cadastrada com sucesso!</p>
      <p className="max-w-2xl">Você já pode usá-la para acessar a área exclusiva onde estão os conteúdos que você
        precisa estudar para participar da ONANO - Olimpíada Nacional de Nanotecnologia. Basta clicar no botão abaixo
        confirmar seus dados e, boa Olimpíada!</p>
    </div>
    <div className="flex items-center justify-center">
      <a href="/cadastro-professor" className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-4 px-8 rounded">
        Concluir cadastro
      </a>
    </div>
    <div className="flex flex-col w-full items-center justify-center relative px-5 py-10">
      <p className="text-blue-950 font-bold text-lg text-center">Tem alguma dúvida ou precisa de mais informações?</p>
      <p className="text-blue-950 text-lg">Entre em contato conosco!</p>
      <p className="text-blue-950 mt-10 text-lg">E-mail: <a
          href="mailto:onanobrasil@gmail.com">onanobrasil@gmail.com</a></p>
    </div>
  </div>

  <footer className="bg-blue-950 hidden md:flex justify-center items-center py-10 px-2 lg:px-0 w-full max-w-5xl">
    <div className='md:justify-between flex flex-col justify-items-center w-full gap-3'>
      <div className='grid lg:flex lg:items-baseline w-full lg:justify-center'>
        <span className="lg:text-sm text-white text-center">Copyright 2024 : : Onano - Olímpíada Nacional de
          Nanotecnologia. : : Todos os direitos reservados.</span>
      </div>
      <div className='flex items-baseline justify-center gap-5 w-auto'>
        <a className='' href="https://sacorp.tec.br/?utm_source=www.onamo.com.br&utm_medium=banner&utm_campaign=slogan"
          target='_blank' rel="noreferrer">
          <picture>
            <img src="/logo-sacorp.svg" alt="logo Sacorp" width={100} height={100} loading="lazy"
              className='lg:w-16 w-14' />
          </picture>
        </a>
        <a href="https://www.gukenz.com.br/" target='_blank' rel="noreferrer">
          <picture>
            <img src="/logo-gukenz.svg" alt="logo Gukenz" width={100} height={100} className='lg:w-16 w-14' />
          </picture>
        </a>
      </div>
    </div>
  </footer>
</main>
);
}