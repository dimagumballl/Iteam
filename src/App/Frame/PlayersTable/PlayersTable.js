

import './PlayersTable.css';

function PlayersTable(props){
    let state = props.state
  
    return (
      <div className="PlayersTable">
        <p>
          Score
        </p>
        <p>
          {state.player[1].name+": "+state.player[1].w}
        </p>
        <p>
          {state.player[2].name+": "+state.player[2].w}
        </p>
      </div>
    );
  
}

export default PlayersTable;
