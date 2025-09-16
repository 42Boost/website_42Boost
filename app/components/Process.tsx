export function Process() {
  const steps = [
    {
      number: "1",
      title: "Demande du client",
      description: "",
      icon: "📞"
    },
    {
      number: "2", 
      title: "Planification d'un rendez-vous afin de comprendre les besoins du client",
      description: "",
      icon: "👥"
    },
    {
      number: "3",
      title: "Création et signature d'un devis. Sélection d'un/des intervenant(s) puis création d'une convention d'étude",
      description: "",
      icon: "📄"
    },
    {
      number: "4",
      title: "Début de la mission avec l'(les) intervenant(s) et suivi régulier assuré par un chef de projet",
      description: "",
      icon: "🚀"
    },
    {
      number: "5",
      title: "Remise du livrable",
      description: "",
      icon: "🎯"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-white text-black px-8 py-4 rounded-tl-3xl rounded-br-3xl mb-8 transform -rotate-1">
            <h2 className="text-3xl md:text-4xl font-bold">
              Un procédé simple
              <br />
              et efficace
            </h2>
          </div>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-colors">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      {step.title}
                    </h3>
                    {step.description && (
                      <p className="text-gray-400">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Step number and icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl border-4 border-black">
                    {step.number}
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">
                    {step.icon}
                  </div>
                </div>

                {/* Visual element for step 2 and 5 */}
                {step.number === "2" && (
                  <div className="flex-1 flex justify-center">
                    <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>
                )}

                {step.number === "5" && (
                  <div className="flex-1 flex justify-center">
                    <div className="grid grid-cols-2 gap-2 w-32 h-24">
                      <div className="bg-yellow-400 rounded"></div>
                      <div className="bg-green-400 rounded"></div>
                      <div className="bg-purple-400 rounded"></div>
                      <div className="bg-pink-400 rounded"></div>
                    </div>
                  </div>
                )}

                {/* Empty space for other steps */}
                {!["2", "5"].includes(step.number) && <div className="flex-1"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <a 
            href="/contact"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Commencer votre projet
          </a>
        </div>
      </div>
    </section>
  );
}