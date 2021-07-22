import './Displays.css';

function Victory(props){
    const  Restart=props.Restart
    const display = props.display
    const player=props.player
    const turn=props.turn
    return (
      <div className="Window" style={{display:display?"block":"none"}}>
          <div className="WindowFrame">
            <div className="WindowFrameRow">
                {player[turn].name==1?player[2].name+" win":player[1].name+" win"}
            </div>
            
            <div className="WindowFrameRow">
                <div className="WindowFrameRowButton" onClick={Restart}>
                    OK
                </div>
            </div>
          </div>
        
      </div>
    );
  
}

export default Victory;