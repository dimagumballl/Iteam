


import './Cell.css';

function Circle(){
    return(
        <div className="Circle">
            
        </div>
    )
}

function Сross(){
    return(
        <div className="Сross">
            <div className="Сross__Line" style={{top:"36px", transform:"rotate(45deg)"}}></div>
            <div className="Сross__Line"style={{top:"26px", transform:"rotate(-45deg)"}}></div>
        </div>
    )
}

function Cell(props){
    const state=props.state
    const id=props.id
    const  Click=props.Click
    
    return (
      <div className="Cell" key={id} style={id%3==0?{marginRight:"0px"}:{marginRight:"8px"}} onClick={()=>Click(id)}>
          {
              state.cells[id].n==0?<div></div>:state.cells[id].n==1?<Сross/>:<Circle/>
          }
        
      </div>
    );
  
}

export default Cell;
