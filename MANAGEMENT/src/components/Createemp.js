import React, { Component } from "react";
import axios from "axios";
import swal from 'sweetalert';

const initialsat={
      name:"",
      email:"",
      password:"",
      number:"",
      salary:"",
      EPF:"",
      department:"",
      Errorname:"",
      Erroremail:"",
      Errornumber:"",
      Errorsalary:"",
      Errorepf:"",
      Errordepartment:""

}

export default class Createemp extends Component{

  constructor(props){
   
    super(props);
    this.state=initialsat;
  }

  handleInputChange= (e) =>{
    const {name,value}=e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

validate=()=>{
  let Errorname="";
  let Erroremail="";
  let Errornumber="";
  let Errorsalary="";
  let Errorepf="";
  let Errordepartment="";

  var Ename=/^[A-Za-z\s]*$/;
  if(!this.state.name.match(Ename)){
    Errorname='please enter latter only'

  }
  var mailval= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(!this.state.email.match(mailval)){
    Erroremail='please enter valid email address'

  }
  var phoneno = /^\d{10}$/;
  if(!this.state.number.match(phoneno)){
    Errornumber='please enter valid phone number'
  }
  var num=/^[0-9]+$/;
  if(!this.state.salary.match(num)){
    Errorsalary='enter valid input'
  }
  var ep=/^[0-9]+$/;
  if(!this.state.EPF.match(ep)){
    Errorepf='Please enter valid input'
  }
  var dep=/^[A-Za-z\s]*$/;
  if(!this.state.department.match(dep)){
    Errordepartment='Please enter valid input'
  }
  if(Errorname || Erroremail||Errornumber||Errorsalary||Errorepf||Errordepartment){
    this.setState({Errorname,Erroremail,Errornumber,Errorsalary,Errorepf,Errordepartment});
    return false;

  }
 
  return true;





  

}


  onSubmit=(e)=>{
    e.preventDefault();

    const{name,email,password,number,salary,EPF,department}=this.state;

    const data={
      name:name,
      email:email,
      password:password,
      number:number,
      salary:salary,
      EPF:EPF,
      department:department,
      
    }

    const isvalid=this.validate();
    if(isvalid){
      console.log(this.state);

      this.setState(initialsat);

      axios.post("http://localhost:8000/employee/save",data).then((res)=>{
        if(res.data.success){
          this.setState(
            {
            name:"",
            email:"",
            password:"",
            number:"",
            salary:"" ,
            EPF:"",
            department:"",
          
            
            }
  
          )
          swal("Successfuly Added ", "You clicked the button!", "success");
        }
      })

    }



   

 

  
  }
    render(){
        return(
          <body className="bod44">
            <h1 className="empreg">Employee Registration</h1>
          <div>
            <div class="dropdown">
         <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
           Nihon HR system
         </a>
       
         <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
           <li><a class="dropdown-item" href="/profile">HR profile</a></li>
           <li><a class="dropdown-item" href="/details">All employees</a></li>
           <li><a class="dropdown-item" href="/assets">All assets details</a></li>
           
         </ul>
       </div>
       
  
            <div className="container">
              
              <form className="frm">
                <form class="row g-3" >
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Name</label>
    <input type="text" class="form-control" id="inputEmail4" name="name" value={this.state.name} onChange={this.handleInputChange}/>
    <div style={{fontSize:12, color:"red"}}>{this.state.Errorname}</div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" name="password" value={this.state.password} onChange={this.handleInputChange}/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputAddress2"  name="email" value={this.state.email} onChange={this.handleInputChange}/>
    <div style={{fontSize:12, color:"red"}}>{this.state.Erroremail}</div>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="inputAddress2"  name="number" value={this.state.number} onChange={this.handleInputChange}/>
    <div style={{fontSize:12, color:"red"}}>{this.state.Errornumber}</div>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Salary</label>
    <input type="text" class="form-control" id="inputCity" name="salary" value={this.state.salary} onChange={this.handleInputChange}/>
    <div style={{fontSize:12, color:"red"}}>{this.state.Errorsalary}</div>
  </div>
  <div class="col-md-4">
  <label for="inputCity" class="form-label">EPF_ETF</label>
    <input type="text" class="form-control" id="inputCity" name="EPF" value={this.state.EPF} onChange={this.handleInputChange}/>
    <div style={{fontSize:12, color:"red"}}>{this.state.Errorepf}</div>
 </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Department</label>
    <input type="text" class="form-control" id="inputZip" name="department" value={this.state.department} onChange={this.handleInputChange}/>
    <div style={{fontSize:12, color:"red"}}>{this.state.Errordepartment}</div>
  </div>

 
 
  <div class="col-12">
    <button type="submit" class="btn btn-primary" id="btn9" onClick={this.onSubmit}>Add Employee</button>

  </div>
</form>
</form>
            </div>
            </div>
            </body>
        )
    }
}