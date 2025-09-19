import type { Route } from "./+types/junior-entreprises";
import { useLanguage } from "../contexts/LanguageContext";
import juniorEntreprisesImage from "../../assets/images/JE/junior-entreprises.jpg";
import cnjeImage from "../../assets/images/JE/CNJE.png";
import bestJeImage from "../../assets/images/JE/30_best_JE_2025.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Junior-Entreprises - 42 Boost" },
    { name: "description", content: "Découvrez l'univers des Junior-Entreprises et le rôle de la CNJE dans la formation des entrepreneurs de demain." },
  ];
}

export default function JuniorEntreprises() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={juniorEntreprisesImage} 
            alt="Junior-Entreprises" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-white">{t('je.title').split('-')[0]}-</span>
            <span className="text-cyan-400">{t('je.title').split('-')[1]}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {t('je.subtitle')}
          </p>
        </div>
      </section>

      {/* Qu'est-ce qu'une Junior-Entreprise Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">{t('je.what_is.title1')}</span>
              <br />
              <span className="text-cyan-400">{t('je.what_is.title2')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                <span dangerouslySetInnerHTML={{
                  __html: t('je.what_is.description1').replace(
                    'associations étudiantes à vocation économique et pédagogique',
                    '<strong class="text-cyan-400">associations étudiantes à vocation économique et pédagogique</strong>'
                  ).replace(
                    'student associations with economic and educational purposes',
                    '<strong class="text-cyan-400">student associations with economic and educational purposes</strong>'
                  )
                }} />
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {t('je.what_is.description2')}
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="text-2xl font-bold text-cyan-400">+€10M</div>
                  <div className="text-sm text-gray-400">{t('je.stats.revenue')}</div>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="text-2xl font-bold text-cyan-400">2,900</div>
                  <div className="text-sm text-gray-400">{t('je.stats.studies')}</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 h-full">
              <h3 className="text-xl font-bold mb-12 text-cyan-400">{t('je.chart.title')}</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="w-32 text-left">{t('je.chart.business_schools')}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-cyan-400 h-2 rounded-full" style={{width: '58%'}}></div>
                    </div>
                    <span className="text-cyan-400 font-semibold w-8 text-right">58%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="w-32 text-left">{t('je.chart.engineering_schools')}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '29%'}}></div>
                    </div>
                    <span className="text-blue-400 font-semibold w-8 text-right">29%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="w-32 text-left">{t('je.chart.universities')}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{width: '8%'}}></div>
                    </div>
                    <span className="text-green-400 font-semibold w-8 text-right">8%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="w-32 text-left">{t('je.chart.others')}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{width: '5%'}}></div>
                    </div>
                    <span className="text-purple-400 font-semibold w-8 text-right">5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Domaines d'expertise */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="text-cyan-400">{t('je.expertise.title')}</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: t('je.expertise.marketing'), icon: "📈" },
                { name: t('je.expertise.it'), icon: "💻" },
                { name: t('je.expertise.data_science'), icon: "📊" },
                { name: t('je.expertise.pharmaceutical'), icon: "💊" },
                { name: t('je.expertise.engineering'), icon: "⚙️" },
                { name: t('je.expertise.strategy'), icon: "🎯" }
              ].map((domain, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-4 text-center hover:bg-gray-800 transition-colors">
                  <div className="text-3xl mb-2">{domain.icon}</div>
                  <div className="text-sm font-semibold">{domain.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CNJE Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">{t('je.cnje.title').split(' ')[0]}</span>
              <span className="text-cyan-400"> {t('je.cnje.title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-xl text-gray-400">
              {t('je.cnje.full_name')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={cnjeImage}
                alt="CNJE Logo" 
                className="w-100 h-auto mx-auto lg:mx-0 mb-8 lg:mb-0 rounded-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                <span dangerouslySetInnerHTML={{
                  __html: t('je.cnje.description1').replace(
                    '200 Junior-Entreprises',
                    '<strong class="text-cyan-400">200 Junior-Entreprises</strong>'
                  )
                }} />
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {t('je.cnje.description2')}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">200</div>
                  <div className="text-gray-400">{t('je.cnje.stats.je_count')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">3,500</div>
                  <div className="text-gray-400">{t('je.cnje.stats.projects')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">2,000</div>
                  <div className="text-gray-400">{t('je.cnje.stats.clients')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">25,000</div>
                  <div className="text-gray-400">{t('je.cnje.stats.students')}</div>
                </div>
              </div>
              
            </div>
          </div>
            <div className="mt-8 flex justify-center w-full">
              <a 
                href="https://junior-entreprises.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                {t('je.cnje.visit_website')}
              </a>
            </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-white">{t('je.recognition.title').split(' ').slice(0, -1).join(' ')}</span>
            <span className="text-cyan-400"> {t('je.recognition.title').split(' ').slice(-1)[0]}</span>
          </h2>
          
          <div className="bg-gray-900 rounded-xl p-8 mb-8">
            <img 
              src={bestJeImage}
              alt="30 Best Junior-Entreprises 2025" 
              className="w-full max-w-md mx-auto mb-6"
            />
            <p className="text-lg text-gray-300 leading-relaxed">
              <span dangerouslySetInnerHTML={{
                __html: t('je.recognition.description').replace(
                  '44 pays',
                  '<strong class="text-cyan-400">44 pays</strong>'
                ).replace(
                  '44 countries',
                  '<strong class="text-cyan-400">44 countries</strong>'
                )
              }} />
            </p>
          </div>

          <blockquote className="text-xl italic text-gray-300 border-l-4 border-cyan-400 pl-6">
            "{t('je.quote')}"
          </blockquote>

          <div className="mt-12">
            <a 
              href="/nos-services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105"
            >
              {t('je.cta')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}