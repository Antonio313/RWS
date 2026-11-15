interface WordmarkProps {
  /** Show the full name beside the mark. */
  full?: boolean;
  className?: string;
}

/** The RWS mark: a rounded blue tile in the page's own type, with the full name beside it. */
export default function Wordmark({ full = true, className = '' }: WordmarkProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className="inline-grid h-10 w-10 place-items-center rounded-[12px] bg-accent text-[14px] font-extrabold tracking-[-0.02em] text-accent-ink"
      >
        RWS
      </span>
      {full && <span className="text-[18px] font-bold tracking-[-0.015em]">Reuel's Web Services</span>}
    </span>
  );
}
