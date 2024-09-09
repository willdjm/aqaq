"use client"

import { Contact } from "../components/Contatct";
import { Footer } from "../components/Footer";
import { OurPartnersAndSponsors } from "../components/OurPartnersAndSponsors";
import { CadastroProfessor } from "./CadastroProfessor";
import { FormularioProfessor } from "./FormularioProf";

export default function Home() {
return (
<main>
<CadastroProfessor/>
<FormularioProfessor/>
<OurPartnersAndSponsors/>
<Contact/>
<Footer/>
</main>
);
}
