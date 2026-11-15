import { useCallback, useState } from 'react';
import type { CSSProperties } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { chapters as projects, ownProducts } from '../../data/projects';
import type { Chapter } from '../../types';
import type { Media } from '../../data/problems';
import type { ServiceOption } from '../../utils/constants';
import { SECTION_IDS } from '../../utils/constants';
import { startEnquiry } from '../../utils/enquiry';
import Sheet from '../ui/Sheet';
import MediaView from '../ui/MediaView';

const i = (n: number) => ({ '--i': n }) as CSSProperties;

const SERVICE: Record<string, ServiceOption> = {
  mavis: 'A website I can update myself',
  rasta: 'A website or online store',
};

function mediaOf(p: Chapter): Media {
  if (p.fragment) return { kind: 'fragment', which: p.fragment };
  const shot = p.shots.find((s) => !s.phone) ?? p.shots[0];
  return { kind: 'image', src: shot.src, alt: shot.alt, phone: shot.phone };
}

/** Captured images of the labelled demo fragments, so card previews show them whole. */
const DEMO_IMAGE = { ifps: '/work/ifps-demo.webp', contentus: '/work/contentus-demo.webp' } as const;

/** Bento placement: the newest, largest build leads. */
const SPAN: Record<string, string> = {
  luvchat: 'lg:col-span-2',
};

export default function Work() {
  const [current, setCurrent] = useState<Chapter | null>(null);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <section id={SECTION_IDS.WORK} className="section" aria-labelledby="work-title">
      <div className="frame">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="work-title" className="title lg:col-span-7" data-reveal>
            Recent work
          </h2>
          <p className="lede lg:col-span-5" data-reveal style={i(1)}>
            Online stores, systems that run a business day to day, and apps people use every week.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, n) => (
            <li key={p.id} className={SPAN[p.id] ?? ''} data-reveal style={i(n % 3)}>
              <button
                type="button"
                className="work card h-full w-full overflow-hidden p-3"
                aria-haspopup="dialog"
                onClick={() => {
                  setCurrent(p);
                  setOpen(true);
                }}
              >
                <div className="shot flex-1 overflow-hidden rounded-[20px] bg-surface p-3 sm:p-4">
                  {p.fragment ? (
                    <img
                      src={DEMO_IMAGE[p.fragment]}
                      alt=""
                      loading="lazy"
                      className="block aspect-[16/10] h-full w-full object-contain"
                    />
                  ) : (
                    <img
                      src={mediaOf(p).kind === 'image' ? (mediaOf(p) as { src: string }).src : ''}
                      alt=""
                      loading="lazy"
                      className={`block aspect-[16/10] h-full w-full rounded-[10px] object-cover ${p.id === 'selah' ? 'object-center' : 'object-left-top'}`}

                    />
                  )}
                </div>
                <div className="flex items-end justify-between gap-4 px-3 pb-3 pt-5">
                  <span>
                    <span className="block text-[20px] font-semibold tracking-[-0.015em]">{p.name}</span>
                    <span className="mt-1 block text-[16px] leading-snug text-ink-2">{p.headline}</span>
                  </span>
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent-soft text-accent"
                    aria-hidden="true"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <h3 className="subtitle" data-reveal>
            Things I built for myself
          </h3>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {ownProducts.map((p, n) => (
              <li key={p.id} data-reveal style={i(n)}>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="work card flex h-full !flex-row items-center gap-4 p-3">
                  <img
                    src={p.shot.src}
                    alt=""
                    loading="lazy"
                    className="shot h-20 w-28 shrink-0 rounded-[14px] bg-surface object-cover object-top"
                  />
                  <span className="min-w-0">
                    <span className="flex items-center gap-1 text-[20px] font-semibold">
                      {p.name}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </span>
                    <span className="mt-0.5 block text-[16px] leading-snug text-ink-2">{p.summary}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Sheet open={open} onClose={close} labelledBy="work-sheet-title">
        {current && (
          <article>
            <h2 id="work-sheet-title" className="subtitle">
              {current.name}
            </h2>
            <p className="mt-1 text-[18px] text-ink-2">{current.kind}</p>
            <div className="mt-6">
              <MediaView media={mediaOf(current)} eager />
            </div>
            <p className="lede mt-8 font-semibold">{current.headline}</p>
            <div className="mt-4 space-y-4 text-[18px] leading-relaxed">
              <p>{current.problem}</p>
              <p>{current.built}</p>
              <p className="font-semibold">{current.result}</p>
            </div>
            <dl className="mt-6 space-y-1 text-[16px] text-ink-2">
              <div>
                <dt className="inline">Status: </dt>
                <dd className="inline">{current.status}</dd>
              </div>
              <div>
                <dt className="inline">Made with: </dt>
                <dd className="inline">{current.madeWith}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setOpen(false);
                  startEnquiry({
                    service: SERVICE[current.id] ?? 'A business system',
                    starter: `I'd like something like ${current.name}. `,
                  });
                }}
              >
                Start something similar
                <ArrowRight className="btn-arrow h-5 w-5" aria-hidden="true" />
              </button>
              {current.url && (
                <a href={current.url} target="_blank" rel="noopener noreferrer" className="text-link inline-flex items-center gap-1">
                  Visit {new URL(current.url).hostname}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
            </div>
          </article>
        )}
      </Sheet>
    </section>
  );
}
