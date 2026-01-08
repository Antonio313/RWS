import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import FormInput from '../ui/FormInput';
import FormTextarea from '../ui/FormTextarea';
import FormSelect from '../ui/FormSelect';
import Button from '../ui/Button';
import type { ConsultationFormData, FormErrors, FormStatus } from '../../types';
import { validateFormData, hasErrors } from '../../utils/validation';
import { sendConsultationEmail } from '../../utils/emailjs';
import { SERVICE_OPTIONS, BUDGET_OPTIONS, SECTION_IDS } from '../../utils/constants';

export default function ConsultationForm() {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));

    // Validate single field on blur
    const fieldErrors = validateFormData({ ...formData });
    if (fieldErrors[field]) {
      setErrors(prev => ({ ...prev, [field]: fieldErrors[field] }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const validationErrors = validateFormData(formData);
    setErrors(validationErrors);

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      service: true,
      message: true
    });

    // Stop if there are errors
    if (hasErrors(validationErrors)) {
      return;
    }

    // Set loading state
    setStatus('loading');

    // Send email
    const result = await sendConsultationEmail(formData);

    if (result.success) {
      setStatus('success');

      // Clear form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          budget: '',
          message: ''
        });
        setTouched({});
        setStatus('idle');
      }, 3000);
    } else {
      setStatus('error');

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <section id={SECTION_IDS.CONTACT} className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader
          title="Let's Work Together"
          subtitle="Tell us about your project and we'll get back to you within 24 hours"
        />

        {/* Success Message */}
        {status === 'success' && (
          <div className="mb-8 p-6 rounded-lg bg-green-500/10 border border-green-500/50 flex items-center gap-4 animate-fade-in">
            <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-green-500 mb-1">Success!</h4>
              <p className="text-green-400">
                Thank you for reaching out! We'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {status === 'error' && (
          <div className="mb-8 p-6 rounded-lg bg-red-500/10 border border-red-500/50 flex items-center gap-4 animate-fade-in">
            <XCircle className="w-8 h-8 text-red-500 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-red-500 mb-1">Oops!</h4>
              <p className="text-red-400">
                Something went wrong. Please try again or email us directly at{' '}
                <a href="mailto:reuelswebservices@gmail.com" className="underline hover:text-red-300">
                  reuelswebservices@gmail.com
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Consultation Form */}
        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Full Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => handleBlur('name')}
              error={touched.name ? errors.name : undefined}
              isValid={touched.name && !errors.name && formData.name.length >= 2}
              placeholder="John Doe"
              required
            />

            <FormInput
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
              error={touched.email ? errors.email : undefined}
              isValid={touched.email && !errors.email && formData.email.includes('@')}
              placeholder="john@example.com"
              required
            />
          </div>

          {/* Phone and Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              onBlur={() => handleBlur('phone')}
              error={touched.phone ? errors.phone : undefined}
              isValid={touched.phone && !errors.phone && formData.phone.length > 0}
              placeholder="(876) 123-4567"
            />

            <FormSelect
              label="Service Interested In"
              name="service"
              value={formData.service}
              onChange={handleChange}
              onBlur={() => handleBlur('service')}
              error={touched.service ? errors.service : undefined}
              isValid={touched.service && !errors.service && formData.service !== ''}
              options={SERVICE_OPTIONS}
              required
            />
          </div>

          {/* Budget */}
          <FormSelect
            label="Budget Range in USD (Optional)"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            options={BUDGET_OPTIONS}
          />

          {/* Message */}
          <FormTextarea
            label="Project Details"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={() => handleBlur('message')}
            error={touched.message ? errors.message : undefined}
            isValid={touched.message && !errors.message && formData.message.length >= 20}
            placeholder="Tell us about your project, your goals, and any specific requirements..."
            rows={6}
            required
          />

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              size="lg"
              className="w-full"
              isLoading={status === 'loading'}
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>

            <p className="text-sm text-gray-500 text-center mt-4">
              We respect your privacy. Your information will never be shared.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
