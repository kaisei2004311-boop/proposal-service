import { Concept } from "@/components/Concept";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { HowToOrder } from "@/components/HowToOrder";
import { Instagram } from "@/components/Instagram";
import { JsonLd } from "@/components/JsonLd";
import { Option } from "@/components/Option";
import { Plan } from "@/components/Plan";
import { Service } from "@/components/Service";

export default function HomePage() {
  return (
    <main>
      <JsonLd />
      <Hero />
      <Concept />
      <Service />
      <Plan />
      <Gallery />
      <HowToOrder />
      <Option />
      <Faq />
      <Instagram />
      <Contact />
    </main>
  );
}
