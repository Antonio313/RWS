import { useEffect, useState } from 'react';
import type { ChangeEvent, CSSProperties, FormEvent } from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import type { ConsultationFormData, FormErrors, FormStatus } from '../../types';
import { validateFormData, hasErrors } from '../../utils/validation';
import { sendConsultationEmail } from '../../utils/emailjs';
import { PREFILL_EVENT, SECTION_IDS, SERVICE_OPTIONS } from '../../utils/constants';
import type { PrefillDetail } from '../../utils/constants';
import { contactInfo } from '../../data/contactInfo';

const i = (n: number) => ({ '--i': n }) as CSSProperties;

const empty: ConsultationFormData = { name: '', email: '', phone: '', service: '', budget: '', message: '' };

/** Reu works on UTC-5 all year (no daylight saving). */
function useWorkTime() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(t);
  }, []);
  return new Intl.DateTimeFormat('en-US', { timeZone: 'America/Jamaica', hour: 'numeric', minute: '2-digit' }).format(now);
}

export default function Contact() {
  const [data, setData] = useState<ConsultationFormData>(empty);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [sentTo, setSentTo] = useState('');
  const time = useWorkTime();

  // The hero picker pre-fills the service and the first words of the message.
  useEffect(() => {
    const onPrefill = (e: Event) => {
      const { service, starter } = (e as CustomEvent<PrefillDetail>).detail;
      setData((d) => ({ ...d, service, message: d.message.trim() ? d.message : starter }));
    };
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onBlur = (field: keyof ConsultationFormData) => {
    const all = validateFormData(data);
    setErrors((er) => ({ ...er, [field]: data[field] ? all[field] : er[field] }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const found = validateFormData(data);
    setErrors(found);
    if (hasErrors(found)) {
      const first = Object.keys(found)[0];
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setStatus('loading');
    const result = await sendConsultationEmail(data);
    if (result.success) {
      setSentTo(data.email);
      setStatus('success');
      setData(empty);
    } else {
      setStatus('error');
    }
  };

  const err = (k: keyof ConsultationFormData) =>
    errors[k] ? (
      <p id={`e-${k}`} className="mt-2 text-[16px] text-danger">
        {errors[k]}
      </p>
    ) : null;

  const fieldProps = (k: keyof ConsultationFormData) => ({
    id: `f-${k}`,
    name: k,
    value: data[k] ?? '',
    onChange,
    onBlur: () => onBlur(k),
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `e-${k}` : undefined,
    className: 'field',
  });

  return (
    <section id={SECTION_IDS.CONTACT} className="section" aria-labelledby="contact-title">
      <div className="frame grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 id="contact-title" className="title" data-reveal>
            Start a conversation
          </h2>
          <p className="lede mt-6 text-ink" data-reveal style={i(1)}>
            Tell me what's slowing your business down. I reply within 24 hours, by email or WhatsApp, whichever you prefer.
          </p>

          <ul className="mt-10 space-y-3" data-reveal style={i(2)}>
            <li>
              <a href={`https://wa.me/1${contactInfo.phone}`} className="btn btn-quiet w-full justify-start sm:w-auto">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp {contactInfo.phoneFormatted}
              </a>
            </li>
            <li>
              <a href={`tel:+1${contactInfo.phone}`} className="btn btn-quiet w-full justify-start sm:w-auto">
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {contactInfo.phoneFormatted}
              </a>
            </li>
            <li>
              <a href={`mailto:${contactInfo.email}`} className="btn btn-quiet w-full justify-start sm:w-auto">
                <Mail className="h-5 w-5" aria-hidden="true" />
                {contactInfo.email}
              </a>
            </li>
          </ul>

          <p className="tabular mt-8 text-ink-2" data-reveal style={i(3)}>
            I work on Eastern Time (UTC−5). It's {time} for me right now.
          </p>
        </div>

        <div className="lg:col-span-7" data-reveal style={i(1)}>
          {status === 'success' ? (
            <div className="card p-8 sm:p-12" role="status">
              <p className="text-[clamp(1.75rem,2.6vw,2.25rem)] font-bold tracking-[-0.025em]">Message sent.</p>
              <p className="mt-4 text-ink">
                I'll reply to {sentTo} within 24 hours. If it's urgent, WhatsApp me on {contactInfo.phoneFormatted}.
              </p>
              <button type="button" onClick={() => setStatus('idle')} className="btn btn-quiet mt-8">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="card p-6 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="f-name" className="font-medium">Your name</label>
                  <input type="text" autoComplete="name" required {...fieldProps('name')} />
                  {err('name')}
                </div>
                <div>
                  <label htmlFor="f-email" className="font-medium">Email</label>
                  <input type="email" autoComplete="email" required {...fieldProps('email')} />
                  {err('email')}
                </div>
                <div>
                  <label htmlFor="f-phone" className="font-medium">
                    Phone or WhatsApp <span className="text-ink-2">(optional)</span>
                  </label>
                  <input type="tel" autoComplete="tel" {...fieldProps('phone')} />
                  {err('phone')}
                </div>
                <div>
                  <label htmlFor="f-service" className="font-medium">What do you need?</label>
                  <select required {...fieldProps('service')}>
                    <option value="">Choose one</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {err('service')}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="f-budget" className="font-medium">
                    Budget, if you have one in mind <span className="text-ink-2">(optional, any currency)</span>
                  </label>
                  <input type="text" {...fieldProps('budget')} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="f-message" className="font-medium">About your business and the problem</label>
                  <textarea rows={6} required {...fieldProps('message')} />
                  {err('message')}
                </div>
              </div>

              {status === 'error' && (
                <p role="alert" className="mt-6 text-danger">
                  That didn't send. Try again, or email me at{' '}
                  <a href={`mailto:${contactInfo.email}`} className="underline">{contactInfo.email}</a>.
                </p>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending…' : 'Send message'}
                </button>
                <p className="text-[16px] text-ink-2">Your details go to me only, never to anyone else.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
