import { Check, Clock3 } from 'lucide-react';

/**
 * A small working-style fragment of the IRIE FM procurement app (IFPS),
 * drawn in HTML with demo data because the real app sits behind company sign-in.
 */
const steps = [
  { who: 'Requested', name: 'Field engineer', when: 'Mon 08:14', state: 'done' },
  { who: 'Engineering lead', name: 'Approved', when: 'Mon 10:02', state: 'done' },
  { who: 'Finance', name: 'Approved', when: 'Mon 15:47', state: 'done' },
  { who: 'General manager', name: 'Waiting', when: '', state: 'now' },
] as const;

export default function IfpsFragment() {
  return (
    <div data-ui className="bg-[#f5f6f8] p-5 text-[#14161c] sm:p-8" aria-label="Example purchase request in the procurement app, demo data">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="whitespace-nowrap text-[15px] text-[#5b6170]">Request PR-1042</p>
          <p className="mt-1 text-[22px] font-semibold leading-tight tracking-[-0.01em]">
            Cooling fan for the hilltop transmitter
          </p>
        </div>
        <span className="shrink-0 rounded-full bg-[#fff1d6] px-3 py-1 text-[14px] font-semibold text-[#7a5300]">
          Awaiting approval
        </span>
      </div>

      <dl className="tabular mt-6 grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-3 text-[15px]">
        <div className="bg-white p-3">
          <dt className="text-[#5b6170]">Quantity</dt>
          <dd className="mt-1 text-[18px] font-semibold">2</dd>
        </div>
        <div className="bg-white p-3">
          <dt className="text-[#5b6170]">Estimate</dt>
          <dd className="mt-1 whitespace-nowrap text-[18px] font-semibold">JM$84,600</dd>
        </div>
        <div className="bg-white p-3">
          <dt className="text-[#5b6170]">Budget left</dt>
          <dd className="mt-1 text-[18px] font-semibold">61%</dd>
        </div>
      </dl>

      <ol className="mt-6 space-y-2">
        {steps.map((s) => (
          <li key={s.who} className="flex items-center gap-3 bg-white px-3 py-2.5 text-[15px]">
            <span
              className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[13px] font-bold ${
                s.state === 'done' ? 'bg-[#1f7a4d] text-white' : 'bg-[#e8b04b] text-[#19140a]'
              }`}
              aria-hidden="true"
            >
              {s.state === 'done' ? (
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              ) : (
                <Clock3 className="h-3.5 w-3.5" strokeWidth={2.5} />
              )}
            </span>
            <span className="font-semibold">{s.who}</span>
            <span className="text-[#5b6170]">{s.name}</span>
            <span className="tabular ml-auto text-[#5b6170]">{s.when}</span>
          </li>
        ))}
      </ol>

      <p className="mt-5 text-[14px] text-[#5b6170]">Demo data. The real app runs behind IRIE FM's sign-in.</p>
    </div>
  );
}
