import { Component } from 'react';
import {keys} from "lodash"

import './App.css';

import Frame from './Frame/Frame'
import FirstStart from './Frame/Displays/FirstStart';
import Victory from './Frame/Displays/Victory';
import DeadHeat from './Frame/Displays/DeadHeat'
import FutureDeadHeat from './Frame/Displays/FutureDeadHeat'

class App extends Component {
  state={
    displays:{
      FirstStart:true,
      Victory:false,
      DeadHeat:false,
      FutureDeadHeat:false
    },
    step:0,
    win:false,
    winsL:{
      1:false,
      2:false,
      3:false,
      4:false,
      5:false,
      6:false,
      7:false,
      8:false,
    },
    turn:1,
    cells:{
      1:{
       n:0
      },
      2:{
        n:0
      },
      3:{
        n:0 
      },
      4:{
        n:0 
      },
      5:{
        n:0 
      },
      6:{
        n:0 
      },
      7:{
        n:0 
      },
      8:{
        n:0 
      },
      9:{
        n:0 
      },
    },
    player:{
      1:{
        name:"player 1",
        w:0
      },
      2:{
        name:"player 2",
        w:0
      },
    }
  }

  CheangeStete = (State) => {
    this.setState(state => ({
      ...State
    }));
  };

  Click=(id)=>{//нажатие по ячейке
    let state=this.state
    if(state.cells[id].n>0){
      state=this.state
    }
    else{
      if(state.turn==1){
        state={
          ...state,
          step:state.step+1,
          turn:2,
          cells:{
            ...state.cells,
            [id]:{
              n:1
            }
          }
          
        }
      }
      else{
        state={
          ...state,
          step:state.step+1,
          turn:1,
          cells:{
            ...state.cells,
            [id]:{
              n:2
            }
          }
          
        }
      }
    }
    state = this.CheackWinsL(state)

    if(state.win){
      state={
        ...state,
        displays:{
          ...state.display,
          Victory:true
        }
      }
    }
    if(state.step==9){
      state={
        ...state,
        displays:{
          ...state.display,
          DeadHeat:true
        }
      }
      
      
    }
    if(state.step>=6){
        
      if(this.CheacDeadHeat(state)){
        state={
          ...state,
          displays:{
            ...state.display,
            FutureDeadHeat:true
          }
        }
      }
      
    }
    this.CheangeStete(state)
    
  }
  CheackWinsL=(State)=>{///проверка на победу
    let player = 0
    let winL=9
    let state = State
    if(state.cells[1].n==state.cells[2].n&&state.cells[3].n==state.cells[1].n&&state.cells[1].n!=0){
      winL=1
      player=state.cells[1].n
    }
    if(state.cells[4].n==state.cells[5].n&&state.cells[6].n==state.cells[4].n&&state.cells[4].n!=0){
      winL=2
      player=state.cells[4].n
    }
    if(state.cells[7].n==state.cells[8].n&&state.cells[9].n==state.cells[7].n&&state.cells[7].n!=0){
      winL=3
      player=state.cells[7].n
    }
    if(state.cells[1].n==state.cells[4].n&&state.cells[7].n==state.cells[1].n&&state.cells[1].n!=0){
      winL=4
      player=state.cells[1].n
    }
    if(state.cells[2].n==state.cells[5].n&&state.cells[8].n==state.cells[2].n&&state.cells[2].n!=0){
      winL=5
      player=state.cells[2].n
    }
    if(state.cells[3].n==state.cells[6].n&&state.cells[9].n==state.cells[3].n&&state.cells[3].n!=0){
      winL=6
      player=state.cells[3].n
    }
    if(state.cells[1].n==state.cells[5].n&&state.cells[9].n==state.cells[1].n&&state.cells[1].n!=0){
      winL=8
      player=state.cells[1].n
    }
    if(state.cells[3].n==state.cells[5].n&&state.cells[7].n==state.cells[3].n&&state.cells[3].n!=0){
      winL=7
      player=state.cells[3].n
    }
    
    if(winL!=9){
      
      state={
        ...state,
        player:{
          ...state.player,
          [player]:{
            ...state.player[player],
            w:state.player[player].w+1
          }
        },
        win:true,
        winsL:{
          ...state.winsL,
          [winL]:true
        }
        
      }
      
      return state
    }
    else
      return state
  }
  Restart=()=>{//рестарт нужен когда появляются окна
    let state = this.state
    state={
      ...state,
      displays:{
        FirstStart:false,
        Victory:false,
        DeadHeat:false,
        FutureDeadHeat:false
      },
      step:0,
      win:false,
      winsL:{
        1:false,
        2:false,
        3:false,
        4:false,
        5:false,
        6:false,
        7:false,
        8:false,
      },
      turn:1,
      cells:{
        1:{
         n:0
        },
        2:{
          n:0
        },
        3:{
          n:0 
        },
        4:{
          n:0 
        },
        5:{
          n:0 
        },
        6:{
          n:0 
        },
        7:{
          n:0 
        },
        8:{
          n:0 
        },
        9:{
          n:0 
        },
      },
    }
    this.CheangeStete(state)
  }
  ChangeName1 = (e) => {//тут задаем первое имя

    this.setState(state => ({
      ...state,
      player:{
        ...state.player,
        1:{
          ...state.player[1],
          name:e.target.value
        }
      }
    }));
  };
  ChangeName2 = (e) => {//второе
    this.setState(state => ({
      ...state,
      player:{
        ...state.player,
        2:{
          ...state.player[2],
          name:e.target.value
        }
      }

    }));
  };
  CheacDeadHeat=(State)=>{//проверка на будущюю ничью 
    let state=State
    let ArrC=[]
    let test = false
    for(let i = 1;i<=keys(state.cells).length;i++){
      if(state.cells[i].n==0){
        ArrC.push(i)
      }
    }
    
    if(ArrC.length==2){// когда осталось всего две пустых ячейки
      test = true
      
      for(let i = 0;i<ArrC.length;i++){
        let temp
        for(let a = 1;a<=2;a++){
          temp={
            ...state,
            cells:{
              ...state.cells,
              [ArrC[i]]:{
                n:a
              }
            }
            
          }
          temp = this.CheackWinsL(temp)
          if(temp.win)
            test=false
        }
      }
    }
    if(ArrC.length==3){//и три с одной я решил не делать потомучто фрейм простой ничьи станет не нужным 
      test= true
      let s = state.turn
      for(let i = 0;i<ArrC.length;i++){
        
        let temp
        temp={
          ...state,
          cells:{
            ...state.cells,
            [ArrC[i]]:{
              n:s
            }
          }
          
        }
        temp = this.CheackWinsL(temp)
        if(temp.win)
          test=false
          
      }
      for(let i = 0;i<ArrC.length;i++){
        let temp
        for(let a = 0;a<ArrC.length;a++){
          
          temp={
            ...state,
            cells:{
              ...state.cells,
              [ArrC[i]]:{
                n:s
              },
              [ArrC[a]]:{
                n:s
              }
            }
            
          }

          temp = this.CheackWinsL(temp)
          
          if(temp.win)
            test=false
        }
      }
      if(s==1)
        s=2
      else
        s=1
      for(let i = 0;i<ArrC.length;i++){
        let temp
        temp={
          ...state,
          cells:{
            ...state.cells,
            [ArrC[i]]:{
              n:s
            }
          }
          
        }
        temp = this.CheackWinsL(temp)
        
        if(temp.win)
          test=false
          
      } 
    }
    
    return test
  }
  render(){
    return (
      <div className="App">
        <FirstStart
        Restart={this.Restart}
        display={this.state.displays.FirstStart}
        player={this.state.player}
        ChangeName1={this.ChangeName1}
        ChangeName2={this.ChangeName2}
        />
        <Victory
          player={this.state.player}
          turn={this.state.turn}
          Restart={this.Restart}
          display={this.state.displays.Victory}
        />
        <DeadHeat
          Restart={this.Restart}
          display={this.state.displays.DeadHeat}
        />
        <FutureDeadHeat
          Restart={this.Restart}
          display={this.state.displays.FutureDeadHeat}
        />
        <Frame
          state={this.state}
          Click={this.Click}
          
        />
        
      </div>
    );
  }
}

export default App;
