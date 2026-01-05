export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget?: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string | undefined;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';
