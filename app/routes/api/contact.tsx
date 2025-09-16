import { data } from "react-router";
import type { Route } from "./+types/contact";
import nodemailer from "nodemailer";

export async function action({ request }: Route.ActionArgs) {
  if (request.method !== 'POST') {
    return data({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const formData = await request.json();
    const { nom, prenom, email, telephone, message, recaptchaToken } = formData;

    // Validate required fields
    if (!nom || !prenom || !email || !telephone || !message) {
      return data({ error: 'Tous les champs sont requis' }, { status: 400 });
    }

    // Verify reCAPTCHA token
    if (!recaptchaToken) {
      return data({ error: 'reCAPTCHA manquant' }, { status: 400 });
    }

    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.REACT_APP_SECRET_KEY || '',
        response: recaptchaToken,
      }),
    });

    const recaptchaResult = await recaptchaResponse.json();
    
    if (!recaptchaResult.success) {
      return data({ error: 'Échec de la vérification reCAPTCHA' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return data({ error: 'Format d\'email invalide' }, { status: 400 });
    }

    // Create transporter - Using Gmail as example
    // Note: You'll need to set up environment variables for production
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_CONTACT,
      subject: `Nouveau message de contact - ${nom} ${prenom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #06b6d4; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">
            Nouveau message de contact - 42 Boost
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Informations du contact</h3>
            <p><strong>Nom:</strong> ${nom}</p>
            <p><strong>Prénom:</strong> ${prenom}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Téléphone:</strong> ${telephone}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #06b6d4; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="text-align: center; margin: 30px 0; padding: 20px; background-color: #f1f5f9; border-radius: 8px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              Ce message a été envoyé depuis le formulaire de contact du site web 42 Boost.
            </p>
            <p style="margin: 5px 0 0 0; color: #666; font-size: 12px;">
              Date: ${new Date().toLocaleString('fr-FR')}
            </p>
          </div>
        </div>
      `,
      text: `
        Nouveau message de contact - 42 Boost
        
        Informations du contact:
        Nom: ${nom}
        Prénom: ${prenom}
        Email: ${email}
        Téléphone: ${telephone}
        
        Message:
        ${message}
        
        Date: ${new Date().toLocaleString('fr-FR')}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return data({ success: true, message: 'Email envoyé avec succès' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return data({ error: 'Erreur lors de l\'envoi de l\'email' }, { status: 500 });
  }
}