import React, { Component } from "react";



export default class Rperformance extends Component{


    render(){
      return(
        
       <div className="top">
          <br/><br/>
          <center>
          <h1>WELLCOME</h1></center>
  <br/><br/><br/>
    
     <center>
  <div className="top">
  
  <input className="login1" type="text" placeholder="User Name"  name="text" onChange={this.handleSearchArea} />
  <br/><br/><br/><br/>
  <input className="login1" type="password" placeholder="Password"  name="text" onChange={this.handleSearchArea} />
  </div>
  </center> 

  <br/><br/><br/><br/><br/><br/><br/><center> <a href="rhome" className="btn btn-success">Login</a></center>
         
         
       </div>
       
      )
    }
  }