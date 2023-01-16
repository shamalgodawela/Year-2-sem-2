import React, { Component } from "react";
import axios from 'axios';
import swal from 'sweetalert';

export default class Employeedetails extends Component{

  constructor(props){
    super(props);

    this.state={
      posts:[]
    };
  }

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:8000/employee/get").then(res=>{
    if(res.data.success){
      this.setState({
        posts:res.data.extistingEmp
      });
      console.log(this.state.posts)
    }
  });
}


handleClick=async ()=>{
  const response=await fetch()
}

filterData(posts,searchKey){
  const result=posts.filter((post)=>
  post.email.includes(searchKey)
  
  
  )
  this.setState({posts:result})
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
    //alert("sss")
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Employee detail!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your Employee detail has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your Employee details is safe!");
      }
    });
    this.retrievePosts();
  })
}
  render(){
    return(
      
      <body className="bod10">
         <p className="pEdetais">Nihon Employees details</p>
    
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
      <th scope="col" className>#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Number</th>
      <th scope="col">Salary</th>
      <th scope="col">EPF_ETF</th>
      <th scope="col">Department</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody >
    {this.state.posts.map((posts,index)=>(
       <tr>
       <th scope="row">{index+1}</th>
       <td>{posts.name}</td>
       <td>
          <a href={`/employee/${posts._id}`}>
          {posts.email}</a>
       
       </td>
       <td >{posts.password}</td>
       <td>{posts.number}</td>
       <td>{posts.salary}</td>
       <td>{posts.EPF}</td>
       <td>{posts.department}</td>
    
       
       <td>
        <a className="btn btn-warning" href={`/edit/${posts._id}`}>
          <i className="fas fa-edit"></i>&nbsp;Edit
        </a>
        &nbsp;
        <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(posts._id)} >
          <i className="far fa-trash-alt"></i>&nbsp;Delete
        </a>

       </td>
     </tr>

    ))}
   
   
  </tbody>

</table>
<button type="button" className="btn btn-success"><a href="/create" style={{textDecoration:'none',color:'white'}}>Add Employee</a></button>

       

      </div>
      </div>

      </body>
    )
  }
}