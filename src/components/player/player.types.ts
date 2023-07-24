export interface TPlayerState {
  message: TMessage[], 
  letter: string; 
  style: string;
  program: string;
  percent: number;
  color: string;
  options: Record<string, any>,
  status: string;
}

export interface TMessage {
  key: number;
  color: string;
  text: string;
}

export type TAction =
  | { type: 'reset' }
  | { type: 'play:start', value: any }
  | { type: 'play:stop', value: any }
  | { type: 'play:rewind', value: any }
  | { type: 'play:pause', value: any }
  | { type: 'play:resume', value: any }
  | { type: 'char:start', value: any }
  | { type: 'char:end', value: any }
  | { type: 'options', value: any };