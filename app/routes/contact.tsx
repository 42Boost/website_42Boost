import type { Route } from "./+types/contact";
import { ContactForm } from "../components/ContactForm";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact - 42 Boost" },
    { name: "description", content: "Contactez 42 Boost pour vos projets de développement web, mobile, blockchain, IA et cybersécurité." },
  ];
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ContactForm />
    </div>
  );
}