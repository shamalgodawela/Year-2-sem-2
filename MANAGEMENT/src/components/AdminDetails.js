import React, { Component } from "react";
import axios from 'axios';
import swal from 'sweetalert';

export default class AdminDetails extends Component{

  constructor(props){
    super(props);

    this.state={
      adminposts:[]
    };
  }

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:8000/posts").then(res=>{
    if(res.data.success){
      this.setState({
        adminposts:res.data.existingPosts
      });
      console.log(this.state.adminposts)
    }
  });
}


handleClick=async ()=>{
  const response=await fetch()
}

filterData(adminposts,searchKey){
  const result=adminposts.filter((Post)=>
  Post.Email.includes(searchKey)
  
  
  )
  this.setState({adminposts:result})
}
handleSearchArea= (e) =>{
  const searchKey=e.currentTarget.value;

  axios.get("http://localhost:8000/posts").then(res=>{
    if(res.data.success){

    this.filterData(res.data.existingPosts,searchKey)
     }
  });
}

onDelete = (id)=>{
  axios.delete(`http://localhost:8000/post/delete/${id}`).then((res)=>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you can't recover the manager",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Manager has been deleted!", {
          icon: "success",
        });
      } else {
        swal("User didn't removed");
      }
    });
    
    this.retrievePosts();
  })
}
  render(){
    return(
    <div class="">
      <body class="DetailsB">
      <div>&nbsp;
      <div className="container-fluid">
      <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="searchQuery" onChange={this.handleSearchArea}/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>&nbsp;<div><a  href="/AdminReport"><button type="button" class="btn btn-primary">Genarate Report</button></a></div>
  <center><div><h1>Manager Details</h1></div></center>
</div>&nbsp;
        
          <div>&nbsp;
<div>  <center>         
<table  class="content-tableAdmin"> 
<thead>
  <tr>
    <th>Manager Name</th>
    <th>Management Potition</th>
    <th>Email</th>
    <th>Phone Number</th>
    <th>Address</th>
    <th>Password</th>
    <th>Action</th>
    
  </tr>
</thead>
<tbody>
{this.state.adminposts.map(adminposts =>(
  <tr>
    <td>{adminposts.Mname}</td>
    <td>{adminposts.Mpotition}</td>
    <td>{adminposts.Email}</td>
    <td>{adminposts.Pnumber}</td>
    <td>{adminposts.Address}</td>
    <td>{adminposts.Password}</td>
    <td><a className="btn btn-warning" href={`/Update/${adminposts._id}`}>
        <i className="fas fa-edit"></i>  Edit</a>
        &nbsp;
        <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(adminposts._id)} >
        <i className="far fa-trash-alt"></i>  Delete</a> 
    </td>
    
  </tr>
   ))}&nbsp;
</tbody>
</table><center><a  href="/ayeadimin"><button class="btn btn-outline-success"><i class="fa-sharp fa-solid fa-user-plus"></i>Add new manager</button></a></center></center></div>
</div>
          
       
        
    </div></body></div>
  
     
    )
  }
}



