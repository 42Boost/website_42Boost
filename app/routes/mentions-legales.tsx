import type { Route } from "./+types/mentions-legales";
import { useLanguage } from "~/contexts/LanguageContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mentions légales - 42 Boost" },
    { name: "description", content: "Mentions légales de 42 Boost - Informations légales et conditions d'utilisation." },
  ];
}

export default function MentionsLegales() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto py-20 px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">{t('legal.title').split(' ')[0]}</span>{" "}
            <span className="text-cyan-400">{t('legal.title').split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-gray-400 text-lg">
            {t('legal.subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          {/* Éditeur du site */}
          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{t('legal.editor.title')}</h2>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 mb-2">
                <strong>{t('legal.editor.company')} :</strong> 42 Boost, {t('legal.editor.association')}
              </p>
              <p className="text-gray-300 mb-2">
                <strong>{t('legal.editor.address')} :</strong> 96 Boulevard Bessières, 75017 Paris, France
              </p>
              <p className="text-gray-300 mb-2">
                <strong>{t('legal.editor.email')} :</strong>{" "}
                <a href="mailto:contact@42boost.fr" className="text-cyan-400 hover:text-cyan-300">
                  contact@42boost.fr
                </a>
              </p>
            </div>
          </section>

          {/* Hébergeur */}
          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{t('legal.hosting.title')}</h2>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300">
                {t('legal.hosting.description')} contact@42boost.fr
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{t('legal.ip.title')}</h2>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                {t('legal.ip.description1')}
              </p>
              <p className="text-gray-300">
                {t('legal.ip.description2')}
              </p>
            </div>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{t('legal.data.title')}</h2>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                {t('legal.data.description1')}
              </p>
              <p className="text-gray-300 mb-4">
                {t('legal.data.description2')}
              </p>
              <p className="text-gray-300">
                {t('legal.data.description3')} contact@42boost.fr
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{t('legal.cookies.title')}</h2>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300">
                {t('legal.cookies.description')}
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{t('legal.liability.title')}</h2>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                {t('legal.liability.description1')}
              </p>
              <p className="text-gray-300">
                {t('legal.liability.description2')}
              </p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{t('legal.contact.title')}</h2>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <p className="text-gray-300 mb-4">
                {t('legal.contact.description')}
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>
                  <strong>{t('legal.contact.email')}</strong>{" "}
                  <a href="mailto:contact@42boost.fr" className="text-cyan-400 hover:text-cyan-300">
                    contact@42boost.fr
                  </a>
                </li>
                <li>
                  <strong>{t('legal.contact.mail')}</strong> 42 Boost, 96 Boulevard Bessières, 75017 Paris, France
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Date de mise à jour */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            {t('legal.last_update')} : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>
    </div>
  );
}