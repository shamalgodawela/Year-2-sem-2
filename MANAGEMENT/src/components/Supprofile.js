import React, { Component } from "react";
import axios from "axios";


export default class Supprofile extends Component{

    constructor(props){
        super(props);
    
        this.state={
          suplreg:[]
        };
      }

      componentDidMount(){
        this.retrievesuplreg();
      }

      retrievesuplreg(){
        axios.get("http://localhost:8000/supreg/get").then(res=>{
          if(res.data.success){
            this.setState({
              suplreg:res.data.extistingEmp
            });
            console.log(this.state.suplreg)
          }
        });
      }

      handleClick=async ()=>{
        const response=await fetch()
      }

      






    render(){
        return(
        <body className="Supprof">
            <h1>&nbsp;</h1>
            <h3>&nbsp;</h3>


<div class="profilepgname">

<font size = "6">Supplier Profile</font></div>


    <div class="Transparentbox"></div>
   

    <div class="Supprofbox1">
        <div class="aboutfont">
        <font size = "3">About</font></div>

        <div class="horizantal-line"></div><br/><br/>
        <div class="fontinabout"><br/><br/>
        <font size = "2">Supplier’s Company Name</font>
        <br/><br/>
        <font size = "2">Value Add Tax Certificate No</font>
        <br/><br/>
        <font size = "2">Phone Number</font>
        <br/><br/>
        <font size = "2">Supplier ID No</font>
        <br/><br/>
        <font size = "2">Account No</font>
        <br/><br/>
 
        
    
        
    </div>

    <div class="fontinabout2"><br/><br/>
        <font size = "2">Chinessssssss</font>
        <br/><br/>
        <font size = "2">VAT063</font>
        <br/><br/>
        <font size = "2">0704623891</font>
        <br/><br/>
        <font size = "2">SID031</font>
        <br/><br/>
        <font size = "2">ACC0923</font>
        <br/><br/>

        </div>

    </div>


</body>

)
}


}
