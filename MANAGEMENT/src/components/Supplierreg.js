import React, { Component } from "react";
import axios from "axios";

import swal from 'sweetalert';

const initialst={
  Cname:"",
  VAT_Certificate_No:"",
  Phone_Number:"",
  Supplier_ID_No:"",
  Acc_No:"",
  ErrorCname:"",
  ErrorSupplier_ID_No:"",
  ErrorAcc_No:"",
}

export default class Supplierreg extends Component{

  constructor(props){
    super(props);
    this.state=initialst;
      
  }

  handleInputChange= (e) =>{
    const {name,value}=e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  validate=()=>{
    let ErrorCname="";
    let ErrorSupplier_ID_No="";
    // let ErrorAcc_No="";

    var Companyname=/^[A-Za-z\s]*$/; 
    if(!this.state.Cname.match(Companyname)){
      ErrorCname='Please Enter the Letter Only...'

    } 

    var SupplierID=/^[0-9a-zA-Z]+$/; 
    if(!this.state.Supplier_ID_No.match(SupplierID)){
      ErrorSupplier_ID_No='Please Enter Values Without Space..'

    }

    if(ErrorCname||ErrorSupplier_ID_No){
      this.setState({ErrorCname,ErrorSupplier_ID_No});
      return false;
    }

    return true;

  }

  onSubmit=(e)=>{
    e.preventDefault();

    const{Cname,VAT_Certificate_No,Phone_Number,Supplier_ID_No,Acc_No}=this.state;

    const data={
      Cname:Cname,
      VAT_Certificate_No:VAT_Certificate_No,
      Phone_Number:Phone_Number,
      Supplier_ID_No:Supplier_ID_No,
      Acc_No:Acc_No,
       
    }

    const isvalid=this.validate();
    if(isvalid){
      console.log(this.state)

      this.setState(initialst);

      axios.post("http://localhost:8000/supreg/save",data).then((res)=>{
        if(res.data.success){
          swal({
            title: "Successfully Registered",
            icon: "success",
            button: "OK!",
          });
  
          this.setState(
            {
              Cname:"",
              VAT_Certificate_No:"",
              Phone_Number:"",
              Supplier_ID_No:"",
              Acc_No:"",
            
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
            <body className="Supreg2">
            <h1>&nbsp;</h1>
            <h3>&nbsp;</h3>
    
            <div className="contain"/>
            
      <div class="Suppgname"><font size = "5">Supplier Registration</font></div>


    <div class="Supregbox">
        <div class="box1Title"><font size = "5">REGISTER</font></div>

 
    <form>
   
        <div class = "form-group1">
          
          <input type="name" class="form-control" id="Inputname" name="Cname" placeholder="Company name" value={this.state.Cname}onChange={this.handleInputChange}/>
          <div style={{fontSize:12, color:"red"}}>{this.state.ErrorCname}</div>
        </div>
        <div class="form-group2">
          
          <input type="name" class="form-control" id="Inputname" name="VAT_Certificate_No" placeholder="VAT Certificate No" value={this.state.VAT_Certificate_No}onChange={this.handleInputChange}/>
        </div>

        <div class="form-group3">
          
            <input type="number" class="form-control" id="Inputemail" name="Phone_Number" placeholder="Phone Number" value={this.state.Phone_Number}onChange={this.handleInputChange}/>
          </div>

        <div class="form-group4">
          
            <input type="name" class="form-control" id="Inputpass" name="Supplier_ID_No" placeholder="Supplier ID" value={this.state.Supplier_ID_No}onChange={this.handleInputChange}/>
            <div style={{fontSize:12, color:"red"}}>{this.state.ErrorSupplier_ID_No}</div>
          </div>

        <div class="form-group5">
          
            <input type="name" class="form-control" id="Inputnum" name="Acc_No" placeholder="Account Number" value={this.state.Acc_No}onChange={this.handleInputChange}/>
            <div style={{fontSize:12, color:"red"}}>{this.state.ErrorAcc_No}</div>
          </div>
         
         
      
     
      
    <button type = "submit" class = "reg-button" onClick={this.onSubmit}><font size = "3">Register</font></button>

    </form>
    </div>
    

    </body>

            
        )
        
    }
}