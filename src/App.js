import React from 'react';
import Card from './Card'

export default class App extends React.Component{
  constructor(){
    super()
    this.fillNumb = this.fillNumb.bind(this)
    this.state={ numb:'**** **** **** ****', name:'**********',valid:'**/**' }
  }
  
  fillNumb(e){
    // check if it's a number
    if(e.target.value[e.target.value.length-1] !== parseInt(e.target.value[e.target.value.length-1]).toString() 
        && e.target.value.length%5 !== 0){
      e.target.value=e.target.value.slice(0, e.target.value.length-1)
    }
    // check if it's a space
    if( e.target.value[e.target.value.length-1] !==' ' && e.target.value.length%5 === 0 ){
      e.target.value=e.target.value.slice(0, e.target.value.length-1)
    }
    this.setState({numb: (e.target.value+"*******************").substring(0, 19)})
    // for (let i of [4,9,14]){
    //   if (this.state.numb.length >= i+1) if(this.state.numb[i]==='*') 
    //       let x = this.state.numb.split('')
    //       this.setState({numb: })
    // }
  }
  fillName(e){ 
    this.setState({name: e.target.value}) 
  }
  fillValid(e){
    if ([1,2,4,5].includes(e.target.value.length)){

    }
  }
  render(){
    return ( 
      <div className="parent">
        <Card numb={this.state.numb} name={this.state.name} valid={this.state.valid}/>
        <div className="inputs">
          <input type="text" maxLength="19" placeholder="card number" onChange={(event) => {this.fillNumb(event)}}/>
          <input type="text" maxLength="20" placeholder="full name" onChange={(event) => {this.fillName(event)}}/>
          <input type="text" maxLength="5" placeholder="expiration date" onChange={(event) => {this.fillValid(event)}}/>
        </div>
      </div>
    )
  }
}
