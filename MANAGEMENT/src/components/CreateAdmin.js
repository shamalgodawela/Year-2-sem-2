import React, { Component } from "react";
import axios from "axios";
import swal from 'sweetalert'

const initialstte={
  Mname:"",
  Mpotition:"",
  Email:"",
  Pnumber:"",
  Address:"",
  Password:"",  
  AdErrorname:"",
  AdErroremail:"",
  AdErrornumber:"",
  AdPassword:""
}


export default class CreateAdmin extends Component{

  constructor(props){
    super(props);
    this.state=initialstte;
  
  }
  handleInputChange= (e) =>{
    const {name,value}=e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  validate=()=>{
    let AdErrorname="";
    let AdErroremail="";
    let AdErrornumber="";
    //let AdPassword="";

    var aname=/^[a-zA-Z]+ [a-zA-Z]+$/;
    if(!this.state.Mname.match(aname)){
      AdErrorname='Please enter only letters'
    }
    var aemail=/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if(!this.state.Email.match(aemail)){
      AdErroremail='Please enter valid email'
    }
    var aphone=/^\d{10}$/;
    if(!this.state.Pnumber.match(aphone)){
      AdErrornumber='Please enter valid number'
    }

    if(AdErrorname||AdErroremail||AdErrornumber){
      this.setState({AdErrorname,AdErroremail,AdErrornumber});
      return false;

    }
    return true;

  }
  
  onSubmit=(e)=>{
    e.preventDefault();

    const{Mname,Mpotition,Email,Pnumber,Address,Password}=this.state;

    const data={
        Mname:Mname,
        Mpotition:Mpotition,
        Email:Email,
        Pnumber:Pnumber,
        Address:Address,
        Password:Password,

      
    }

    const isvalid=this.validate();
    if(isvalid){
      console.log(this.state);

      this.setState(initialstte);

    axios.post("http://localhost:8000/post/save",data).then((res)=>{
      if(res.data.success){
        this.setState(
          {
            Mname:"",
            Mpotition:"",
            Email:"",
            Pnumber:"",
            Address:"",
            Password:""
         
          
          }

        )
        swal({
          title: "New Manager Added",
          text: "Successfully!",
          icon: "success",
          button: "Okay",
        });
      }
    })

    }

    

  
  }
  render(){
    

    return(
      <body class="CreateB">
      <div>

<div class="containerAd">
<div class="title">Create Manager</div>
<div class="content">
  <form action="#">
    <div class="user-details">
      <div class="input-box">
        <span class="details">Full Name</span>
        <input type="text" placeholder="Enter Name" name="Mname" value={this.state.Mname} onChange={this.handleInputChange} required/>
        <div style={{fontSize:12, color:"red"}}>{this.state.AdErrorname}</div>
      </div>
      <div class="input-box">
      <span class="details">Manager Potition</span>
      <select class="rcorners2" name="Mpotition" value={this.state.Mpotition} onChange={this.handleInputChange}  required>
                <option value="research">Research and Development management</option>
                <option value="procu">Procurement management</option>
                <option value="sales">Sales and Marketing Management</option>
                <option value="HR">Human Resource Management</option>
	            <option value="Accounts">Accounts and Finance Management</option>
	            <option value="Legal">Legal and Regulatory Management</option>
	            <option value="factory">Factory and Stores Management</option>
	            <option value="travel">Travel and Transport Management</option>
               </select>
         </div>
      <div class="input-box">
        <span class="details">Email</span>
        <input type="email"  placeholder="Enter Email" name="Email" value={this.state.Email} onChange={this.handleInputChange} required/>
        <div style={{fontSize:12, color:"red"}}>{this.state.AdErroremail}</div>
      </div>
      <div class="input-box">
        <span class="details">Phone Number</span>
        <input type="tel" placeholder="Enter Number" name="Pnumber"  value={this.state.Pnumber}  onChange={this.handleInputChange} required/>
        <div style={{fontSize:12, color:"red"}}>{this.state.AdErrornumber}</div>
      </div>
      <div class="input-box">
        <span class="details">Address</span>
        <input type="text" placeholder="Enter Address" name="Address" value={this.state.Address} onChange={this.handleInputChange} required/>
      </div>
      <div class="input-box">
        <span class="details">Password</span>
        <input type="password" placeholder="Enter Password" name="Password" value={this.state.Password} onChange={this.handleInputChange} required/>
        <div style={{fontSize:12, color:"red"}}>{this.state.AdPassword}</div>
        
      </div>
    </div>
    <div class="col-12">
    <button type="submit" class="buttonAdmin1" onClick={this.onSubmit}><span>Create Manager</span></button>
   
     </div>
  </form>
</div>
</div>
<a  href="/admindetails"><center><button id="cButton" type="button" class="btn btn-success"><i class="fa-sharp fa-solid fa-hand-back-point-left"></i>Back</button></center></a>              	
       </div></body>
    )
  
}
}