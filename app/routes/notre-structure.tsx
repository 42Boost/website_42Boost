import type { Route } from "./+types/notre-structure";
import { useLanguage } from "../contexts/LanguageContext";
import vision42Image from "../../assets/images/vision.png";
import team42Image from "../../assets/images/42up.JPG.webp";
import juniorEntreprisesImage from "../../assets/images/JE/junior-entreprises.jpg";
import TextType from '../components/TextType';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Notre Structure - 42 Boost" },
    { name: "description", content: "Découvrez la structure et l'équipe de 42 Boost, notre vision et notre approche." },
  ];
}

export default function NotreStructure() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={vision42Image} 
            alt="Vision 42 Boost" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-white">
              {t('structure.title').split(' ')[0]}
            </span>
            <br />
            <span className="text-cyan-400">{t('structure.title').split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-4xl md:text-6xl text-gray-300 max-w-4xl mx-auto">
            <TextType 
              text={[t('structure.typing.text1'), t('structure.typing.text2'), t('structure.typing.text3')]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-white">{t('structure.vision.title').split(' ')[0]}</span>
              <span className="text-cyan-400"> {t('structure.vision.title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {t('structure.vision.description')}
            </p>
          </div>

          {/* Placeholder Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-colors">
              <div className="text-4xl mb-4 text-cyan-400">🎯</div>
              <h3 className="text-xl font-bold mb-4">{t('structure.mission.title')}</h3>
              <p className="text-gray-400">
                {t('structure.mission.description')}
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-colors">
              <div className="text-4xl mb-4 text-cyan-400">🚀</div>
              <h3 className="text-xl font-bold mb-4">{t('structure.ambition.title')}</h3>
              <p className="text-gray-400">
                {t('structure.ambition.description')}
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-colors">
              <div className="text-4xl mb-4 text-cyan-400">⚡</div>
              <h3 className="text-xl font-bold mb-4">{t('structure.approach.title')}</h3>
              <p className="text-gray-400">
                {t('structure.approach.description')}
              </p>
            </div>
          </div>

          {/* Découvrez les Junior-Entreprises Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-white">{t('structure.junior_entreprises.title1')}</span>
              <br />
              <span className="text-cyan-400">{t('structure.junior_entreprises.title2')}</span>
            </h2>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300 max-w-4xl mx-auto">
              <img 
                src={juniorEntreprisesImage}
                alt="Junior-Entreprises" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                {t('structure.junior_entreprises.description')}
              </p>
              <a 
                href="/junior-entreprises"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105"
              >
                {t('structure.junior_entreprises.cta')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-white">{t('structure.team.title').split(' ').slice(0, -1).join(' ')}-</span>
                <span className="text-cyan-400">{t('structure.team.title').split(' ').slice(-1)[0]}</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                {t('structure.team.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">{t('structure.team.expertise')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">{t('structure.team.methods')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">{t('structure.team.innovation')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">{t('structure.team.support')}</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={team42Image} 
                alt="Équipe 42 Boost" 
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}