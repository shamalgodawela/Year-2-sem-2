import React, { Component } from "react";
import axios from 'axios';
import swal from 'sweetalert';

export default class AdminReport extends Component{

  constructor(props){
    super(props);

    this.state={
      Posts:[]
    };
  }

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:8000/posts").then(res=>{
    if(res.data.success){
      this.setState({
        Posts:res.data.existingPosts
      });
      console.log(this.state.Posts)
    }
  });
}


handleClick=async ()=>{
  const response=await fetch()
}

filterData(Posts,searchKey){
  const result=Posts.filter((Post)=>
  Post.Email.includes(searchKey)
  
  
  )
  this.setState({Posts:result})
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
        swal("User has been deleted!", {
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
    
      
      <div>&nbsp;
      <div className="container-fluid">
      &nbsp;
  <center><div><h1>All Manager's Details In the System</h1></div></center>
  <a className='exam' href="/"><button type="button" id="BckBtn" class="btn btn-secondary"><i class="fa-solid fa-backward"></i> Back</button></a>
</div>&nbsp;
        {this.state.Posts.map(Posts =>(
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
    <th ></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>{Posts.Mname}</td>
    <td>{Posts.Mpotition}</td>
    <td>{Posts.Email}</td>
    <td>{Posts.Pnumber}</td>
    <td>{Posts.Address}</td>
    <td>{Posts.Password}</td>
    
  </tr>
</tbody>
</table></center></div>
</div>
          
        ))}&nbsp;<center><a className="btn btn-success" href="/ExampleAdmin" ><i class="fa-solid fa-download"></i>  Download Details</a></center>
    </div>
  
     
    )
  }
}