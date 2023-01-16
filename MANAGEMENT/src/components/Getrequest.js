import React, { Component } from "react";
import axios from 'axios';



export default class GetRequest extends Component{

 
  constructor(props){
    super(props);

    this.state={
        invRequest:[]
    };
}

componentDidMount(){
    this.retrieveinvRequest();
}
retrieveinvRequest(){
    axios.get("http://localhost:8000/request/get").then(res=>{
        if(res.data.success){
            this.setState({
                invRequest:res.data.extginvRequest
            });
            console.log(this.state.invRequest)
        }

    });
}
handleClick=async ()=>{
    const response=await fetch()
  }
  
onDelete = (id)=>{
    axios.delete(`http://localhost:8000/request/delete/${id}`).then((res)=>{
      alert("deleted succcess");
      this.retrievePosts();
    })
  }



  render(){
    return(
        <body className="getreq">
        <h1>&nbsp; </h1>
          <div className="cantainer">
        <div class="getreqpgname">
        <h1> Get Requests </h1>
        
        </div>
         
        <div className="box7">

        <table className="table">
            <thead>
                <tr className="tr">
                <th scope="col" className>NO</th>
                    <th scope="col">Category</th>
                    <th scope="col">Product_Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">date</th>
                
                   
                </tr>
            </thead>
            <tbody>
                  {this.state.invRequest.map((invRequest,index)=>(
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{invRequest.Category}</td>
                        <td>{invRequest.Product_Name}</td>
                        <td>{invRequest.Quantity}</td>
                        <td>{invRequest.date}</td>
                        <td>
        
                
       
                     </td>

                    </tr>
                
                 ))}   
                
            </tbody> 
            
            
        </table>
        {/* <button type="button" className="btn btn-success">
            <a href="/add" style={{textDecoration:'none',color:'white'}}>Add Maintenance</a></button> */}
    </div>

   


</div>
       
</body>
    )
  }
}