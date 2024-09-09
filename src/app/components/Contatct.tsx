"use client"

export function Contact() {
    return (
        <div id="Contact" className="relative bg-Teal-600 z-20">
            {/* Div vermelha */}
            <div className="w-full bg-amber-400 h-40">

            </div>
            <div className="relative">
                    {/* Imagem centralizada e sobrepondo a linha entre vermelho e amarelo */}
                    <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-center">
                        <picture>
                            <img src="/img-contact.webp" className="px-4" alt="" />
                        </picture>
                    </div>
                </div>
            {/* Div amarela */}
            <div className="w-full items-center justify-center h-40"></div>
            <div className="flex flex-col w-full items-center justify-center relative px-5 py-10">
            <p className="text-blue-950 font-bold text-lg text-center">Tem alguma dúvida ou precisa de mais informações?</p>
            <p className="text-blue-950 text-lg">Entre em contato conosco!</p>
            <p className="text-blue-950 mt-10 text-lg">E-mail: <a href="mailto:onanobrasil@gmail.com">onanobrasil@gmail.com</a></p>
        </div>
        </div>
    );
}
