import React, { Component } from 'react';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state={ numb:'**** **** **** ****', name:'**********',valid:'**/**' }
  }

  fillNumb(e){
    // check if it's a number
    if(e.target.value[e.target.value.length-1] !== parseInt(e.target.value[e.target.value.length-1]).toString() 
        && e.target.value.length%5 !== 0){
      e.target.value=e.target.value.slice(0, e.target.value.length-1)
    }
    // add spaces after each 4 digits
    if( e.target.value.length%5 === 4 ){
      e.target.value=e.target.value+' '
    }
    this.setState({
      numb: e.target.value+"**** **** **** ****".slice(e.target.value.length)
    }, ()=> this.props.getstateform(this.state.numb,this.state.name,this.state.valid) )
    
  }
  fillName(e){ 
    this.setState({name: e.target.value.toUpperCase()},
      ()=> this.props.getstateform(this.state.numb,this.state.name,this.state.valid) ) 
   
  }
  fillValid(e){
    //verify that the introduced values are numbers
    if(e.target.value[e.target.value.length-1] !== parseInt(e.target.value[e.target.value.length-1]).toString()){
      e.target.value=e.target.value.slice(0, e.target.value.length-1)
    }
    // verify that the month is less than or equal 12
    if(e.target.value[0]+e.target.value[1] > 12)  e.target.value=e.target.value[0]
    if(e.target.value[0]> 1 ) e.target.value=''
    //add slash in the index 2
    if(e.target.value.length===2) e.target.value =e.target.value+'/'
    this.setState({
      valid: (typeof e.target.value[0]==='undefined')? '**/**':
             (typeof e.target.value[1]==='undefined')? e.target.value.slice(0,1)+'*/**':
             (typeof e.target.value[3]==='undefined')? e.target.value.slice(0,2)+'/**':
             (typeof e.target.value[4]==='undefined')? e.target.value.slice(0,4)+'*':
             e.target.value
    },()=> this.props.getstateform(this.state.numb,this.state.name,this.state.valid) )
    
  }
  render() { 
    return ( 
      <div className="inputs">
      <input type="text" maxLength="19" placeholder="card number" onChange={(event) => {this.fillNumb(event)}}/>
      <input type="text" maxLength="20" placeholder="full name" onChange={(event) => {this.fillName(event)}}/>
      <input type="text" maxLength="5" placeholder="expiration date" onChange={(event) => {this.fillValid(event)}}/>
    </div>
     );
  }
}
 
export default Form;