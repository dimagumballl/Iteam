import {keys} from "lodash"

import './Game.css';

import Cell from './Cell/Cell';

function Game(props){
    const state=props.state
  
    return (
      <div className="Game">
        <div className="Game__Field">
            {
                keys(state.cells).map((id)=>(
                    <Cell
                        id={id}
                        state={state}
                        Click={props.Click}
                    />
                ))
            }
        </div>
        {
            //сетка поля
        }
        <div className="Game__Line_H" style={{left:"14px", top:"-136px"}}></div>
        <div className="Game__Line_H" style={{left:"14px", top:"-260px"}}></div>
        <div className="Game__Line_V" style={{left:"128px", top:"-384px"}}></div>
        <div className="Game__Line_V" style={{left:"244px", top:"-739px"}}></div>
        {
            //сетка линий победы
        }
        <div className="Game__Line_W" style={{left:"185px", top:"-1190px", transform:"rotate(90deg)", visibility:state.winsL[1]?"visible":"hidden"}}></div>
        <div className="Game__Line_W" style={{left:"185px", top:"-1395px", transform:"rotate(90deg)", visibility:state.winsL[2]?"visible":"hidden"}}></div>
        <div className="Game__Line_W" style={{left:"185px", top:"-1600px", transform:"rotate(90deg)", visibility:state.winsL[3]?"visible":"hidden"}}></div>
        <div className="Game__Line_W" style={{left:"70px", top:"-2035px", visibility:state.winsL[4]?"visible":"hidden"}}></div>
        <div className="Game__Line_W" style={{left:"185px", top:"-2355px", visibility:state.winsL[5]?"visible":"hidden"}}></div>
        <div className="Game__Line_W" style={{left:"305px", top:"-2675px", visibility:state.winsL[6]?"visible":"hidden"}}></div>
        <div className="Game__Line_W" style={{left:"186.9px", top:"-2995px", transform:"rotate(45deg)", visibility:state.winsL[7]?"visible":"hidden"}}></div>
        <div className="Game__Line_W" style={{left:"182.9px", top:"-3315px", transform:"rotate(-45deg)", visibility:state.winsL[8]?"visible":"hidden"}}></div>

      </div>
    );
  
}

export default Game;
