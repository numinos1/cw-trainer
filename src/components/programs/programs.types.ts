export type TOnSelect = (program: TProgram) => void;

export interface TProgram {
  id: string;
  name: string;
  play: string | TOnSelect;
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
