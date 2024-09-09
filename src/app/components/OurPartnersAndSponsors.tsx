"use client"

export function OurPartnersAndSponsors() {

return (

<div>
<picture>
<img src="/img-parceiros.png" className="object-cover w-full h-full" alt="" />
                    </picture>
    <div className="flex flex-col justify-center items-center bg-amber-400 w-full">

<div className='md:justify-center flex flex-col justify-items-center md:max-w-6xl w-full px-4'>
    
<div className="flex flex-col items-center justify-center w-full gap-12">
            <h2 className="text-white font-bold uppercase md:text-4xl text-2xl text-center pt-5 md:pt-0">NOSSOS PARCEIROS E PATROCINADORES</h2>
            <div className="w-full flex flex-col items-center justify-center">
                <p className="flex items-center justify-center mb-2 text-base text-white">Apoio:</p>
                <div className="md:flex md:flex-row flex flex-col w-full items-center justify-center gap-8 bg-white max-w-3xl rounded-lg md:h-32 h-80 md:py-0">
                    <picture>
                        <img src="/apoio-cnpq.webp" className="" alt="" />
                    </picture>
                    <picture>
                        <img src="/apoio-governo.webp" className="" alt="" />
                    </picture>
                    <picture>
                        <img src="/apoio-mackenzie.webp" className="" alt="" />
                    </picture>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center ">
                <p className="flex items-center justify-center mb-2 text-base text-white">Parceiros:</p>
                <div className="md:flex md:flex-row flex flex-col w-full items-center justify-center gap-8 bg-white max-w-3xl rounded-lg md:h-32 h-80 md:py-0">
                    <picture>
                        <img src="/parceiro-ensinano.webp" className="" alt="" />
                    </picture>
                    <picture>
                        <img src="/parceiro-medalhei.webp" className="" alt="" />
                    </picture>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center ">
                <p className="flex items-center justify-center mb-2 text-base text-white">Patrocinadores:</p>
                <div className="md:flex md:flex-row flex flex-col w-full items-center justify-center gap-8 bg-white max-w-3xl rounded-lg md:h-32 h-80 md:py-0">
                    <picture>
                        <img src="" className="" alt="" />
                    </picture>
                    <picture>
                        <img src="" className="" alt="" />
                    </picture>
                </div>
            </div>
        </div>
</div>
</div>
</div>

);
}