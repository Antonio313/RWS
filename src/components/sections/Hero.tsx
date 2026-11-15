import { useCallback, useState } from 'react';
import type { CSSProperties } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { FIRST_PROBLEMS, problems } from '../../data/problems';
import type { Problem } from '../../data/problems';
import { SECTION_IDS } from '../../utils/constants';
import { startEnquiry } from '../../utils/enquiry';
import Sheet from '../ui/Sheet';
import MediaView from '../ui/MediaView';

const i = (n: number) => ({ '--i': n }) as CSSProperties;

export default function Hero() {
  const [showAll, setShowAll] = useState(false);
  const [current, setCurrent] = useState<Problem | null>(null);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  const visible = showAll ? problems : problems.slice(0, FIRST_PROBLEMS);

  const fixMine = (p: Problem) => {
    setOpen(false);
    startEnquiry({ service: p.service, starter: p.starter });
  };

  return (
    <section id={SECTION_IDS.HOME} className="pt-[120px] md:pt-[148px]" aria-labelledby="hero-title">
      <div className="frame">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h1 id="hero-title" className="display lg:col-span-7" data-reveal style={i(0)}>
            Less admin.
            <br />
            More business.
          </h1>
          <p className="lede max-w-[40ch] lg:col-span-5 lg:pb-3" data-reveal style={i(1)}>
            I build websites, online stores and business systems that take work off your plate, then stay on to keep
            them running.
          </p>
        </div>

        <div className="mt-14 md:mt-20">
          <h2 className="subtitle" data-reveal style={i(2)}>
            What's slowing your business down?
          </h2>
          <p className="mt-2 text-ink-2" data-reveal style={i(2)}>
            Tap the one that sounds familiar to see how I fixed it for another business.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {visible.map((p, n) => (
              <li key={p.id} data-reveal style={i(3 + Math.min(n, 7))}>
                <button
                  type="button"
                  className="problem h-full w-full"
                  aria-haspopup="dialog"
                  onClick={() => {
                    setCurrent(p);
                    setOpen(true);
                  }}
                >
                  <span className="flex items-start gap-3.5">
                    <span className="h-14 w-14 shrink-0 overflow-hidden rounded-[14px] bg-surface p-1 sm:h-16 sm:w-16">
                      <img src={p.thumb} alt="" loading="lazy" className="h-full w-full rounded-[10px] object-cover object-left-top" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[18px] font-semibold leading-snug tracking-[-0.01em] sm:text-[20px]">{p.label}</span>
                      <span className="mt-1 block text-[16px] leading-snug text-ink-2">{p.hint}</span>
                    </span>
                    <span className="go shrink-0 sm:!hidden" aria-hidden="true">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </span>
                  <span className="hidden items-center justify-between sm:flex">
                    <span className="text-[16px] font-medium text-ink-2">See the fix</span>
                    <span className="go" aria-hidden="true">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            {!showAll && (
              <button type="button" onClick={() => setShowAll(true)} className="btn btn-quiet">
                Show {problems.length - FIRST_PROBLEMS} more problems
                <ChevronDown className="h-5 w-5" aria-hidden="true" />
              </button>
            )}
            <a href={`#${SECTION_IDS.CONTACT}`} className="text-link text-[16px]">
              Something else? Tell me about it
            </a>
          </div>
        </div>
      </div>

      <Sheet open={open} onClose={close} labelledBy="fix-title">
        {current && (
          <article>
            <h2 id="fix-title" className="subtitle">
              {current.label}
            </h2>
            <div className="mt-6">
              <MediaView media={current.media} eager />
            </div>
            <h3 className="mt-8 text-[20px] font-semibold tracking-[-0.01em]">How I fixed it for {current.client}</h3>
            <p className="mt-2 text-[18px] leading-relaxed">{current.fix}</p>
            <p className="mt-4 text-[16px] text-ink-2">{current.status}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" className="btn btn-primary" onClick={() => fixMine(current)}>
                Fix mine
                <ArrowRight className="btn-arrow h-5 w-5" aria-hidden="true" />
              </button>
              <button type="button" className="btn btn-soft" onClick={close}>
                Keep looking
              </button>
            </div>
          </article>
        )}
      </Sheet>
    </section>
  );
}
