import React, { Component } from "react";
import axios from 'axios';


export default class Assetsdetails extends Component{

    constructor(props){
        super(props);

        this.state={
            assets:[]
        };
    }

    componentDidMount(){
        this.retrieveassets();
    }
    retrieveassets(){
        axios.get("http://localhost:8000/assets/get").then(res=>{
            if(res.data.success){
                this.setState({
                    assets:res.data.extgassets
                });
                console.log(this.state.assets)
            }

        });
    }
    handleClick=async ()=>{
        const response=await fetch()
      }

      onDelete = (id)=>{
        axios.delete(`http://localhost:8000/assets/delete/${id}`).then((res)=>{
          alert("deleted succcess");
          this.retrieveassets();
        })
      }
        

    render(){
        return(

          <body className="bod90">
          <div>
              <p className="pEdetais">Nihon Assets and Maintaince details</p>
          <div class="dropdown">
         <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
           Nihon HR system
         </a>
       
         <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
           <li><a class="dropdown-item" href="/hrhome">HR profile</a></li>
           <li><a class="dropdown-item" href="/details">All employees</a></li>
           <li><a class="dropdown-item" href="/assets">All assets details</a></li>
           
         </ul>
       </div>
            <div className="container">
        
        
            <div>
            
              <nav className="navbar">
        <div className="container-fluid">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="searchQuery" onChange={this.handleSearchArea}/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <br/>
              <table className="table">
             
        <thead>
      
       
          <tr className="tr">
          <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Equipment</th>
            <th scope="col">Service Engineer Name</th>
            <th scope="col">Service Engineer Number</th>
            <th scope="col"> Total Price</th>
            <th scope="col"> Action</th>
          </tr>
        </thead>
        <tbody >
          {this.state.assets.map((assets,index)=>(
             <tr>
             <th scope="row">{index+1}</th>
             <td>{assets.date}</td>
             <td>{assets.equipment} </td>
             <td >{assets.serviceEname}</td>
             <td>{assets.serviceEnumber}</td>
             <td>{assets.Tprice}</td>
             
             <td>
              <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(assets._id)} >
                <i className="far fa-trash-alt"></i>&nbsp;Delete
              </a>
      
             </td>
           </tr>
      
          ))}
         
         
        </tbody>
      
      </table>
      <button type="button" className="btn btn-success"><a href="/assets/add" style={{textDecoration:'none',color:'white'}}>Add assets and maintance details</a></button><br/><br/>
      <a className="btn btn-success" href="/asreport" >Report</a>
             
      
            </div>
            </div>
            </div>
            </body>
        )
    }
}