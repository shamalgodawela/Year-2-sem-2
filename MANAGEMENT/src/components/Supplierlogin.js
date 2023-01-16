import React, { Component } from "react";
import axios from "axios";


export default class Supplierlogin extends Component{

  constructor(props){
    super(props);
    this.state={
      Email:"",
      Password:"",
    }
  }

  handleInputChange= (e) =>{
    const {name,value}=e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit=(e)=>{
    e.preventDefault();

    const{Email,Password}=this.state;

    const data={
        Email:Email,
        Password:Password,
    }

    console.log(data)

    axios.post("http://localhost:8000/procurementmgr/get",data).then((res)=>{
      if(res.data.success){
        this.setState(
          {
            Email:"",
            Password:"",
          }

        )
        alert("successfuly added");
    }
}
)


}
   
render(){
    return(
        <body className="Supplierlogin">
        <h1>&nbsp;</h1>
        <h3>&nbsp;</h3>

        <div class="pgname5"><font size = "5">Supplier Login</font></div>

    <center>
<div class="mainbox">

    <div class="box4-1"/>
        <div class="box5Title"><font size = "5">LOGIN</font></div>

    <from id="login" method="post"/>    
    <div class="placeholder5">
       
    <input type="email" name="email" id="name" placeholder="Enter Your email"/>
    <br/><br/> <br/>
      
    <input type="password" name="password" id="name" placeholder="Enter Your password"/>
</div>

    <button type = "submit" class = "Login-button5"><a href="Supprof"><font size = "4">LOGIN</font></a></button>

    

    <div class="box4-2">
        <div class="notregifont2"><font size = "5">Not registered yet?</font></div>

        <button type = "submit" class = "RegisterNow2"><a href="Supplreg"><font size = "2">Register Now</font></a></button>


    </div>

    </div>

    </center>

    </body>

    )
      
    }

    }
