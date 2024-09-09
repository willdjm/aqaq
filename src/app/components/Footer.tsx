export function Footer() {

return (

<>
<footer className="bg-blue-950 hidden md:flex justify-center items-center py-10 px-2 lg:px-0">
    <div className='md:justify-between flex flex-col justify-items-center md:max-w-6xl w-full gap-3'>

        <div className='grid lg:flex lg:items-baseline w-full lg:justify-center'>
            <span className="lg:text-sm text-white text-center">Copyright 2024 : : Onano - Olímpíada Nacional de
                Nanotecnologia. : : Todos os direitos reservados.</span>
        </div>
        <div className='flex items-baseline justify-center gap-5 w-auto'>
            <a className=''
                href="https://sacorp.tec.br/?utm_source=www.onamo.com.br&utm_medium=banner&utm_campaign=slogan"
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

{/* FOOTER MOBILE */}
<footer className="bg-blue-950 flex md:hidden justify-center items-center py-10 px-2">
    <div className='flex flex-col '>

        <div className='flex flex-col items-center w-full justify-center'>
            <p className="lg:text-xs text-white text-center">Copyright 2024</p>
            <p className="lg:text-xs text-white text-center">Onano - Olímpíada Nacional de
            Nanotecnologia.</p>
            <p className="lg:text-xs text-white text-center">Todos os direitos reservados.</p>

        </div>
        <div className='flex items-baseline justify-center gap-5'>
            <a className=''
                href="https://sacorp.tec.br/?utm_source=www.onamo.com.br&utm_medium=banner&utm_campaign=slogan"
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
</>
);
}