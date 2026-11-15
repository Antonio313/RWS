import type { CSSProperties } from 'react';
import { SECTION_IDS } from '../../utils/constants';

const i = (n: number) => ({ '--i': n }) as CSSProperties;

const websites = [
  ['Business websites', 'Who you are, what you offer and how to reach you, fast on a phone and easy to find on Google.'],
  ['Online stores', 'Products, photos and prices you manage yourself, with orders handled the way your business already sells.'],
  ['Sites you update yourself', 'An admin area for events, posts and pages, so you never wait on a developer for a change.'],
  ['Redesigns', "For sites you've outgrown or can't update any more."],
];

const systems = [
  ['Tracking orders and deliveries', 'Every item from intake to pickup, with a status your customers can check themselves.'],
  ['Requests and approvals', 'Requests that move through each manager and leave a record nobody can edit.'],
  ['Stock and inventory', 'What you have, where it is, and an alert before you run out.'],
  ['Bookings and appointments', 'Customers book themselves in, and your team sees the day ahead.'],
  ['Dashboards and reports', 'Revenue, staff and branches in one view instead of five spreadsheets.'],
];

function Column({ title, intro, items }: { title: string; intro: string; items: string[][] }) {
  return (
    <div className="card p-8 sm:p-10">
      <h3 className="subtitle" data-reveal>
        {title}
      </h3>
      <p className="mt-2 text-[18px] text-ink-2" data-reveal style={i(1)}>
        {intro}
      </p>
      <ul className="mt-8 space-y-6">
        {items.map(([name, desc], n) => (
          <li key={name} data-reveal style={i(2 + n)}>
            <p className="text-[20px] font-semibold leading-tight tracking-[-0.01em]">{name}</p>
            <p className="mt-1.5 max-w-[46ch] text-[16px] leading-relaxed text-ink-2">{desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  return (
    <section id={SECTION_IDS.SERVICES} className="section" aria-labelledby="services-title">
      <div className="frame">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="services-title" className="title lg:col-span-6" data-reveal>
            Website or system?
          </h2>
          <p className="lede lg:col-span-6" data-reveal style={i(1)}>
            Not sure which you need? Ask me. I'll tell you honestly, even if the answer is that you don't need me yet.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Column title="Websites" intro="Tell people about your business and sell to them." items={websites} />
          <Column title="Systems" intro="Run the business itself: orders, stock, staff and money." items={systems} />
        </div>
      </div>
    </section>
  );
}
