import { TProgram } from '../programs/programs.types';
import { TRenderProgram, TPhrase, TQuizState } from './quiz.types';
import { render } from 'morse-player';

/**
 * Render Program
 **/
export function renderProgram(
  program: TProgram
): TRenderProgram {
  const out = render(program.play);
  const options = out.find(val => typeof val === 'object');
  const words = out.filter(val => typeof val !== 'object')
    .join('').toUpperCase().trim().split(/\s+/);

  return { words, options };
}

/**
 * New Phrase
 **/
export function newPhrase(
  word: string
): TPhrase[] {
  return word.split('').map(letter => ({
    letter: letter,
    guess: '',
    status: 'wait'
  }));
}

/**
 * Guess Phrase
 **/
export function guessPhrase(
  state: TQuizState,
  key: string
): TPhrase[] {
  return state.phrase.map(({ letter, guess, status }, index) => {
    if (index === state.index) {
      status = key === letter ? 'right' : 'wrong';
      guess = key;
    }
    else if (index === state.index + 1) {
      status = 'next';
      //guess = '?';
    }
    return { letter, guess, status };
  });
}

/**
 * Phrase to Guess
 **/
export function phraseToGuess(
  phrase: TPhrase[]
): string {
  return phrase.reduce(
    (out, entry) => out + entry.guess,
    ''
  );
}
