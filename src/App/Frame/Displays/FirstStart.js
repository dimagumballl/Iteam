import './Displays.css';

function FirstStart(props){
    const  Restart=props.Restart
    const display = props.display
    const player=props.player
    const ChangeName1=props.ChangeName1
    const ChangeName2=props.ChangeName2
    return (
      <div className="Window" style={{display:display?"block":"none"}}>
          <div className="WindowFrame">
            <div className="WindowFrameRow">
                Player1<input value={player[1].name} onChange={ChangeName1}></input>
            </div>
            <div className="WindowFrameRow">
                Player2 <input value={player[2].name} onChange={ChangeName2}></input>
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

export default FirstStart;