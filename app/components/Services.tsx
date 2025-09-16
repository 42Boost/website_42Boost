export function Services() {
  const services = [
    {
      title: "Développement web & mobile",
      description: "Sites, applications, MVP. Automatisation et scripts sur-mesure. Intégration d'API et solutions SaaS...",
      icon: "💻",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Création numérique",
      description: "UX/UI design, applications et plateformes. Branding et design graphique. Marketing Digital, SEO...",
      icon: "🎨",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data & AI",
      description: "Scraping. Analyse de données. Algorithmes et modèles prédictifs. Automatisation via AI, chatbots...",
      icon: "🤖",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "DevOps & Automatisation",
      description: "Automatisation tâches. Gestion environnements cloud. Conteneurisation et orchestration (Docker, Kubernetes)...",
      icon: "⚙️",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Blockchain & WEB 3.0",
      description: "Développement d'application décentralisée. Interopérabilité et Pont Blockchain. Infrastructure Blockchain, Smart Contract...",
      icon: "🔗",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Cybersécurité",
      description: "Audit et renforcement des systèmes. Sécurisation des applications et des données. Mise en conformité RGPD...",
      icon: "🛡️",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Ce que nous pouvons faire</span>
            <br />
            <span className="text-cyan-400">Pour vous</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Que ce soit pour structurer une idée, identifier des opportunités ou affiner une vision, notre équipe 
            propose des solutions stratégiques adaptées à vos défis. Nous allions{" "}
            <span className="text-cyan-400 font-semibold">design thinking</span>,{" "}
            <span className="text-cyan-400 font-semibold">analyse de données</span> et une touche de créativité pour{" "}
            <span className="text-cyan-400 font-semibold">transformer vos ambitions en actions concrètes</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-cyan-500"
            >
              {/* Background gradient on hover */}
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

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-xl">
                <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${service.color} transform rotate-45 translate-x-4 -translate-y-4 opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Central Diamond Graphic */}
        <div className="flex justify-center mt-16">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 transform rotate-45 rounded-lg opacity-20"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-purple-500 to-cyan-500 transform rotate-45 rounded-lg opacity-30"></div>
            <div className="absolute inset-8 bg-gradient-to-br from-cyan-400 to-blue-500 transform rotate-45 rounded-lg opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}