import { useEffect, useState, useMemo } from 'react';
import player from '../../utils/player';
import { Icon } from "@blueprintjs/core";
import { toScore, toIcon, INITIAL_STATE } from './assessment.helpers';

// https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition#events
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API

// @ts-ignore
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const isNoSpeech = typeof SpeechRecognition === "undefined";

/**
 * Assessment Component
 **/
export function Assessment() {
  const [state, setState] = useState(INITIAL_STATE);

  const recognition = useMemo(() => {
    const recognition = SpeechRecognition 
      ? new SpeechRecognition() 
      : null;

    //recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    // recognition.addEventListener('error', event => {
    //   console.log('ERROR', event);
    // });

    // recognition.addEventListener('nomatch', event => {
    //   console.log('NO_MATCH', event);
    // });

    // recognition.addEventListener('soundstart', event => {
    //   console.log('SOUND_START', event);
    // });

    // recognition.addEventListener('soundend', event => {
    //   console.log('SOUND_END', event);
    // });

    // recognition.addEventListener('speechstart', event => {
    //   console.log('SPEECH_START', event);
    // });

    // recognition.addEventListener('speechend', event => {
    //   console.log('SPEECH_END', event);
    // });

    recognition.addEventListener('audioend', (event: any) => {
      console.log('AUDIO_END', event);
      setState(state => ({
        ...state,
        programs: state.programs.map(entry => ({
          ...entry,
          status: state.selected === entry.id
            ? 'done'
            : entry.status
        }))
      }));
      recognition.stop();
    });

    recognition.addEventListener('start', (event: any) => {
      console.log('START', event);
      setState(state => ({
        ...state,
        programs: state.programs.map(entry => ({
          ...entry,
          status: state.selected === entry.id
            ? 'recording'
            : entry.status
        }))
      }));
    });

    // recognition.addEventListener('end', event => {
    //   console.log('END', event);
    // });

    recognition.addEventListener("result", (event: any) => {
      console.log('RESULT', event);

      const text = [];

      for (const res of event.results) {
        text.push(res[0].transcript);
      }
      const guess = text.join(' ');

      setState(state => ({
        ...state,
        programs: state.programs.map(entry => ({
          ...entry,
          guess: state.selected === entry.id
            ? guess
            : entry.guess,
          score: state.selected === entry.id
            ? toScore(entry.text, guess)
            : entry.score
        }))
      }));
    });
    return recognition;
  }, [setState]);

  // ----------------------------------------------------------

  function onClick(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    const id = event.currentTarget.id;
    const entry = state.programs.find(pgm => pgm.id === id);

    if (!entry) {
      console.log('Invallid Entry');
    }
    else if (entry.status === 'play') {
      player.play(
        `[set wpm:${entry.wpm} eff:${entry.wpm}]${entry.text}`, 
        { selected: entry.id }
      );
    }
    else if (entry.status === 'record') {
      recognition && recognition.start();
    }
    else if (entry.status === 'recording') {
      recognition && recognition.stop();
    }
  }

  // ----------------------------------------------------------

  useEffect(() => {
    return player.on('*', (name: string, value: any) => {
      if (name === 'play:start') {
        const selected = value.combined.selected;

        setState(state => ({
          selected: selected,
          programs: state.programs.map(entry => ({
            ...entry,
            status: selected === entry.id
              ? 'playing'
              : entry.status
          }))
        }));
      }
      else if (name === 'play:stop') {
        setState(state => ({
          ...state,
          programs: state.programs.map(entry => ({
            ...entry,
            status: state.selected === entry.id
              ? 'record'
              : entry.status
          }))
        }));
        //recognition && recognition.start();
      }
    });
  }, [recognition]);

  return (
    <div id="assessment">

      {isNoSpeech && (
        <div className="error">Speech recognition is not supported by this browser!</div>
      )}

      {state.programs.map(entry => (
        <div 
          key={entry.id} 
          className={'entry ' + entry.status}
        >
          <div className="title">{entry.name}</div>
          <div className="body">
            <button id={entry.id} onClick={onClick}>
                <Icon 
                  icon={entry.id === state.selected 
                    ? toIcon(entry.status)
                    : 'play'
                  } 
                  size={20} 
                />{ entry.status }
            </button>
            <div className="guess">{entry.guess}</div>
            <div className="score">{entry.score ? `${entry.score}%` : ''}</div>
          </div>
        </div>
      ))}

    </div>
  );
}
