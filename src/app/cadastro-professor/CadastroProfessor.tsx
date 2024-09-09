import { Navbar } from "../components/Navbar";

export function CadastroProfessor() {

return (
<>
  <div className="relative w-full h-screen md:h-auto overflow-hidden">
    <picture className="object-cover w-full h-full">
      <img src="/bg-conteudoprof.png" className="w-full h-full object-cover" alt="Background" />
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
  <div className="flex justify-center items-center px-2 lg:px-0">
    <div className='md:justify-between flex flex-col justify-items-center md:max-w-6xl w-full gap-3'>
      <div className="border-l-[7px] border-green-900 flex flex-col justify-center gap-1">
        <p className="text-blue-950 pl-5 md:text-3xl font-bold md:max-w-4xl text-xl md:text-justify">Cadastro</p>
          <p className="text-blue-950 pl-5 text-base font-bold pt-2">Atenção.<span className="font-normal"> Para liberar
          os conteúdos é preciso concluir o seu cadastro.</span></p>
      </div>
    </div>
  </div>
</>
);
}