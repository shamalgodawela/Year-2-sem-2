import React, { Component } from "react";
import axios from "axios";
import swal from 'sweetalert';

const initialstate={
  date:"",
  equipment:"",
  serviceEname:"",
  serviceEnumber:"",
  Tprice:"",
  eqError:"",
  snameError:"",
  snumbeerError:"",
  tpriceError:""
    
}

export default class Addassets extends Component{

 
  

  constructor(props){
    super(props);
    this.state=initialstate;

  }
  handleInputChange= (e) =>{
    const {name,value}=e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  validate=()=>{
    let eqError="";
    let snameError="";
    let snumbeerError="";
    let tpriceError="";

   var pri=/^[0-9]+$/;
   if(!this.state.Tprice.match(pri)){
    tpriceError='please enter number only'
   }

   var phoneno = /^\d{10}$/;
   if(!this.state.serviceEnumber.match(phoneno)){
    snumbeerError='please enter valid Phone number'
   }

   var reg = /^[A-Za-z]+$/;  
   if(!this.state.equipment.match(reg)){
    eqError='please enter letter only'
   }

    var regEx = /^[A-Za-z]+$/;    
    if(!this.state.serviceEname.match(regEx)){
      snameError='please enter letters only';
    }
    
    if(snameError || eqError || snumbeerError ||tpriceError){
      this.setState({snameError,eqError,snumbeerError,tpriceError});
      return false;
    }
  
    return true;


  }


  
  onSubmit=(e)=>{
    e.preventDefault();

    const{date,equipment,serviceEname,serviceEnumber,Tprice}=this.state;

    const data={
      date:date,
      equipment:equipment,
      serviceEname:serviceEname,
      serviceEnumber:serviceEnumber,
      Tprice:Tprice

      
      
    }
    const isvalid=this.validate();
    if(isvalid){
      console.log(this.state);

      //clear form
      this.setState(initialstate);


      axios.post("http://localhost:8000/assets/save",data).then((res)=>{
        if(res.data.success){
          this.setState(
            {
              date:"",
             equipment:"",
             serviceEname:"",
             serviceEnumber:"",
             Tprice:""
           
            
            }
  
          )
          swal("Successfuly Added ", "You clicked the button!", "success");
        }
      })
    }
    


    

  
  }
    render(){
        return(
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
                     <h1 className="empreg">Add assets and maintance record</h1>
                     
                     <form className="frm" >
                       <form class="row g-3" >
        
         <div class="col-md-6">
           <label for="inputEmail4" class="form-label">Date</label>
           <input type="date" className="form-control"  name="date" value={this.state.date} onChange={this.handleInputChange}  />
          
              
         </div>
         <div class="col-md-6">
           <label for="inputPassword4" class="form-label">Equipment</label>
           <input type="text" class="form-control" id="inputPassword4" name="equipment" value={this.state.equipment} onChange={this.handleInputChange}  />
           <div style={{fontSize:12, color:"red"}}>{this.state.eqError}</div>
         </div>
         <div class="col-12">
           <label for="inputAddress" class="form-label">Service Engineer Name</label>
           <input type="text" class="form-control" id="inputAddress" placeholder="" name="serviceEname" value={this.state.serviceEname} onChange={this.handleInputChange}/>
           <div style={{fontSize:12, color:"red"}}>{this.state.snameError}</div>
         </div>
         <div class="col-12">
           <label for="inputAddress2" class="form-label">service Engineer Number</label>
           <input type="text" class="form-control" id="inputAddress2" placeholder="number" name="serviceEnumber" value={this.state.serviceEnumber}  onChange={this.handleInputChange} />
           <div style={{fontSize:12, color:"red"}}>{this.state.snumbeerError}</div>
         </div>
         <div class="col-md-6">
           <label for="inputCity" class="form-label">Total price</label>
           <input type="text" class="form-control" id="inputCity" name="Tprice" value={this.state.Tprice} onChange={this.handleInputChange} />
           <div style={{fontSize:12, color:"red"}}>{this.state.tpriceError}</div>
         </div>
       
        
         <div class="col-12">
           <button type="submit" class="btn btn-primary" id="btn9" onClick={this.onSubmit}>Add assets and maintance record</button>
       
         </div>
       </form>
       </form>
                   </div>
                   </div>
        )
    }
}