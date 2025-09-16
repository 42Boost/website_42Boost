import type { Route } from "./+types/nos-services";
import { useLanguage } from "../contexts/LanguageContext";
import cluster42Image from "../../assets/images/cluster.jpg";
// import TiltedCard from '../components/TiltedCard';
import RollingGallery from '../components/RollingGallery';
import offreCommercialePdf from "../../assets/documents/Offre commercial 42 Boost.pdf";
  
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nos Services - 42 Boost" },
    { name: "description", content: "Découvrez nos services en développement web, mobile, blockchain, IA, DevOps et cybersécurité." },
  ];
}

export default function NosServices() {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('services.web_mobile.title'),
      description: t('services.web_mobile.description'),
      icon: "💻",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: t('services.design.title'),
      description: t('services.design.description'),
      icon: "🎨",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: t('services.data_ai.title'),
      description: t('services.data_ai.description'),
      icon: "🤖",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: t('services.devops.title'),
      description: t('services.devops.description'),
      icon: "⚙️",
      color: "from-orange-500 to-red-500"
    },
    {
      title: t('services.blockchain.title'),
      description: t('services.blockchain.description'),
      icon: "🔗",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: t('services.cybersecurity.title'),
      description: t('services.cybersecurity.description'),
      icon: "🛡️",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={cluster42Image} 
            alt="42 School Cluster" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-white">{t('services.title').split(' ')[0]}</span>
            <br />
            <span className="text-cyan-400">{t('services.title').split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">{t('services.what_we_do')}</span>
              <br />
              <span className="text-cyan-400">{t('services.for_you')}</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              {t('services.description')}{" "}
              <span className="text-cyan-400 font-semibold">{t('services.design_thinking')}</span>,{" "}
              <span className="text-cyan-400 font-semibold">{t('services.data_analysis')}</span> {t('services.creativity_touch')}{" "}
              <span className="text-cyan-400 font-semibold">{t('services.transform_ambitions')}</span>.
            </p>
          </div>

          {/* Download PDF Link */}
          <div className="text-center mb-12">
            <a 
              href={offreCommercialePdf}
              download="Offre commercial 42 Boost.pdf"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t('services.download_offer')}
            </a>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-cyan-500"
              >
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Découvrir le procédé Link */}
          <div className="text-center mt-16 mb-12">
            <a 
              href="/notre-procede"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105"
            >
              {t('services.discover_process')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="mt-16">
            <RollingGallery autoplay={true} pauseOnHover={false} />
          </div>
        </div>
      </section>
    </div>
  );
}