export type ResultType = 
  | 'SOLO' 
  | 'SOLO_HELL' 
  | 'TRANSIT_LOVE' 
  | 'HEART_SIGNAL' 
  | 'BAD_ROMANCE' 
  | 'WANT_DATING' 
  | 'NOONA' 
  | '72_HOURS';

export interface Result {
  id: ResultType;
  title: string;
  description: string;
  image?: string; // Placeholder for now
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
