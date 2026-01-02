
import Hero from "@/components/Hero";
import ChampionsCarousel from "@/components/ChampionsCarousel";
import ContactForm from "@/components/ContactForm";
import WarriorsPath from "@/components/WarriorsPath";
import NutritionArsenal from "@/components/NutritionArsenal";
import ScienceBehindShield from "@/components/ScienceBehindShield";
import SpartanProcess from "@/components/SpartanProcess";
import WarriorFAQ from "@/components/WarriorFAQ";
import FloatingModels from "@/components/FloatingModels";

export default function Home() {
  return (
    <div className="relative w-full">
      
      {/* <FloatingModels /> */}
      
      <Hero />
      
      <WarriorsPath />
      
      <NutritionArsenal />

      <ScienceBehindShield />

      <SpartanProcess />

      <div id="champions">
        <ChampionsCarousel />
      </div>
      <section className="relative w-full py-16 md:py-24 px-4 md:px-8 bg-linear-to-b from-black via-zinc-900 to-black">
        <ContactForm />
      </section>
      <WarriorFAQ />
    </div>
  );
}
