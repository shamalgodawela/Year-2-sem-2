import React, { Component } from "react";
import axios from "axios";

import swal from 'sweetalert';

const Procuregist = {
      Fname:"",
      Lname:"",
      Email:"",
      Password:"",
      Phone_Number:"",
      Employee_Number:"",
      ErrorEmail:"",
      ErrorPhone_Number:"",

}

export default class Procurementreg extends Component{

  constructor(props){
    super(props);
    this.state=Procuregist;
      
      
      

  }

  handleInputChange= (e) =>{
    const {name,value}=e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  procuvalidate=()=>{
    let ErrorEmail="";
    let ErrorPhone_Number="";

    var Emailll=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/; 
    if(!this.state.Email.match(Emailll)){
      ErrorEmail='Please Enter the Email Type Only...'

    } 

    var Phoneno=/^\d{10}$/; 
    if(!this.state.Phone_Number.match(Phoneno)){
      ErrorPhone_Number ='Please Enter 10 Numbers Only..'

    }

    if(ErrorEmail||ErrorPhone_Number){
      this.setState({ErrorEmail,ErrorPhone_Number});
      return false;
    }

    return true;
  }

  onSubmit=(e)=>{
    e.preventDefault();

    const{Fname,Lname,Email,Password,Phone_Number,Employee_Number }=this.state;

    const data={
        Fname:Fname,
        Lname:Lname,
        Email:Email,
        Password:Password,
        Phone_Number:Phone_Number,
        Employee_Number:Employee_Number,
      
    }

    const Procuuu=this.procuvalidate();

    if(Procuuu){

    console.log(this.state)

    this.setState(Procuregist);

    axios.post("http://localhost:8000/procurementmgr/save",data).then((res)=>{
      if(res.data.success){
        swal({
          title: "Successfully Registered",
          icon: "success",
          button: "OK!",
        });
        this.setState(
          {
            Fname:"",
            Lname:"",
            Email:"",
            Password:"",
            Phone_Number:"",
            Employee_Number:"",
          
          }

        )
        //alert("successfuly added");
      }
    }
    )
    }

    

  
  }
    render(){
        return(
            <body className="Procurereg">
            <h1>&nbsp;</h1>
            <h3>&nbsp;</h3>
    
            <div className="contain1"/>
            
 
    <div class="box">
        <div class="box1Title"><font size = "5">REGISTER</font></div>

 
    <form>
   
        <div class = "form-group1">
          
          <input type="name" class="form-control" id="Inputname" name="Fname" placeholder="First name" value={this.state.Fname}onChange={this.handleInputChange}/>
        </div>
        <div class="form-group2">
          
          <input type="name" class="form-control" id="Inputname" name="Lname" placeholder="Last name" value={this.state.Lname}onChange={this.handleInputChange}/>
        </div>

        <div class="form-group3">
          
            <input type="email" class="form-control" id="Inputemail" name="Email" placeholder="Email" value={this.state.Email}onChange={this.handleInputChange}/>
            <div style={{fontSize:12, color:"red"}}>{this.state.ErrorEmail}</div>
          </div>

        <div class="form-group4">
          
            <input type="password" class="form-control" id="Inputpass" name="Password" placeholder="Password" value={this.state.Password}onChange={this.handleInputChange}/>
          </div>

        <div class="form-group5">
          
            <input type="number" class="form-control" id="Inputnum" name="Phone_Number" placeholder="Phone Number" value={this.state.Phone_Number}onChange={this.handleInputChange}/>
            <div style={{fontSize:12, color:"red"}}>{this.state.ErrorPhone_Number}</div>
          </div>
         
        <div class="form-group6">
          
            <input type="name" class="form-control" id="Inputid" name="Employee_Number" placeholder="Employee ID" value={this.state.Employee_Number}onChange={this.handleInputChange}/>
          </div> 
         
      
     
      
    <button type = "submit" class = "reg-button" onClick={this.onSubmit}><font size = "3">Register</font></button>

    </form>
    </div>
    

    </body>

            
        )
        
    }
}