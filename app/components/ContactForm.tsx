import { useState, useRef, useEffect } from "react";
import { useLanguage } from '../contexts/LanguageContext';
import TextPressure from './TextPressure';
import ReCAPTCHA from "react-google-recaptcha";

export function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isClient, setIsClient] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nom.trim()) {
      newErrors.nom = t('contact.validation.nom_required');
    }

    if (!formData.prenom.trim()) {
      newErrors.prenom = t('contact.validation.prenom_required');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.validation.email_required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.validation.email_invalid');
    }

    if (!formData.telephone.trim()) {
      newErrors.telephone = t('contact.validation.telephone_required');
    } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.telephone)) {
      newErrors.telephone = t('contact.validation.telephone_invalid');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.validation.message_required');
    }

    // reCAPTCHA validation will be done in handleSubmit

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Get reCAPTCHA token
    const recaptchaToken = recaptchaRef.current?.getValue();
    
    if (!recaptchaToken) {
      setErrors(prev => ({ ...prev, recaptcha: t('contact.validation.recaptcha_required') }));
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: recaptchaToken
        }),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          message: ""
        });
        recaptchaRef.current?.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleRecaptchaChange = (value: string | null) => {
    if (value && errors.recaptcha) {
      setErrors(prev => ({ ...prev, recaptcha: "" }));
    }
  };

  return (
    <section className="py-20 px-6 relative">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-48 h-48 border-2 border-cyan-400 rotate-12 rounded-lg"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-cyan-400 -rotate-12"></div>
        
        {/* Hexagonal pattern */}
        <div className="absolute right-0 top-0 w-1/3 h-full">
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-5">
            <defs>
              <pattern id="contact-form-hexagons" x="0" y="0" width="40" height="35" patternUnits="userSpaceOnUse">
                <polygon points="20,2 6,11 6,24 20,33 34,24 34,11" stroke="#06b6d4" strokeWidth="1" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-form-hexagons)"/>
          </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 ">
        {/* Header */}

        <div style={{position: 'relative', height: '300px'}}>
          <TextPressure
            text={t('contact.title')}
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-4 bg-gray-900/50 rounded-xl p-6 border border-gray-700">
            <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:contact@42boost.fr" className="hover:text-cyan-300 text-gray-300 font-semibold transition-colors">
              contact@42boost.fr
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 bg-gray-900/50 rounded-xl p-6 border border-gray-700">
            <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <div className="text-gray-300">
              <div>96 Boulevard Bessières,</div>
              <div>75017, Paris</div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nom */}
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.nom')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-gray-900 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors text-lg ${
                    errors.nom ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
                  }`}
                  placeholder={t('contact.placeholder.nom')}
                />
                {errors.nom && <p className="mt-1 text-sm text-red-500">{errors.nom}</p>}
              </div>

              {/* Prénom */}
              <div>
                <label htmlFor="prenom" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.prenom')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-gray-900 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors text-lg ${
                    errors.prenom ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
                  }`}
                  placeholder={t('contact.placeholder.prenom')}
                />
                {errors.prenom && <p className="mt-1 text-sm text-red-500">{errors.prenom}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.email')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-gray-900 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors text-lg ${
                    errors.email ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
                  }`}
                  placeholder={t('contact.placeholder.email')}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              {/* Téléphone */}
              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-300 mb-2">
                  {t('contact.telephone')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-gray-900 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors text-lg ${
                    errors.telephone ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
                  }`}
                  placeholder={t('contact.placeholder.telephone')}
                />
                {errors.telephone && <p className="mt-1 text-sm text-red-500">{errors.telephone}</p>}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                {t('contact.message')} <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-6 py-4 bg-gray-900 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors resize-vertical text-lg ${
                  errors.message ? 'border-red-500' : 'border-gray-700 hover:border-gray-600'
                }`}
                placeholder={t('contact.placeholder.message')}
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>
            {/* reCAPTCHA */}
            <div>
              {isClient && (
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={handleRecaptchaChange}
                  theme="dark"
                />
              )}
              {!isClient && (
                <div className="h-20 bg-gray-800 rounded border-2 border-gray-600 flex items-center justify-center">
                  <span className="text-gray-400">Loading reCAPTCHA...</span>
                </div>
              )}
              {errors.recaptcha && <p className="mt-2 text-sm text-red-500">{errors.recaptcha}</p>}
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? t('contact.sending') : t('contact.send')}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="text-center p-4 bg-green-900/30 border border-green-500 rounded-lg">
                <p className="text-green-400">{t('contact.success')}</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="text-center p-4 bg-red-900/30 border border-red-500 rounded-lg">
                <p className="text-red-400">{t('contact.error')}</p>
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}