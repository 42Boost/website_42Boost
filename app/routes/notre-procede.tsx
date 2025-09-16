import type { Route } from "./+types/notre-procede";
import { useLanguage } from "../contexts/LanguageContext";
import cluster42Image from "../../assets/images/cluster.jpg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Notre Procédé - 42 Boost" },
    { name: "description", content: "Découvrez notre méthodologie de développement et notre processus de transformation digitale." },
  ];
}

export default function NotreProcede() {
  const { t } = useLanguage();
  
  const processSteps = [
    {
      step: "01",
      title: t('process.step1.title'),
      description: t('process.step1.description'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02", 
      title: t('process.step2.title'),
      description: t('process.step2.description'),
      color: "from-cyan-500 to-green-500"
    },
    {
      step: "03",
      title: t('process.step3.title'),
      description: t('process.step3.description'),
      color: "from-green-500 to-yellow-500"
    },
    {
      step: "04",
      title: t('process.step4.title'),
      description: t('process.step4.description'),
      color: "from-yellow-500 to-orange-500"
    },
    {
      step: "05",
      title: t('process.step5.title'),
      description: t('process.step5.description'),
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={cluster42Image} 
            alt="42 School Cluster" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-white">{t('process.title').split(' ')[0]}</span>
            <br />
            <span className="text-cyan-400">{t('process.title').split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Process Steps - Flow Chart Style */}
          <div className="relative">
            
            {/* Process Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((process, index) => (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 relative z-10 h-full flex flex-col">
                    {/* Step Number */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${process.color} text-black font-bold text-lg mb-4`}>
                      {process.step}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4">
                      {process.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed flex-grow">
                      {process.description}
                    </p>
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${process.color} opacity-0 hover:opacity-5 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Arrow for larger screens */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                      <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center border-2 border-cyan-500">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-white">{t('process.cta.title1')}</span>
            <span className="text-cyan-400"> {t('process.cta.title2')}</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            {t('process.cta.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105"
            >
              {t('process.cta.contact')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="/nos-services"
              className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-semibold py-4 px-8 rounded-lg transition-colors text-center"
            >
              {t('process.cta.services')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}