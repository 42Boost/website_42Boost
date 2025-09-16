import type { Route } from "./+types/home";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Process } from "../components/Process";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "42 Boost - Nous façonnons vos inspirations" },
    { name: "description", content: "Solutions innovantes en développement web, mobile, blockchain, IA et cybersécurité. Nous transformons vos ambitions en actions concrètes." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      {/* <div id="services">
        <Services />
      </div> */}
      {/* <div id="about">
        <WhyChooseUs />
      </div> */}
      {/* <div id="process">
        <Process />
      </div> */}
    </div>
  );
}
