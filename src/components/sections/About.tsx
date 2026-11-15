import type { CSSProperties } from 'react';
import { SECTION_IDS } from '../../utils/constants';

const i = (n: number) => ({ '--i': n }) as CSSProperties;

const facts = [
  ['One contact', 'No ticket queue and no handoff. You talk to the person who wrote the code.'],
  ['Worldwide', 'I work with clients wherever they are, over calls, email and WhatsApp.'],
  ['After launch', 'Hosting, backups, updates and fixes, from the same person who built it.'],
];

export default function About() {
  return (
    <section id={SECTION_IDS.ABOUT} className="section" aria-labelledby="about-title">
      <div className="frame grid gap-4 lg:grid-cols-12">
        <div className="card p-8 sm:p-12 lg:col-span-7">
          <h2 id="about-title" className="title" data-reveal>
            The person who answers
          </h2>
          <blockquote className="subtitle mt-8 max-w-[24ch]" data-reveal style={i(1)}>
            <p>If something I built breaks at 2 AM, it's my phone that rings.</p>
          </blockquote>
          <div className="mt-8 max-w-[60ch] space-y-4 text-[18px] leading-relaxed" data-reveal style={i(2)}>
            <p>
              By day I'm a broadcast engineer at a radio station. That job means transmitters, audio chains and power
              systems that can't go down, and when something breaks, it gets fixed right away.
            </p>
            <p>
              Before I wrote production code I worked support queues, so I know what it's like to be the customer
              waiting for an answer. I own every system I ship, and I'm the support contact for every client.
            </p>
          </div>
        </div>

        <ul className="grid gap-4 lg:col-span-5">
          {facts.map(([term, desc], n) => (
            <li key={term} className="card p-8" data-reveal style={i(1 + n)}>
              <p className="text-[20px] font-semibold tracking-[-0.015em]">{term}</p>
              <p className="mt-2 text-[18px] leading-relaxed text-ink-2">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
