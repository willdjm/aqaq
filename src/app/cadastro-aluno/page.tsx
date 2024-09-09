"use client"

import { Contact } from "../components/Contatct";
import { Footer } from "../components/Footer";
import { OurPartnersAndSponsors } from "../components/OurPartnersAndSponsors";
import { CadastroAluno } from "./CadastroAluno";
import { FormularioAluno } from "./FormularioAluno copy";





export default function Home() {
  return (
<main>
  <CadastroAluno/>
  <FormularioAluno/>
<OurPartnersAndSponsors/>
<Contact/>
<Footer/>
</main>
  );
}
