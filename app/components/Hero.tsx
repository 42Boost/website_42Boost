import Logo42Boost from "../../assets/images/Logo_42_Boost.svg";
import ScrollVelocity from './ScrollVelocity';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  return (
    <>
    <section className="relative my-24 flex items-center justify-center overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img 
              src={Logo42Boost}
              alt="42 Boost Logo" 
              className="h-[26rem] mx-auto"
            />
          </div>
          
          {/* Separator Line */}
          <div className="lg:h-96 lg:w-0.5 w-24 h-0.5 bg-cyan-400 flex-shrink-0"></div>
          
          {/* Association and School 42 Presentation */}
          <div className="rounded-lg p-12 bg-gray-900 border border-gray-700 backdrop-blur-sm flex-1 min-h-[24rem] max-w-4xl">
            <div className="text-center flex flex-col justify-center">
              <p className="leading-relaxed text-base">
                <span className="font-bold text-cyan-400">{t('hero.association.boost')}</span>{t('hero.association.description1')}<span className="font-bold text-cyan-400">{t('hero.association.project_managers')}.</span>
              </p>
              <br />
              <p className="leading-relaxed text-base">
                {t('hero.association.description2')}<span className="font-bold text-cyan-400">{t('hero.association.learning')}</span>{t('hero.association.description2_middle')}<span className="font-bold text-cyan-400">{t('hero.association.students')}</span>.
              </p>
              <br />
              <p className="leading-relaxed text-base">
                {t('hero.association.description3')}<span className="font-bold text-cyan-400">{t('hero.association.ranking')} </span>{t('hero.association.description3_end')}
              </p>
              <div className="mt-8">
                <a 
                  href="https://42.fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  {t('hero.discover_42')}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">{t('hero.tagline').split(' ').slice(0, -2).join(' ')}-</span>
            <span className="text-cyan-400">{t('hero.tagline').split(' ').slice(-2).join(' ')}</span>
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/nos-services"
            className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-semibold py-4 px-8 rounded-lg transition-colors text-center"
          >
            {t('hero.discover')}
          </a>
          <a 
            href="/contact"
            className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-semibold py-4 px-8 rounded-lg transition-colors text-center"
          >
            {t('hero.contact')}
          </a>
        </div>
      </div>


    </section>

    {/* Scrolling text section */}
    <div className="relative py-12 overflow-hidden">
      <ScrollVelocity
        texts={[t('hero.scroll.text1'), t('hero.scroll.text2')]} 
        className="custom-scroll-text"
      />
    </div>

    {/* Rejoignez 42 Boost Section */}
    <section className="pb-20 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">{t('hero.join').split('-')[0]}-</span>
            <span className="text-cyan-400">{t('hero.join').split('-')[1]}</span>
          </h2>
        </div>

        {/* Intervenant */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 h-full flex flex-col">
              <div className="text-6xl mb-6">👨‍💻</div>
              <h3 className="text-3xl font-bold text-cyan-400 mb-6">{t('hero.instructor')}</h3>
              <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                {t('hero.instructor.description')}
              </p>
              <div>
                <a 
                  href="/contact"
                  className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-semibold py-3 px-6 rounded-lg transition-colors text-center inline-flex items-center gap-2"
                >
                  {t('hero.instructor.cta')}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Client */}
          <div className="text-center">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 h-full flex flex-col">
              <div className="text-6xl mb-6">🏢</div>
              <h3 className="text-3xl font-bold text-cyan-400 mb-6">{t('hero.client')}</h3>
              <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                {t('hero.client.description')}
              </p>
              <div>
                <a 
                  href="/contact"
                  className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-semibold py-3 px-6 rounded-lg transition-colors text-center inline-flex items-center gap-2"
                >
                  {t('hero.client.cta')}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}