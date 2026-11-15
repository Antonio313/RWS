import type { CSSProperties } from 'react';
import { ArrowRight } from 'lucide-react';
import { SECTION_IDS } from '../../utils/constants';

const i = (n: number) => ({ '--i': n }) as CSSProperties;

/** A white card; blue stays on the action. */
export default function Budget() {
  return (
    <section className="section" aria-labelledby="budget-title">
      <div className="frame">
        <div className="card grid gap-8 p-8 sm:p-12 lg:grid-cols-12 lg:items-end lg:p-16">
          <h2 id="budget-title" className="title lg:col-span-6" data-reveal>
            Tell me your budget.
          </h2>
          <div className="lg:col-span-6" data-reveal style={i(1)}>
            <p className="lede">
              I'll tell you what it can build. If it doesn't cover everything at once, we start with what matters most
              and add the rest later.
            </p>
            <a href={`#${SECTION_IDS.CONTACT}`} className="btn btn-primary mt-8">
              Tell me what you have in mind
              <ArrowRight className="btn-arrow h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
