import React, { Component } from "react";
import axios from "axios";

export default class AddAccDetails extends Component{

  constructor(props){
    super(props);
    this.state={
      apname:"",
      asname:"",
      aquantity:"",
      adate:"",
      atprice:"",
      
     
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

    const{ apname,asname,aquantity,adate, atprice }=this.state;

    const data={
      apname:apname,
      asname:asname,
      aquantity:aquantity,
      adate:adate,
      atprice:atprice,
    }

    console.log(data)

    axios.post("http://localhost:8000/employee/save",data).then((res)=>{
      if(res.data.success){
        this.setState(
          {
            apname:"",
            asname:"",
            aquantity:"",
            adate:"",
            atprice:"",
          
          }

        )
        alert("successfuly added");
       
      }
    })

  
  }
    render(){
        return(
          <div>
            
  
            <div className="container">
              <h1 className="empreg">Add details</h1>
              <form className="frm">
                <form class="row g-3" >
  <div class="col-md-6">
    <label for="inputProductName" class="form-label">Product name</label>
    <input type="text" class="form-control" id="inputProductName" name="apname" value={this.state.apname} onChange={this.handleInputChange}/>
  </div>
  <div class="col-md-6">
    <label for="inputShopname" class="form-label">Shop name</label>
    <input type="text" class="form-control" id="inputShopname" name="asname" value={this.state.asname} onChange={this.handleInputChange}/>
  </div>
  <div class="col-12">
    <label for="inputQuantity" class="form-label">Quantity</label>
    <input type="email" class="form-control" id="inputQuantity" placeholder="" name="aquantity" value={this.state.aquantity} onChange={this.handleInputChange}/>
  </div>
  <div class="col-12">
    <label for="inputDate" class="form-label">Date</label>
    <input type="date" class="form-control" id="inputDate" placeholder="" name="adate" value={this.state.adate} onChange={this.handleInputChange}/>
  </div>
  <div class="col-md-6">
    <label for="inputTotalprice" class="form-label">Total price</label>
    <input type="number" class="form-control" id="inputTotalprice" name="atprice" value={this.state.atprice} onChange={this.handleInputChange}/>
  </div>
  
 
  <div class="col-12">
    <button type="submit" class="btn btn-primary" id="btn9" onClick={this.onSubmit}>Add details</button>

  </div>
</form>
</form>
            </div>
            </div>
        )
    }
}