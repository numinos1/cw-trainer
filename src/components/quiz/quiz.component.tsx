import { useEffect, useReducer, useState } from 'React';
import { Programs } from '../programs/programs.component';
import { quizInit, quizReducer } from './quiz.reducer';
import { useKeyboard } from '../../effects/use-keyboard';
import player from '../../utils/player';
import { TProgram } from '../programs/programs.types';

/**
 * Quiz Component
 **/
export function Quiz() {
  const [state, dispatch] = useReducer(quizReducer, null, quizInit);
  const [timer, setTimer] = useState<number | null>(null);

  /**
   * Select Program
   **/
  function onSelect(program: TProgram) {
    dispatch({
      type: 'start-program',
      program: program
    });
  }

  /**
   * Keyboard Handler
   **/
  useKeyboard((event: KeyboardEvent) => {
    dispatch({ 
      type: 'press-key', 
      event
    })
  });

  /**
   * Effect
   **/
  useEffect(() => {
    player.stop();

    return player.on('*', (type: string, value: any) => {
      switch (type) {
        case 'char:start':
        case 'char:end':
        case 'play:stop':
        dispatch({ type, value })
    });
  }, [dispatch]);

  if (state.status === 'wait' && !timer) {
    setTimer(setTimeout(() => {
      dispatch({ type: 'play-word' })
    }, 500));
  }
  else if (state.status !== 'wait' && timer) {
    clearTimeout(timer);
    setTimer(null);
  }

  const score = Math.round((state.right / state.total) * 100) || 0;
  const scoreValue = score ? `${score}%` : '';
  let scoreClass = score > 50 ? 'right' : 'wrong';

  if (!score) scoreClass = 'none';

  const rightValue = state.right || '';
  const wrongValue = state.wrong || '';

  const size = state.phrase.length > 7 ? 'medium' : 'large';
  
  return (
    <div id="quiz">
      <div className="display">
        <div className="phrase">
          {state.phrase.map((entry, index) => (
            <div className={`scene ${size}`} key={index}>
              <div className={`card ${entry.guess ? 'flip' : ''}`}>
                <div className="face front">?</div>
                <div className={"face back " + entry.status}>{entry.guess}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="quiz-stats">
        <div>Right: <span className="right">{rightValue}</span></div>
        <div>Wrong: <span className="wrong">{wrongValue}</span></div>
        <div>Score: <span className={scoreClass}>{scoreValue}</span></div>
      </div>
      <Programs onSelect={onSelect} selected={state.program || ''} />
    </div>
  );
}
