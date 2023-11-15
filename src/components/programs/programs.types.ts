export type TOnSelect = (program: TProgram) => void;

export type TPlay = (count: number) => string;

export interface TProgram {
  id: string;
  name: string;
  play: string | TPlay;
}

export interface TProgramArgs {
  onSelect: TOnSelect;
  selected: string;
}

export interface TBook {
  author: string;
  book: string;
  chapters: string[]
}
