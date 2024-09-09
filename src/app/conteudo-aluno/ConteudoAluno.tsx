import { FaCheck } from "react-icons/fa";
import { Navbar } from "../components/Navbar";

export function ConteudoAluno() {

const cardData = [
// Replicamos a mesma informação para 9 cards
{ id: 1, imgSrc: "/img-conteudo.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." },
{ id: 2, imgSrc: "/img-conteudo.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." },
{ id: 3, imgSrc: "/img-conteudo.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." },
{ id: 4, imgSrc: "/img-conteudo.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." },
{ id: 5, imgSrc: "/img-conteudo.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." },
{ id: 6, imgSrc: "/img-conteudo.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." },
{ id: 7, imgSrc: "/img-conteudo.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." },
{ id: 8, imgSrc: "/img-conteudo.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." },
{ id: 9, imgSrc: "/img-conteudo.png", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." }
];

return (
<>
  <div className="relative w-full h-screen md:h-auto overflow-hidden">
    <picture className="object-cover w-full h-full">
      <img src="/bg-conteudoaluno.png" className="w-full h-full object-cover" alt="Background" />
    </picture>
    {/* Navbar */}
    <div className="absolute top-0 left-0 w-full z-50">
      <Navbar />
    </div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-40">
      <div className="flex items-start md:items-center justify-center md:space-x-4 w-full md:max-w-6xl p-6 md:p-0">
        <picture className=" w-full relative">
          <img src="/logobanner.png" className="hidden md:block relative pt-10 overflow-hidden" alt="" />
          <img src="/logo-onano-mobile.png" className="block md:hidden relative" alt="" />
        </picture>
      </div>
      <div
        className="md:flex md:flex-row flex flex-col items-center md:justify-end justify-center gap-5 md:gap-0 md:space-x-4 w-full h-full md:max-w-6xl bottom-10 relative">
        <button className="flex items-center bg-gray-200 rounded-md border border-gray-200">
          <div
            className="flex items-center justify-center rounded-l-md w-10 h-10 bg-gradient-to-b from-amber-400 to-amber-600">
            <FaCheck />
          </div>
          <span className="text-gray-800 font-medium px-3">Aluno</span>
        </button>
        <div>
          <span className="font-bold text-4xl">
            Bem-vindo(a)!
          </span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <picture>
            <img src="/profile.png" className="" alt="Background" />
          </picture>
          <div className="flex flex-col">
            <span className="font-bold">Miguel de Cerv...</span>
            <span className="text-xs">miguel@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-center items-center md:py-20 mb-10 px-2 lg:px-0">
    <div className='md:justify-between flex flex-col justify-items-center md:max-w-6xl w-full gap-3'>
      <div className="border-l-[7px] border-green-900 flex flex-col justify-center gap-5">
        <p className="text-blue-950 pl-5 md:text-3xl font-bold md:max-w-4xl text-xl md:text-justify">Aqui estão todos os
          conteúdos organizados por assunto para você acessar e participar da ONANO.</p>
        <div className="md:flex md:flex-row flex flex-col items-center justify-between gap-5 md:gap-0">
          <p className="text-blue-950 pl-5 text-base font-bold pt-4">Atenção.<span className="font-normal"> Para liberar
              os conteúdos é preciso concluir o seu cadastro.</span></p>
          <a href="/cadastro-aluno" className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-4 px-8 rounded">
            Concluir cadastro
          </a>
        </div>
      </div>
      {/* conteudo grade */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:pt-40 pt-16">
        {cardData.map(card => (
        <div key={card.id} className="max-w-sm rounded overflow-hidden">
          <picture>
            <img className="w-full" src={card.imgSrc} alt="Card Image" />
          </picture>
          <div className="px-2 py-4">
            <p className="text-lg">
              {card.text}
            </p>
          </div>
        </div>
        ))}
      </div>
    </div>
  </div>
</>
);
}