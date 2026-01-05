import type { ConsultationFormData, FormErrors } from '../types';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  // Accept formats: 1234567890, 123-456-7890, (123) 456-7890, +1 123 456 7890
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const validateFormData = (data: ConsultationFormData): FormErrors => {
  const errors: FormErrors = {};

  // Name validation
  if (!data.name.trim()) {
    errors.name = 'Name is required';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation (optional but must be valid if provided)
  if (data.phone.trim() && !validatePhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  // Service validation
  if (!data.service || data.service === '') {
    errors.service = 'Please select a service';
  }

  // Message validation
  if (!data.message.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters';
  }

  return errors;
};

export const hasErrors = (errors: FormErrors): boolean => {
  return Object.keys(errors).length > 0;
};
