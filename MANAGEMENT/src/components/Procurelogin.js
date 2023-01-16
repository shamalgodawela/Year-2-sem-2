import React, { Component } from "react";
import axios from "axios";

export default class Procurelogin extends Component{

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
            <body className="Procurelogin">
            <h1>&nbsp;</h1>
            <h3>&nbsp;</h3>

    <center>
    
    <div class="box3">
        <div class="box2Title"><font size = "6">LOGIN</font></div>

    <form>

        <div class="form-group11">
          
            <input type="email" class="form-control" id="Inputemail" placeholder="Email"/>
          </div>

        <div class="form-group13">
          
            <input type="password" class="form-control" id="Inputpass" placeholder="Password"/>
          </div>

          </form>
         
      
    <button type = "submit" class = "Log-button"><a href="/Procpg"><font size = "3">LOGIN</font></a></button>

    <div class="notregifont1"><font size = "2">Not registered yet?</font></div>

    <div class="reghyperlink"><a href="/Reg"><font size = "2">Register Now</font></a></div>


</div>


</center>

 </body>

        
    )
      
    }

    }
