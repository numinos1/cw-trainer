import { IconName } from '@blueprintjs/icons';

export const list = [{
  id: '15-wpm',
  wpm: 15,
  name: '15 WPM Assessment',
  text: 'I love Morse code'
}, {
  id: '20-wpm',
  wpm: 20,
  name: '20 WPM Assessment',
  text: 'The weather is good'
}, {
  id: '30-wpm',
  wpm: 30,
  name: '30 WPM Assessment',
  text: 'You have a good signal report'
}, {
  id: 'letter-wpm',
  wpm: 30,
  name: '30 WPM Assessment',
  text: 'A N D R E W'
}];

export const INITIAL_STATE = {
  selected: '',
  programs: list.map(entry => ({
    ...entry,
    status: 'play',
    guess: '',
    score: 0    
  }))
};

// export const icons: Record<string, string> = {
//   play: 'play',
//   playing: 'play',
//   record: 'record',
//   recording: 'record',
//   done: 'tick',
// }

export function toIcon(name: string): IconName {
  switch (name) {
    case 'play': return 'play';
    case 'playing': return 'play';
    case 'record': return 'record';
    case 'recording': return 'record';
    case 'done': return 'tick';
    default: return 'tick';
  }
}

/**
 * Score a Guess
 **/
export function toScore(
  text: string,
  guess: string
): number {
  const guessList = guess.toLowerCase().split(' ');
  const textList = text.toLowerCase().split(' ');

  const guesses = guessList.reduce<Record<string, boolean>>((out, word) => {
    out[word] = true;
    return out;
  }, {});

  const count = textList.reduce((count, word) => {
    console.log('word', guesses[word], count);
    if (guesses[word]) {
      return count + 1;
    }
    return count;
  }, 0);

  return Math.round((count / textList.length) * 100);
}
