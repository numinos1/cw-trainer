import player from '../../utils/player';
import { programs } from './programs.data';
import { Icon } from "@blueprintjs/core";
import { TProgramArgs } from './programs.types';

/**
 * Programs
 **/
export function Programs({
  onSelect,
  selected
}: TProgramArgs) {

  /**
   * On Button Click
   **/
  function onButton(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    const id = event.currentTarget.id;
    const program = programs.find(pgm => pgm.id === id);

    program && onSelect(program);
  }

  return (
    <div className="programs">
      {programs.map((program) => (
        <div 
          key={program.id}
          className={program.id === selected ? 'selected' : ''}
        > 
          <button id={program.id} onClick={onButton}>
            <Icon 
              icon={program.id === selected 
                ? (player.isPaused ? 'play' : 'pause')
                : 'play'
              } 
              size={18} 
            />
          </button>
          <div>{program.name}</div>
        </div>
      ))}
    </div>
  );
}
