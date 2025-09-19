import { Link } from "react-router";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-items-center text-center">

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer.navigation")}</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {t("footer.home")}
                </Link>
              </li>
              <li>
                <a 
                  href="/nos-services" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {t("footer.services")}
                </a>
              </li>
              <li>
                <a 
                  href="/notre-structure" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {t("footer.about")}
                </a>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {t("footer.contact_page")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("footer.legal")}</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/mentions-legales" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {t("footer.mentions")}
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:contact@42boost.fr"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@42boost.fr
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/42-boost-paris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Paris, France
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} 42 Boost. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Développé avec ❤️ à Paris
          </p>
        </div>
      </div>
    </footer>
  );
}