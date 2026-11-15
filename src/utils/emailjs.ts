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
        message: 'The form isn\'t set up yet. Email me at reuelswebservices@gmail.com.'
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
      message: 'Message sent.'
    };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      message: 'That didn\'t send. Try again, or email me at reuelswebservices@gmail.com.'
    };
  }
};
