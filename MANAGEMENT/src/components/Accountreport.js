
import React, { Component } from "react";
import axios from 'axios';

export default class Accountreport extends Component{

  constructor(props){
    super(props);

    this.state={
      accpost:[]
    };
  }

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:8000/employee/get").then(res=>{
    if(res.data.success){
      this.setState({
        accpost:res.data.extistingEmp
      });
      console.log(this.state.accpost)
    }
  });
}


handleClick=async ()=>{
  const response=await fetch()
}

filterData(accpost,searchKey){
  const result=accpost.filter((accpost)=>
  accpost.apname.includes(searchKey)
  
  
  )
  this.setState({accpost:result})
}
handleSearchArea= (e) =>{
  const searchKey=e.currentTarget.value;

  axios.get("http://localhost:8000/employee/get").then(res=>{
    if(res.data.success){

    this.filterData(res.data.extistingEmp,searchKey)
     }
  });
}

onDelete = (id)=>{
  axios.delete(`http://localhost:8000/employee/delete/${id}`).then((res)=>{
    alert("deleted succcess");
    this.retrievePosts();
  })
}
  render(){
    return(
      <div>
      
     
   
      <div className="container">
        
        
      <div>
        <p className="pEdetais">Account and finance management</p>
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
      <th scope="col" className>#</th>
      <th scope="col">Product name</th>
      <th scope="col">Shop name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Date</th>
      <th scope="col">Total price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody >
    {this.state.accpost.map((accpost,index)=>(
       <tr>
       <th scope="row">{index+1}</th>
       <td>{accpost.apname}</td>
       <td>
       {accpost.asname}
       
       </td>
       <td >{accpost.aquantity}</td>
       <td>{accpost.adate}</td>
       <td>{accpost.atprice}</td>
       
       
       <td>
        <a className="btn btn-warning" href={`/employee/update${accpost._id}`}>
          <i className="fas fa-edit"></i>&nbsp;Edit
        </a>

        &nbsp;
        <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(accpost._id)} >
          <i className="far fa-trash-alt"></i>&nbsp;Delete
        </a>

       </td>
     </tr>

    ))}
   
   
  </tbody>

</table>

<button type="button" className="btn btn-success"><a href="/exreport" style={{textDecoration:'none',color:'white'}}>Create PDF</a></button>

       

      </div>
      </div>
      </div>
     
    )
  }
}