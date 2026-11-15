import { Check, Scissors, Type } from 'lucide-react';

/**
 * A fragment of the Contentus editing coach, drawn in HTML with demo data:
 * the app is still in development and has no public screens yet.
 */
const steps = [
  {
    icon: Scissors,
    title: 'Cut the first 4 seconds',
    detail: 'You start talking at 0:04.2. In CapCut, drag the playhead to 0:04, select the clip and tap Split, then delete the first part.',
    done: true,
  },
  {
    icon: Type,
    title: 'Add captions to the hook',
    detail: 'Speech found from 0:04 to 0:11. Tap Text, then Auto captions, and keep the style to two lines.',
    done: false,
  },
] as const;

export default function ContentusFragment() {
  return (
    <div data-ui className="bg-[#0f1221] p-5 text-[#eef0ff] sm:p-8" aria-label="Example of the Contentus editing coach with demo data">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[15px] text-[#a9b0d6]">Project: Morning market vlog</p>
          <p className="mt-1 text-[22px] font-semibold leading-tight tracking-[-0.01em]">Edit plan for CapCut</p>
        </div>
        <span className="rounded-full bg-[#1d2340] px-3 py-1 text-[14px] text-[#c9d2ff]">Analysed on this device</span>
      </div>

      <div className="tabular mt-6 grid grid-cols-[repeat(auto-fit,minmax(96px,1fr))] gap-3 text-[15px]">
        {[
          ['Length', '3:42'],
          ['Speech', '71%'],
          ['Faces found', '2'],
        ].map(([k, v]) => (
          <div key={k} className="bg-[#171b31] p-3">
            <p className="text-[#a9b0d6]">{k}</p>
            <p className="mt-1 text-[18px] font-semibold">{v}</p>
          </div>
        ))}
      </div>

      <ol className="mt-6 space-y-3">
        {steps.map((s) => (
          <li key={s.title} className="flex gap-4 bg-[#171b31] p-4">
            <span
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${s.done ? 'bg-[#3d5afe] text-white' : 'bg-[#262c4d] text-[#c9d2ff]'}`}
              aria-hidden="true"
            >
              {s.done ? <Check className="h-4 w-4" strokeWidth={3} /> : <s.icon className="h-4 w-4" />}
            </span>
            <div>
              <p className="font-semibold">{s.title}</p>
              <p className="mt-1 text-[15px] leading-relaxed text-[#c3c8e6]">{s.detail}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-5 text-[14px] text-[#a9b0d6]">Demo data. The app is in development.</p>
    </div>
  );
}
