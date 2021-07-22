import './Displays.css';

function FutureDeadHeat(props){
    const  Restart=props.Restart
    const display = props.display
    
    return (
      <div className="Window" style={{display:display?"block":"none"}}>
          <div className="WindowFrame">
            <div className="WindowFrameRow">
                it will be Dead heat
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

export default FutureDeadHeat;