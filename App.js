import React from 'react';
import './App.css';
import * as ReactBootstrap from "react-bootstrap";

const App = () => {
  const players = [
    {strategy: "AudiB1", capital: "₹ 2.0L", live: "⏸",active: "Running"},
    {strategy: "AudiB2", capital: "₹ 2.0L", live: "▶️",active: " "},
    {strategy: "AudiTT", capital: "₹ 2.0L", live: "▶️",active: " "},
    {strategy: "AudiTT2", capital: "₹ 2.0L", live: "▶️",active: " "},
    {strategy: "STG16", capital: "₹ 2.0L", live: " ▶️",active: " "},
    {strategy: "STG17", capital: "₹ 2.0L", live: "▶️",active: " "},
    {strategy: "B4", capital: "₹ 2.0L", live: "⏸",active: "Running"},
    {strategy: "T3", capital: "₹ 2.0L", live: "▶️",active: " "},
    {strategy: "Super20", capital: "₹ 2.0L", live: "⏸",active: " "},
    {strategy: "MB20k", capital: "₹ 2.0L", live: "▶️",active: " "},
    {strategy: "Hedge", capital: "₹ 2.0L", live: "▶️",active: " "},
    {strategy: "Strangle2k", capital: "₹ 2.0L", live: "⏸",active: " "}


    
  ]

  const renderPlayer =(player, index) => {
    return(
      
      <tr key= {index}>
        <td>{player.strategy}</td>
        <td>{player.capital}</td>
        <td>{player.live}</td>
        <td>{player.active}</td>

      </tr>
    )
  }
  return (
    <div className="App">
   <ReactBootstrap.Table striped bordered hover>
   <thead>
    <tr>
      
      <th> strategy</th>
      <th> capital</th>
      <th> live</th>
      <th> active</th>
    </tr>
  </thead>
  <tbody>
    {players.map(renderPlayer)}
    
  </tbody>
  </ReactBootstrap.Table>
    </div>
  );
}

export default App;
