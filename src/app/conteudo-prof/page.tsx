"use client"

import { Contact } from "../components/Contatct";
import { Footer } from "../components/Footer";
import { OurPartnersAndSponsors } from "../components/OurPartnersAndSponsors";
import { ConteudoProf } from "./ConteudoProf";





export default function Home() {
  return (
<main>
<ConteudoProf/>
<OurPartnersAndSponsors/>
<Contact/>
<Footer/>
</main>
  );
}
