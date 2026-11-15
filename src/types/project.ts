export interface Shot {
  src: string;
  alt: string;
  /** Portrait phone screen rather than a desktop screen. */
  phone?: boolean;
}

export interface ChapterTheme {
  bg: string;
  ink: string;
  muted: string;
}

export interface Chapter {
  id: string;
  name: string;
  kind: string;
  headline: string;
  problem: string;
  built: string;
  result: string;
  madeWith: string;
  status: string;
  url?: string;
  theme: ChapterTheme;
  /** Composition: wide screen beside text, screens above text, or phones beside text. */
  layout: 'side' | 'stack' | 'phones';
  /** A drawn interface fragment instead of screenshots. */
  fragment?: 'ifps' | 'contentus';
  shots: Shot[];
}

export interface OwnProduct {
  id: string;
  name: string;
  summary: string;
  url: string;
  shot: Shot;
}
