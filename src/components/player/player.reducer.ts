import { TPlayerState, TAction } from './player.types';
import { rand } from '../../utils/arrays';

export function playerInit(): TPlayerState {
  return { 
    message: [], 
    letter: '', 
    style: '', 
    program: '',
    percent: 0,
    color: '#45ff64',
    options: {},
    status: ''
  };
}

export function playerReducer(
  state: TPlayerState,
  action: TAction
): TPlayerState {
  switch (action.type) {
    case 'reset':
      return reset();
    case 'play:start':
      return start(action.value);
    case 'play:stop':
      return stop(state);
    case 'play:rewind':
      return rewind(state);
    case 'play:pause':
      return pause(state);
    case 'play:resume':
      return resume(state);
    case 'char:start':
      return startChar(state, action.value);
    case 'char:end':
      return endChar(state, action.value);
    case 'options':
      return setOptions(state, action.value);
    default:
      return state;
  }
}

/**
 * Reset Player
 **/
function reset(): TPlayerState {
  return playerInit();
}

/**
 * Start Player
 **/
function start(
  value: any
): TPlayerState {
  const { combined } = value;

  return {
    ...playerInit(),
    status: 'pause',
    program: combined.program.id,
    options: combined
  };
}

/**
 * Stop Player
 **/
function stop(
  state: TPlayerState
): TPlayerState {
  return {
    ...state,
    program: '' 
  };
}

/**
 * Rewind Player
 **/
function rewind(
  state: TPlayerState
): TPlayerState {
  return {
    ...state,
    letter: "",
    style: 'action',
  };
}

/**
 * Pause Player
 **/
function pause(
  state: TPlayerState
): TPlayerState {
  return {
    ...state,
    status: 'play' 
  };    
}

/**
 * Resume Player
 **/
function resume(
  state: TPlayerState
): TPlayerState {
  return {
    ...state,
    status: 'pause' 
  };
}

/**
 * Start Char
 **/
function startChar(
  state: TPlayerState,
  actionValue: any
): TPlayerState {
  const { value, endPercent } = actionValue;
  const message = state.message.slice();
  const last = message.pop();

  if (!last) {
    message.push({
      color: state.color, 
      text: value,
      key: rand(9999999999)
    });
  }
  else if (last.color !== state.color) {
    message.push(last);
    message.push({
      color: state.color, 
      text: value,
      key: rand(9999999999)
    });
  }
  else {
    message.push({ 
      color: last.color,
      text: last.text + value,
      key: rand(9999999999)
    });
  }
  return {
    ...state,
    message: message,
    letter: value,
    percent: endPercent,
    style: value.length > 1 ? 'prosign' : '',
  };
}

/**
 * End Char
 **/
function endChar(
  state: TPlayerState,
  actionValue: any
): TPlayerState {
  const { endPercent } = actionValue;

  return { 
    ...state, 
    percent: endPercent
  };
}

/**
 * Set Options
 **/
function setOptions(
  state: TPlayerState,
  actionValue: any
): TPlayerState {
  const { combined } = actionValue;

  return {
    ...state,
    color: combined.color || state.color,
    options: combined || {}
  };
}










