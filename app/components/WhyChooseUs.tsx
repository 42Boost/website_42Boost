export function WhyChooseUs() {
  const values = [
    {
      title: "Innovation continue",
      description: "L'innovation au cœur de nos actions. Des solutions à la fois modernes et évolutives, qui s'adaptent aux défis d'aujourd'hui et de demain.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Expertise reconnue",
      description: "Une équipe jeune passionnée, expérimentée et à l'écoute de vos attentes.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Des résultats concrets",
      description: "Nos solutions sont pensées pour avoir un impact réel et mesurable, afin que chaque projet que nous réalisons génère de la valeur et des résultats durables.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Visibilité continue",
      description: "Une communication ouverte et transparente. Vous serez impliqué à chaque étape, de la conception à la mise en œuvre.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      {/* Background building image area */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-to-l from-cyan-500/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <div className="space-y-2 mb-8">
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                <span className="mr-4">→</span>Why You
              </h3>
              <h4 className="text-2xl font-semibold text-white ml-12">Choose us</h4>
            </div>

            <div className="space-y-2 mb-12">
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                <span className="mr-4">→</span>Make Right
              </h3>
              <h4 className="text-2xl font-semibold text-white ml-12">Decision</h4>
            </div>
          </div>

          {/* Right side - Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:bg-gray-800/50"
              >
                <div className="text-cyan-400 mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote section */}
        <div className="mt-20 text-center">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -top-4 -left-4 text-6xl text-cyan-400/30 font-serif">"</div>
            <blockquote className="text-xl md:text-2xl font-light text-gray-300 italic">
              Une solution innovante qui a répondu à nos besoins spécifiques, avec une{" "}
              <span className="text-cyan-400 font-semibold">exécution impeccable</span>.
            </blockquote>
            <div className="absolute -bottom-4 -right-4 text-6xl text-cyan-400/30 font-serif">"</div>
          </div>
        </div>
      </div>
    </section>
  );
}