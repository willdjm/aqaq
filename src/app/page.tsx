"use client"

import { Contact } from "./components/Contatct";
import { ConteudoAluno } from "./conteudo-aluno/ConteudoAluno";
import { Footer } from "./components/Footer";
import { OurPartnersAndSponsors } from "./components/OurPartnersAndSponsors";



export default function Home() {
  return (
<main>
<ConteudoAluno/>
<OurPartnersAndSponsors/>
<Contact/>
<Footer/>
</main>
  );
}
