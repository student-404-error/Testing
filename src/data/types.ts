export type ResultType =
  | 'SOLO'
  | 'SOLO_HELL'
  | 'TRANSIT_LOVE'
  | 'HEART_SIGNAL'
  | 'BAD_ROMANCE'
  | '72_HOURS';

export interface Result {
  id: ResultType;
  title: string;
  tagline: string;
  summary: string;
  description: string; // Keeping this for backward compatibility or as "style" container if needed, but likely mapped to style
  style: string;
  match: string;
  caution: string;
  image?: string;
}

export interface Answer {
  text: string;
  scores: Partial<Record<ResultType, number>>;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}
