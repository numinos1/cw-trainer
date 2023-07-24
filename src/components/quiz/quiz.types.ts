import { TProgram } from '../programs/programs.types';

export interface TQuizState {
  program: string | undefined;
  options: Record<string, any>;
  words: string[];
  phrase: TPhrase[];
  status: string;
  index: number;
  log: TLog[],
  total: number;
  right: number;
  wrong: number;
};

export interface TPhrase {
  letter: string;
  status: string;
  guess: string;
}

export interface TLog {
  word: string;
  guess: string;
}

export interface TRenderProgram {
  words: string[];
  options: Record<string, any>;
}

export type TQuizAction =
  | { type: 'start-program', program: TProgram }
  | { type: 'play-word' }
  | { type: 'press-key', event: KeyboardEvent }
  | { type: 'char:start', value: any }
  | { type: 'char:end', value: any }
  | { type: 'play:stop', value: any };