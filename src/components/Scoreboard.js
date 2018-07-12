import React,{Component} from 'react';
import '../style/Scoreboard.css';

class Scoreboard extends Component{
    render(){
        return(
                <div>
                    <p>NazwaDruzyny 1</p>
                    <p>1</p>
                    <button>-</button>
                    <button>+</button>
                </div>
        );
    }
}

export default Scoreboard;