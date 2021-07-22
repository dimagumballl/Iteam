import './Displays.css';

function DeadHeat(props){
    const  Restart=props.Restart
    const display = props.display
    
    return (
      <div className="Window" style={{display:display?"block":"none"}}>
          <div className="WindowFrame">
            <div className="WindowFrameRow">
                Dead heat
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

export default DeadHeat;