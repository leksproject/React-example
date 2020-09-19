import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {Message} from './Components/Message.js';
import {Summary} from './Components/Summary.js'
import Eventex from './Components/event'
import CycleCounter from './Components/CyclicCounter';

let names = ["Bob","Kavya","Alice","David"];
function reverseNames(){
  names.reverse();
  console.log("reverseNames",names);
  ReactDOM.render(<App/>,document.getElementById('root'));
}

function promoteNames(name){
  console.log("promotenames",name);
   names = [name, ...names.filter(values => values !== name)];
  ReactDOM.render(<App/>,document.getElementById('root'));

}

function App() {
  console.log("names",names);
  const cycle = 5;

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is first trial</h1>
        <Message  greeting="Hello" name = { "Kevin" + "Lauren"}/>
        <table className="table table-sm table-striped">
          <tbody>
        {names.map((name,index) => 
        <tr key={name}>
        <Summary index={index} 
        names={name} 
        reverseCall={reverseNames}
        promoteNames={promoteNames}/>
        </tr>
        
       
        )}
        </tbody>
        </table>
        <Eventex/>
        <CycleCounter cycle={cycle} />
      </header>
    </div>
  );
}

export default App;
