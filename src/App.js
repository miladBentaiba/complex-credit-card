import React from 'react';
import Card from './Card'

export default class App extends React.Component{
  render(){
    return ( 
      <div className="parent">
        <Card/>
        <div className="inputs">
          <input type="number" maxlength="14" placeholder="card number"/>
          <input type="text" maxlength="20" placeholder="full name"/>
          <input type="text" maxlength="5" placeholder="expiration date"/>
        </div>
      </div>
    )
  }
}
