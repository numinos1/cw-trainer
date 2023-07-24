import player from '../../utils/player';
import { TQuizState, TQuizAction } from './quiz.types';
import { TProgram } from '../programs/programs.types';
import { renderProgram, newPhrase, guessPhrase, phraseToGuess } from './quiz.helpers';

/**
 * Init Quiz State
 **/
export function quizInit(): TQuizState {
  return {
    program: undefined,
    options: {},
    words: [],

    phrase: [],
    status: 'none', // none -> play -> guess -> wait -> done
    index: 0,

    log: [],

    total: 0,
    right: 0,
    wrong: 0
  };
}

/**
 * Reduce Quiz State
 **/
export function quizReducer(
  state: TQuizState,
  action: TQuizAction
): TQuizState {
  switch (action.type) {
    case 'start-program':
      return startProgramAction(action.program);
    case 'play-word':
      return playWordAction(state);
    case 'press-key':
      return pressKeyAction(state, action.event);
    case 'char:start':
      return startCharAction(state, action.value);
    case 'char:end':
      return endCharAction(state);
    case 'play:stop':
      return stopPlayAction(state);
    default:
      return state;
  }
}

/**
 * Start Program
 **/
function startProgramAction(
  program: TProgram
): TQuizState {
  return playWord({
    ...quizInit(),
    ...renderProgram(program),
    program: program.id,
  });
}

/**
 * Play Word Action 
 **/
function playWordAction(
  state: TQuizState
): TQuizState {
  return playWord(state);
}

/**
 * Play Word Helper
 **/
function playWord(
  state: TQuizState
): TQuizState {
  if (state.words.length) {
    const word = state.words[0];

    setTimeout(() => player.play(word, state.options), 100);

    return {
      ...state,
      index: 0,
      status: 'play',
      phrase: newPhrase(word)
    };
  }
  return {
    ...state
  };
}

/**
 * Stop Play
 **/
function stopPlayAction(
  state: TQuizState
): TQuizState {
  return {
    ...state,
    status: 'guess',
    phrase: state.phrase.map((entry, index) => ({
      ...entry,
      //guess: state.index === index ? '?' : '',
      status: state.index === index ? 'next' : 'wait'
    }))
  };
}

/**
 * Start Char
 **/
function startCharAction(
  state: TQuizState,
  value: any
): TQuizState {
  return {
    ...state,
    phrase: state.phrase.map((entry, index) => ({
      ...entry,
      //guess: index === value.index ? '.' : '',
      status: index === value.index ? 'play' : 'wait'
    }))
  };
}

/**
 * End Char
 **/
function endCharAction(
  state: TQuizState
): TQuizState {
  return {
    ...state,
    phrase: state.phrase.map(entry => ({
      ...entry,
      guess: '',
      status: 'wait'
    }))
  };
}

/**
 * Press Key
 **/
function pressKeyAction(
  state: TQuizState,
  event: KeyboardEvent
): TQuizState {
  const { key } = event;

  if (key.length === 1 && state.status === 'guess') {
    event.stopImmediatePropagation();
    event.preventDefault();
    
    return makeGuess(state, key.toUpperCase());
  }
  if (key === 'Enter') {
    event.stopImmediatePropagation();
    event.preventDefault();

    if (state.status === 'wait' || state.status === 'guess') {
      return playWord(state);
    }
  }
  return state;
}

/**
 * Make Guess
 **/
function makeGuess(
  state: TQuizState,
  key: string
): TQuizState {
  let { log, words, status, total, right, wrong } = state;
  const nextIndex = state.index + 1;
  const nextPhrase = guessPhrase(state, key);

  if (nextIndex === state.phrase.length) {
    const guess = phraseToGuess(nextPhrase);
    const word = words[0];
    
    if (word === guess) {
      right++ 
      words = words.slice(1);
    } 
    else {
      wrong++;
    }
    total++;
    status = 'wait';

    log = log.concat({ word, guess });
  }
  return {
    ...state,
    words: words,
    status: status,
    phrase: nextPhrase,
    index: nextIndex,

    log: log,

    total: total,
    right: right,
    wrong: wrong
  };
}
