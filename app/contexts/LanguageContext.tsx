import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.services': 'Nos services',
    'nav.structure': 'Notre structure',
    'nav.contact': 'Contact',
    'nav.cta': 'Démarrer un projet',
    
    // Hero
    'hero.tagline': 'Nous façonnons vos inspirations',
    'hero.description': 'L\'innovation au service de vos ambitions. Des solutions à la fois modernes et évolutives, qui s\'adaptent aux défis d\'aujourd\'hui et de demain.',
    'hero.discover': 'Découvrir nos services',
    'hero.contact': 'Nous contacter',
    'hero.join': 'Rejoignez-nous',
    'hero.instructor': 'Intervenant',
    'hero.instructor.description': 'Rejoignez notre équipe d\'experts, développez vos compétences et soyez rétribués en travaillant sur des projets concrets et stimulants.',
    'hero.instructor.cta': 'Devenir intervenant',
    'hero.client': 'Client',
    'hero.client.description': 'Confiez-nous vos projets digitaux et bénéficiez de l\'expertise de nos étudiants pour transformer vos idées.',
    'hero.client.cta': 'Nous contacter',
    'hero.scroll.text1': 'Innovation continue',
    'hero.scroll.text2': 'Expertise reconnue',
    'hero.association.description1': ', Junior-Entreprise de 42 Paris, est une association étudiante qui offre des services technologiques innovants aux entreprises et organisations grâce à une équipe de plus de ',
    'hero.association.description2': '42 Boost s\'appuie sur la pédagogie unique de 42, qui privilégie ',
    'hero.association.description2_middle': ' et le travail en équipe, pour former des étudiants ',
    'hero.association.description3': 'En 2025, 42 s\'est placé à la ',
    'hero.association.description3_end': ' des institutions éducatives les plus innovantes au monde selon le classement WURI (World\'s Universities with Real Impact).',
    'hero.association.boost': '42 Boost',
    'hero.association.project_managers': '10 chefs de projets',
    'hero.association.learning': 'l\'apprentissage par la pratique',
    'hero.association.students': 'compétents et motivés',
    'hero.association.ranking': '3ème place',
    'hero.discover_42': 'Découvrir 42',
    
    // Services Page
    'services.title': 'Nos Services',
    'services.subtitle': 'Des solutions technologiques complètes pour transformer vos idées en réalité digitale',
    'services.what_we_do': 'Ce que nous pouvons faire',
    'services.for_you': 'Pour vous',
    'services.description': 'Que ce soit pour structurer une idée, identifier des opportunités ou affiner une vision, notre équipe propose des solutions stratégiques adaptées à vos défis. Nous allions',
    'services.design_thinking': 'design thinking',
    'services.data_analysis': 'analyse de données',
    'services.creativity_touch': 'et une touche de créativité pour',
    'services.transform_ambitions': 'transformer vos ambitions en actions concrètes',
    'services.download_offer': 'Télécharger notre offre commerciale',
    'services.discover_process': 'Découvrir le procédé',
    'services.web_mobile.title': 'Développement web & mobile',
    'services.web_mobile.description': 'Sites, applications, MVP. Automatisation et scripts sur-mesure. Intégration d\'API et solutions SaaS...',
    'services.design.title': 'Création numérique',
    'services.design.description': 'UX/UI design, applications et plateformes. Branding et design graphique. Marketing Digital, SEO...',
    'services.data_ai.title': 'Data & AI',
    'services.data_ai.description': 'Scraping. Analyse de données. Algorithmes et modèles prédictifs. Automatisation via AI, chatbots...',
    'services.devops.title': 'DevOps & Automatisation',
    'services.devops.description': 'Automatisation tâches. Gestion environnements cloud. Conteneurisation et orchestration (Docker, Kubernetes)...',
    'services.blockchain.title': 'Blockchain & WEB 3.0',
    'services.blockchain.description': 'Développement d\'application décentralisée. Interopérabilité et Pont Blockchain. Infrastructure Blockchain, Smart Contract...',
    'services.cybersecurity.title': 'Cybersécurité',
    'services.cybersecurity.description': 'Audit et renforcement des systèmes. Sécurisation des applications et des données. Mise en conformité RGPD...',
    
    // Process Page
    'process.title': 'Notre Méthodologie',
    'process.subtitle': 'Un processus structuré en 5 étapes pour garantir le succès de votre projet digital',
    'process.step1.title': 'Demande du client',
    'process.step1.description': 'Le processus débute avec la réception de la demande du client, qui exprime son besoin ou son projet. Cette première étape permet d\'initier la relation et de poser les bases de la collaboration.',
    'process.step2.title': 'Planification d\'un rendez-vous',
    'process.step2.description': 'Un rendez-vous est organisé avec le client afin d\'échanger et de cerner précisément ses attentes, ses objectifs et les enjeux liés à sa demande. Cette étape est cruciale pour s\'assurer de la bonne compréhension du projet.',
    'process.step3.title': 'Création et signature d\'un devis',
    'process.step3.description': 'Après avoir défini les contours du projet, un devis est élaboré et présenté au client. Une fois le devis accepté et signé, les intervenants adaptés sont sélectionnés, puis une convention d\'étude est rédigée pour formaliser la mission.',
    'process.step4.title': 'Début de la mission',
    'process.step4.description': 'La mission commence avec l\'intervention des experts choisis. Un chef de projet assure le suivi régulier, veille au bon déroulement des travaux et reste en contact avec le client pour garantir le respect des engagements.',
    'process.step5.title': 'Remise du livrable',
    'process.step5.description': 'À l\'issue de la mission, le livrable final est remis au client. Cette étape clôture le projet et marque la satisfaction des besoins exprimés lors de la demande initiale.',
    'process.cta.title1': 'Prêt à démarrer',
    'process.cta.title2': 'votre projet ?',
    'process.cta.description': 'Discutons de vos besoins et découvrons ensemble comment notre procédé peut transformer vos idées en réalité digitale.',
    'process.cta.contact': 'Nous contacter',
    'process.cta.services': 'Découvrir notre structure',
    
    // Structure Page
    'structure.title': 'Notre Structure',
    'structure.typing.text1': 'Une équipe passionnée',
    'structure.typing.text2': 'Une vision claire',
    'structure.typing.text3': 'Des méthodes éprouvées',
    'structure.vision.title': 'Notre Vision',
    'structure.vision.description': 'Chez 42 Boost, nous croyons en l\'innovation comme moteur de transformation. Notre mission est de façonner l\'avenir numérique en accompagnant nos clients dans leur parcours technologique avec expertise et créativité.',
    'structure.mission.title': 'Mission',
    'structure.mission.description': 'Transformer les idées en solutions technologiques innovantes et durables.',
    'structure.ambition.title': 'Ambition',
    'structure.ambition.description': 'Être le partenaire de référence pour l\'innovation technologique en France.',
    'structure.approach.title': 'Approche',
    'structure.approach.description': 'Agilité, excellence technique et accompagnement personnalisé.',
    'structure.junior_entreprises.title1': 'Découvrez les',
    'structure.junior_entreprises.title2': 'Junior-Entreprises',
    'structure.junior_entreprises.description': 'Découvrez l\'univers des Junior-Entreprises, un mouvement étudiant unique qui forme les entrepreneurs de demain tout en offrant des services de qualité aux entreprises. Un modèle d\'excellence français reconnu internationalement.',
    'structure.junior_entreprises.cta': 'En savoir plus',
    'structure.team.title': 'Qui sommes-nous',
    'structure.team.description': 'Une équipe de passionnés formée à 42, l\'école qui révolutionne l\'apprentissage de la programmation. Nous appliquons les mêmes principes d\'innovation, de collaboration et d\'excellence que nous avons appris.',
    'structure.team.expertise': 'Expertise technique pointue',
    'structure.team.methods': 'Méthodes agiles et collaboratives',
    'structure.team.innovation': 'Innovation continue',
    'structure.team.support': 'Accompagnement personnalisé',
    
    // Junior-Entreprises Page
    'je.title': 'Junior-Entreprises',
    'je.subtitle': 'Un mouvement étudiant unique qui forme les entrepreneurs de demain',
    'je.what_is.title1': 'Qu\'est-ce qu\'une',
    'je.what_is.title2': 'Junior-Entreprise ?',
    'je.what_is.description1': 'Les Junior-Entreprises sont des associations étudiantes à vocation économique et pédagogique, exclusivement gérées par des étudiants au sein d\'établissements d\'enseignement supérieur.',
    'je.what_is.description2': 'Leur mission est double : permettre aux étudiants d\'acquérir une expérience professionnelle concrète tout en proposant des services de qualité aux entreprises.',
    'je.stats.revenue': 'Chiffre d\'affaires annuel en 2023',
    'je.stats.studies': 'Études réalisées',
    'je.chart.title': 'Répartition du CA par type d\'établissement',
    'je.chart.business_schools': 'Écoles de commerce',
    'je.chart.engineering_schools': 'Écoles d\'ingénieurs',
    'je.chart.universities': 'Universités',
    'je.chart.others': 'Autres',
    'je.expertise.title': 'Domaines d\'expertise',
    'je.expertise.marketing': 'Marketing',
    'je.expertise.it': 'IT',
    'je.expertise.data_science': 'Data Science',
    'je.expertise.pharmaceutical': 'Pharmaceutique',
    'je.expertise.engineering': 'Ingénierie',
    'je.expertise.strategy': 'Stratégie',
    'je.cnje.title': 'La CNJE',
    'je.cnje.full_name': 'Confédération Nationale des Junior-Entreprises',
    'je.cnje.description1': 'La CNJE représente et fédère plus de 200 Junior-Entreprises à travers la France, constituant le premier réseau français d\'étudiants-entrepreneurs.',
    'je.cnje.description2': 'Elle accompagne les étudiants dans leur développement professionnel tout en garantissant la qualité des services proposés aux entreprises clientes.',
    'je.cnje.stats.je_count': 'Junior-Entreprises',
    'je.cnje.stats.projects': 'Projets annuels',
    'je.cnje.stats.clients': 'Clients servis',
    'je.cnje.stats.students': 'Étudiants actifs',
    'je.cnje.visit_website': 'Visiter le site CNJE',
    'je.recognition.title': 'Un mouvement reconnu',
    'je.recognition.description': 'Les Junior-Entreprises sont présentes dans plus de 44 pays et organisent tous les deux ans une conférence mondiale sous l\'égide de Junior Enterprises Global.',
    'je.quote': 'Collaborer avec une Junior-Entreprise, c\'est accéder à des services de qualité tout en contribuant à la formation des talents de demain.',
    'je.cta': 'Découvrir nos services',
    
    // Contact Form
    'contact.title': 'CONTACTEZ-NOUS',
    'contact.nom': 'Nom',
    'contact.prenom': 'Prénom',
    'contact.email': 'Email',
    'contact.telephone': 'Téléphone',
    'contact.message': 'Votre message',
    'contact.send': 'Envoyer le message',
    'contact.sending': 'Envoi en cours...',
    'contact.success': '✓ Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.',
    'contact.error': '✗ Une erreur s\'est produite lors de l\'envoi. Veuillez réessayer ou nous contacter directement.',
    'contact.validation.nom_required': 'Le nom est requis',
    'contact.validation.prenom_required': 'Le prénom est requis',
    'contact.validation.email_required': 'L\'email est requis',
    'contact.validation.email_invalid': 'Format d\'email invalide',
    'contact.validation.telephone_required': 'Le téléphone est requis',
    'contact.validation.telephone_invalid': 'Format de téléphone invalide',
    'contact.validation.message_required': 'Le message est requis',
    'contact.validation.recaptcha_required': 'Veuillez compléter la vérification reCAPTCHA',
    'contact.placeholder.nom': 'Votre nom',
    'contact.placeholder.prenom': 'Votre prénom',
    'contact.placeholder.email': 'votre@email.com',
    'contact.placeholder.telephone': '+33 1 23 45 67 89',
    'contact.placeholder.message': 'Décrivez votre projet ou votre demande...',
    
    // French
    'footer.navigation': 'Navigation',
    'footer.legal': 'Légal',
    'footer.contact': 'Contact & Social',
    'footer.mentions': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
    'footer.rights': 'Tous droits réservés.',
    'footer.made': 'Développé avec ❤️ à Paris',
    'footer.home': 'Accueil',
    'footer.services': 'Services',
    'footer.about': 'À propos',
    'footer.contact_page': 'Contact',
    
    // Legal pages
    'legal.title': 'Mentions Légales',
    'legal.subtitle': 'Informations légales et conditions d\'utilisation',
    'legal.last_update': 'Dernière mise à jour',
    'legal.editor.title': 'Éditeur du site',
    'legal.editor.company': 'Raison sociale',
    'legal.editor.association': 'association à but non lucratif',
    'legal.editor.address': 'Adresse',
    'legal.editor.email': 'Email',
    'legal.editor.director': 'Directeur de la publication',
    'legal.hosting.title': 'Hébergeur',
    'legal.hosting.description': 'Ce site est hébergé par :',
    'legal.hosting.name': 'Nom de l\'Hébergeur',
    'legal.hosting.company': 'Raison Sociale',
    'legal.hosting.address': 'Adresse',
    'legal.hosting.phone': 'Numéro de Téléphone',
    'legal.ip.title': 'Propriété intellectuelle',
    'legal.ip.description1': 'L\'ensemble de ce site relève de la législation française et internationale sur le droit d\'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.',
    'legal.ip.description2': 'La reproduction de tout ou partie de ce site sur un support électronique quel qu\'il soit est formellement interdite sauf autorisation expresse de l\'éditeur.',
    'legal.data.title': 'Protection des données personnelles',
    'legal.data.description1': 'Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d\'un droit d\'accès, de rectification, de portabilité et d\'effacement de vos données ou encore de limitation du traitement.',
    'legal.data.description2': 'Les informations collectées via le formulaire de contact sont utilisées uniquement dans le cadre de la gestion de votre demande et ne sont pas transmises à des tiers.',
    'legal.data.description3': 'Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez nous contacter à :',
    'legal.cookies.title': 'Cookies',
    'legal.cookies.description': 'Ce site utilise uniquement des cookies techniques nécessaires au fonctionnement du site. Aucun cookie de traçage ou publicitaire n\'est utilisé sans votre consentement préalable.',
    'legal.liability.title': 'Limitation de responsabilité',
    'legal.liability.description1': 'Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.',
    'legal.liability.description2': 'En conséquence, l\'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive. 42 BOOST - Paris ne pourra être tenu responsable d\'éventuels dommages directs ou indirects résultant de l\'utilisation du site web.',
    'legal.contact.title': 'Contact',
    'legal.contact.description': 'Pour toute question concernant ces mentions légales, vous pouvez nous contacter :',
    'legal.contact.email': 'Par email :',
    'legal.contact.mail': 'Par courrier :'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Our services',
    'nav.structure': 'Our structure',
    'nav.contact': 'Contact',
    'nav.cta': 'Start a project',
    
    // Hero
    'hero.tagline': 'We shape your inspirations',
    'hero.description': 'Innovation at the service of your ambitions. Modern and scalable solutions that adapt to today\'s and tomorrow\'s challenges.',
    'hero.discover': 'Discover our services',
    'hero.contact': 'Contact us',
    'hero.join': 'Join-us',
    'hero.instructor': 'Instructor',
    'hero.instructor.description': 'Join our team of experts, develop your skills and get rewarded while working on concrete and stimulating projects.',
    'hero.instructor.cta': 'Become an instructor',
    'hero.client': 'Client',
    'hero.client.description': 'Entrust us with your digital projects and benefit from the expertise of our student to transform your ideas.',
    'hero.client.cta': 'Contact us',
    'hero.scroll.text1': 'Continuous innovation',
    'hero.scroll.text2': 'Recognized expertise',
    'hero.association.description1': ', Junior-Enterprise of 42 Paris, is a student association that offers innovative technological services to companies and organizations thanks to a team of more than ',
    'hero.association.description2': '42 Boost relies on the unique pedagogy of 42, which favors ',
    'hero.association.description2_middle': ' and teamwork, to train ',
    'hero.association.description3': 'In 2025, 42 ranked ',
    'hero.association.description3_end': ' among the most innovative educational institutions in the world according to the WURI ranking (World\'s Universities with Real Impact).',
    'hero.association.boost': '42 Boost',
    'hero.association.project_managers': '10 project managers',
    'hero.association.learning': 'learning through practice',
    'hero.association.students': 'competent and motivated students',
    'hero.association.ranking': '3rd place',
    'hero.discover_42': 'Discover 42',
    
    // Services Page
    'services.title': 'Our Services',
    'services.subtitle': 'Complete technological solutions to transform your ideas into digital reality',
    'services.what_we_do': 'What we can do',
    'services.for_you': 'For you',
    'services.description': 'Whether it\'s to structure an idea, identify opportunities or refine a vision, our team offers strategic solutions adapted to your challenges. We combine',
    'services.design_thinking': 'design thinking',
    'services.data_analysis': 'data analysis',
    'services.creativity_touch': 'and a touch of creativity to',
    'services.transform_ambitions': 'transform your ambitions into concrete actions',
    'services.download_offer': 'Download our commercial offer',
    'services.discover_process': 'Discover the process',
    'services.web_mobile.title': 'Web & mobile development',
    'services.web_mobile.description': 'Websites, applications, MVP. Custom automation and scripts. API integration and SaaS solutions...',
    'services.design.title': 'Digital creation',
    'services.design.description': 'UX/UI design, applications and platforms. Branding and graphic design. Digital Marketing, SEO...',
    'services.data_ai.title': 'Data & AI',
    'services.data_ai.description': 'Web scraping. Data analysis. Predictive algorithms and models. AI automation, chatbots...',
    'services.devops.title': 'DevOps & Automation',
    'services.devops.description': 'Task automation. Cloud environment management. Containerization and orchestration (Docker, Kubernetes)...',
    'services.blockchain.title': 'Blockchain & WEB 3.0',
    'services.blockchain.description': 'Decentralized application development. Blockchain interoperability and bridges. Blockchain infrastructure, Smart Contracts...',
    'services.cybersecurity.title': 'Cybersecurity',
    'services.cybersecurity.description': 'System audit and hardening. Application and data security. GDPR compliance...',
    
    // Process Page
    'process.title': 'Our Methodology',
    'process.subtitle': 'A structured 5-step process to guarantee the success of your digital project',
    'process.step1.title': 'Client request',
    'process.step1.description': 'The process begins with receiving the client\'s request, where they express their need or project. This first step initiates the relationship and lays the foundation for collaboration.',
    'process.step2.title': 'Meeting planning',
    'process.step2.description': 'A meeting is organized with the client to exchange ideas and precisely understand their expectations, objectives, and challenges related to their request. This step is crucial to ensure proper understanding of the project.',
    'process.step3.title': 'Quote creation and signature',
    'process.step3.description': 'After defining the project scope, a quote is developed and presented to the client. Once the quote is accepted and signed, suitable specialists are selected, and a study agreement is drafted to formalize the mission.',
    'process.step4.title': 'Mission begins',
    'process.step4.description': 'The mission begins with the intervention of chosen experts. A project manager ensures regular follow-up, monitors the progress of work, and stays in contact with the client to guarantee commitment compliance.',
    'process.step5.title': 'Delivery handover',
    'process.step5.description': 'At the end of the mission, the final deliverable is handed over to the client. This step closes the project and marks the satisfaction of the needs expressed in the initial request.',
    'process.cta.title1': 'Ready to start',
    'process.cta.title2': 'your project ?',
    'process.cta.description': 'Let\'s discuss your needs and discover together how our process can transform your ideas into digital reality.',
    'process.cta.contact': 'Contact us',
    'process.cta.services': 'Discover our structure',
    
    // Structure Page
    'structure.title': 'Our Structure',
    'structure.typing.text1': 'A passionate team',
    'structure.typing.text2': 'A clear vision',
    'structure.typing.text3': 'Proven methods',
    'structure.vision.title': 'Our Vision',
    'structure.vision.description': 'At 42 Boost, we believe in innovation as a driver of transformation. Our mission is to shape the digital future by supporting our clients in their technological journey with expertise and creativity.',
    'structure.mission.title': 'Mission',
    'structure.mission.description': 'Transform ideas into innovative and sustainable technological solutions.',
    'structure.ambition.title': 'Ambition',
    'structure.ambition.description': 'To be the reference partner for technological innovation in France.',
    'structure.approach.title': 'Approach',
    'structure.approach.description': 'Agility, technical excellence and personalized support.',
    'structure.junior_entreprises.title1': 'Discover',
    'structure.junior_entreprises.title2': 'Junior-Entreprises',
    'structure.junior_entreprises.description': 'Discover the world of Junior-Entreprises, a unique student movement that trains tomorrow\'s entrepreneurs while offering quality services to companies. A French model of excellence recognized internationally.',
    'structure.junior_entreprises.cta': 'Learn more',
    'structure.team.title': 'Who we are',
    'structure.team.description': 'A team of enthusiasts trained at 42, the school that revolutionizes programming learning. We apply the same principles of innovation, collaboration and excellence that we learned.',
    'structure.team.expertise': 'Advanced technical expertise',
    'structure.team.methods': 'Agile and collaborative methods',
    'structure.team.innovation': 'Continuous innovation',
    'structure.team.support': 'Personalized support',
    
    // Junior-Entreprises Page
    'je.title': 'Junior-Enterprises',
    'je.subtitle': 'A unique student movement that trains tomorrow\'s entrepreneurs',
    'je.what_is.title1': 'What is a',
    'je.what_is.title2': 'Junior-Enterprise?',
    'je.what_is.description1': 'Junior-Enterprises are student associations with economic and educational purposes, exclusively managed by students within higher education institutions.',
    'je.what_is.description2': 'Their mission is twofold: to allow students to gain concrete professional experience while offering quality services to companies.',
    'je.stats.revenue': 'Annual revenue in 2023',
    'je.stats.studies': 'Studies completed',
    'je.chart.title': 'Revenue distribution by institution type',
    'je.chart.business_schools': 'Business schools',
    'je.chart.engineering_schools': 'Engineering schools',
    'je.chart.universities': 'Universities',
    'je.chart.others': 'Others',
    'je.expertise.title': 'Areas of expertise',
    'je.expertise.marketing': 'Marketing',
    'je.expertise.it': 'IT',
    'je.expertise.data_science': 'Data Science',
    'je.expertise.pharmaceutical': 'Pharmaceutical',
    'je.expertise.engineering': 'Engineering',
    'je.expertise.strategy': 'Strategy',
    'je.cnje.title': 'The CNJE',
    'je.cnje.full_name': 'National Confederation of Junior-Enterprises',
    'je.cnje.description1': 'The CNJE represents and federates more than 200 Junior-Enterprises across France, constituting the first French network of student-entrepreneurs.',
    'je.cnje.description2': 'It supports students in their professional development while guaranteeing the quality of services offered to client companies.',
    'je.cnje.stats.je_count': 'Junior-Enterprises',
    'je.cnje.stats.projects': 'Annual projects',
    'je.cnje.stats.clients': 'Clients served',
    'je.cnje.stats.students': 'Active students',
    'je.cnje.visit_website': 'Visit CNJE website',
    'je.recognition.title': 'A recognized movement',
    'je.recognition.description': 'Junior-Enterprises are present in more than 44 countries and organize a world conference every two years under the aegis of Junior Enterprises Global.',
    'je.quote': 'Collaborating with a Junior-Enterprise means accessing quality services while contributing to training tomorrow\'s talents.',
    'je.cta': 'Discover our services',
    
    // Contact Form
    'contact.title': 'CONTACT-US',
    'contact.nom': 'Last name',
    'contact.prenom': 'First name',
    'contact.email': 'Email',
    'contact.telephone': 'Phone',
    'contact.message': 'Your message',
    'contact.send': 'Send message',
    'contact.sending': 'Sending...',
    'contact.success': '✓ Your message has been sent successfully! We will respond as soon as possible.',
    'contact.error': '✗ An error occurred while sending. Please try again or contact us directly.',
    'contact.validation.nom_required': 'Last name is required',
    'contact.validation.prenom_required': 'First name is required',
    'contact.validation.email_required': 'Email is required',
    'contact.validation.email_invalid': 'Invalid email format',
    'contact.validation.telephone_required': 'Phone is required',
    'contact.validation.telephone_invalid': 'Invalid phone format',
    'contact.validation.message_required': 'Message is required',
    'contact.validation.recaptcha_required': 'Please complete the reCAPTCHA verification',
    'contact.placeholder.nom': 'Your last name',
    'contact.placeholder.prenom': 'Your first name',
    'contact.placeholder.email': 'your@email.com',
    'contact.placeholder.telephone': '+1 234 567 890',
    'contact.placeholder.message': 'Describe your project or request...',
    
    // English
    'footer.navigation': 'Navigation',
    'footer.legal': 'Legal',
    'footer.contact': 'Contact & Social',
    'footer.mentions': 'Legal notices',
    'footer.privacy': 'Privacy policy',
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Made with ❤️ in Paris',
    'footer.home': 'Home',
    'footer.services': 'Services',
    'footer.about': 'About',
    'footer.contact_page': 'Contact',
    
    // Legal pages
    'legal.title': 'Legal Notices',
    'legal.subtitle': 'Legal information and terms of use',
    'legal.last_update': 'Last update',
    'legal.editor.title': 'Website editor',
    'legal.editor.company': 'Company name',
    'legal.editor.association': 'non-profit association',
    'legal.editor.address': 'Address',
    'legal.editor.email': 'Email',
    'legal.editor.director': 'Publication director',
    'legal.hosting.title': 'Hosting',
    'legal.hosting.description': 'This website is hosted by :',
    'legal.hosting.name': 'Host Name',
    'legal.hosting.company': 'Company Name',
    'legal.hosting.address': 'Address',
    'legal.hosting.phone': 'Phone Number',
    'legal.ip.title': 'Intellectual property',
    'legal.ip.description1': 'The entire website is subject to French and international legislation on copyright and intellectual property. All reproduction rights are reserved, including for downloadable documents and iconographic and photographic representations.',
    'legal.ip.description2': 'The reproduction of all or part of this site on any electronic medium is strictly prohibited without the express authorization of the publisher.',
    'legal.data.title': 'Personal data protection',
    'legal.data.description1': 'In accordance with the General Data Protection Regulation (GDPR), you have the right to access, rectify, portability and erasure of your data or limitation of processing.',
    'legal.data.description2': 'Information collected via the contact form is used only for managing your request and is not transmitted to third parties.',
    'legal.data.description3': 'To exercise these rights or for any questions about the processing of your data, you can contact us at:',
    'legal.cookies.title': 'Cookies',
    'legal.cookies.description': 'This site uses only technical cookies necessary for the site to function. No tracking or advertising cookies are used without your prior consent.',
    'legal.liability.title': 'Limitation of liability',
    'legal.liability.description1': 'The information contained on this site is as accurate as possible and the site is periodically updated, but may nevertheless contain inaccuracies, omissions or gaps.',
    'legal.liability.description2': 'Consequently, the user acknowledges using this information under their exclusive responsibility. 42 BOOST - Paris cannot be held responsible for any direct or indirect damage resulting from the use of the website.',
    'legal.contact.title': 'Contact',
    'legal.contact.description': 'For any questions regarding these legal notices, you can contact us:',
    'legal.contact.email': 'By email:',
    'legal.contact.mail': 'By mail:'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize language from localStorage immediately to prevent hydration mismatch
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
        return savedLanguage;
      }
    }
    return 'en';
  });

  // Save language preference to localStorage
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const languageTranslations = translations[language];
    const translationKey = key as keyof typeof translations['fr'];
    const translation = languageTranslations?.[translationKey];
    
    if (!translation) {
      console.warn(`Missing translation for key: "${key}" in language: "${language}"`);
      return key;
    }
    
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}