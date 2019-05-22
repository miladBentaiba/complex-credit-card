import React from 'react';
import Card from './Card'
import Form from './form'

export default class App extends React.Component{
  constructor(){
    super()  
    this.state={
      numapp:"",
      nameapp:"",
      validapp:""
    } 
  }

  getstateform=(x,y,z)=>
  {
    this.setState({
      numapp:x,
      nameapp:y,
      validapp:z
    })
  }
  
  render(){
    return ( 
      <div className="parent">
        <Card numb={this.state.numapp} name={this.state.nameapp} valid={this.state.validapp}/>
       <Form getstateform={this.getstateform}/>
      </div>
    )
  }
}
