import { PREFILL_EVENT, SECTION_IDS } from './constants';
import type { PrefillDetail } from './constants';

/** Send the visitor to the form with their problem already filled in. */
export function startEnquiry(detail: PrefillDetail) {
  window.dispatchEvent(new CustomEvent<PrefillDetail>(PREFILL_EVENT, { detail }));
  // Wait for the sheet to hand focus back before moving the visitor to the form.
  window.setTimeout(() => {
    (document.getElementById('contact-title') ?? document.getElementById(SECTION_IDS.CONTACT))?.scrollIntoView({ block: 'start' });
    document.getElementById('f-name')?.focus({ preventScroll: true });
  }, 60);
}
