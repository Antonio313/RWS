import emailjs from '@emailjs/browser';
import type { ConsultationFormData } from '../types';

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

export interface EmailResponse {
  success: boolean;
  message: string;
}

export const sendConsultationEmail = async (
  formData: ConsultationFormData
): Promise<EmailResponse> => {
  try {
    // Check if EmailJS is configured
    if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
      console.warn('EmailJS is not configured. Please add credentials to .env.local');
      return {
        success: false,
        message: 'Email service is not configured. Please contact us directly at reuelswebservices@gmail.com'
      };
    }

    // Template parameters for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      service: formData.service,
      budget: formData.budget || 'Not specified',
      message: formData.message,
      to_name: 'Reuel\'s Web Services',
    };

    // Send email using EmailJS
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    return {
      success: true,
      message: 'Thank you! We\'ll get back to you within 24 hours.'
    };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      message: 'Oops! Something went wrong. Please try again or email us directly at reuelswebservices@gmail.com'
    };
  }
};
