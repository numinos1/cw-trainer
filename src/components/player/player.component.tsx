import { useEffect, useReducer, useRef } from 'React';
import { Programs } from '../programs/programs.component';
import { TProgram } from '../programs/programs.types';
import { playerReducer, playerInit } from './player.reducer';
import { TMessage } from './player.types';
import { useKeyboard } from '../../effects/use-keyboard';
import player from '../../utils/player';

export function Player() {
  const [state, dispatch] = useReducer(playerReducer, null, playerInit);
  const messageRef = useRef<HTMLDivElement>(null);

  // --------------------------------------------------
  useKeyboard((event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.stopImmediatePropagation();
        event.preventDefault();
        player.rewind(1);
        break;
      case 'ArrowRight':
        break;
      case 'Enter':
        break;
      case ' ':
        event.stopImmediatePropagation();
        event.preventDefault();
        player.pause();
        break;
      default:
    }
  });

  // --------------------------------------------------
  useEffect(() => {
    const el = messageRef.current;
 
    el && el.scroll({ 
      top: el.scrollHeight, 
      behavior: 'smooth' 
    });
  }, [state.message]);

  // --------------------------------------------------
  useEffect(() =>
    player.on('*', (type: string, value: any) => {
      switch (type) {
        case 'play:start':
        case 'play:stop':
        case 'play:rewind':
        case 'play:pause':
        case 'play:resume':
        case 'char:start':
        case 'char:end':
          dispatch({ type, value });
      }
    }),
    [dispatch]
  );

  // --------------------------------------------------
  function onSelect(program: TProgram) {
    if (program.id === state.program) {
      player.pause();
    }
    else {
      player.play(program.play, { program });
    }
  }

  function rewind() {
    player.rewind(1);
  }

  function pause() {
    player.pause();
  }

  // function stop() {
  //   player.stop();
  // }

  function clear() {
    player.stop();
    dispatch({ type: 'reset' });
  }

  return (
    <div id="player">
      <div className="display">
        <div className={`letter ${state.style}`}>{state.letter}</div>
        <div className="message" ref={messageRef}>
          {state.message.map((segment: TMessage) => (
            <div key={segment.key} style={{ color: segment.color }}>{segment.text}</div>
          ))}
        </div>
      </div>
      <div className="progress">
        <div style={{ width: state.percent + '%' }}></div>
      </div>
      <div className="controls">
        <div>wpm: <span>{state.options.wpm}</span></div>
        <div>eff: <span>{state.options.eff}</span></div>
        <div>freq: <span>{state.options.freq}</span></div>
        <div>q: <span>{state.options.q}</span></div>
        <div>volume: <span>{state.options.volume}</span></div>
        <div>program: <span>{state.program}</span></div>
        <div>progress: <span>{state.percent.toFixed(1)}%</span></div>
      </div>
      <div className="buttons">
        <div className="button" onClick={rewind}>REWIND [left-arrow]</div>
        <div className="button" onClick={pause}>PAUSE [space]</div>
        <div className="button" onClick={clear}>CLEAR [escape]</div>
      </div>

      <Programs onSelect={onSelect} selected={state.program} />
    </div>
  );
}
