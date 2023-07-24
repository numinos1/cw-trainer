export interface TAssessmentState {
  selected: string;
  programs: TProgram[];
};

export interface TProgram {
  id: string;
  wpm: number;
  name: string;
  text: string;
  status: string;
  guess: string;
  score: number;
  play: string;
}
