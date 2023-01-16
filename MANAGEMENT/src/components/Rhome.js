import React, { Component } from "react";

import axios from 'axios';

export default class Rhome extends Component{

  
  render(){
    return(
      
     <div>
      
        <br/><br/>
        <center>
        <h1>Research And Development Management</h1></center>
<br/><br/><br/><br/>

        <center>
        <a href="/rcertificate" className="btn btn-success btnview">  Registration Certificate  </a></center>
        <br/><br/><br/>
        <center>
        <a href="/rdetails" className="btn btn-success btnview">Product's Technical Details</a></center>
        <br/><br/><br/>
        <center>
        <a href="/rperformance" className="btn btn-success btnview">Field performance Of Product</a></center>

     </div>
    )
  }
}