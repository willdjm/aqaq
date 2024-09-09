"use client"

import { Contact } from "../components/Contatct";
import { Footer } from "../components/Footer";
import { OurPartnersAndSponsors } from "../components/OurPartnersAndSponsors";
import { ConteudoAluno } from "./ConteudoAluno";





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
