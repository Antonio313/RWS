import type { Media } from '../../data/problems';
import IfpsFragment from './IfpsFragment';
import ContentusFragment from './ContentusFragment';

/** A real screen on a tinted panel, or a labelled interface fragment. */
export default function MediaView({ media, eager = false }: { media: Media; eager?: boolean }) {
  if (media.kind === 'fragment') {
    return (
      <div className="overflow-hidden rounded-[18px]">
        {media.which === 'ifps' ? <IfpsFragment /> : <ContentusFragment />}
      </div>
    );
  }
  return (
    <div className={`rounded-[18px] bg-surface ${media.phone ? 'px-[18%] pt-6' : 'p-3 sm:p-4'}`}>
      <img
        src={media.src}
        alt={media.alt}
        loading={eager ? 'eager' : 'lazy'}
        className={`block h-auto w-full ${media.phone ? 'rounded-t-[22px]' : 'rounded-[10px]'}`}
      />
    </div>
  );
}
