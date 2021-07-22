


import './Frame.css';

import Game from './Game/Game';
import PlayersTable from './PlayersTable/PlayersTable';


function Frame(props){
  
  
    return (
      <div className="Frame">
        <Game
          state={props.state}
          Click={props.Click}
        />
        <PlayersTable
          state={props.state}
        />
        
      </div>
    );
  
}

export default Frame;
