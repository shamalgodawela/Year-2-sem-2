import React, { Component } from "react";
import axios from "axios";
import swal from 'sweetalert';

export default class Supplierreport extends Component{
constructor(props){
    super(props);

    this.state={
      suplreg:[]
    };
  }

componentDidMount(){
  this.retrievesuplreg();
}

retrievesuplreg(){
  axios.get("http://localhost:8000/supreg/get").then(res=>{
    if(res.data.success){
      this.setState({
        suplreg:res.data.extistingEmp
      });
      console.log(this.state.suplreg)
    }
  });
}


handleClick=async ()=>{
  const response=await fetch()
}

filterData(suplreg,searchKey){
  const result=suplreg.filter((suplreg)=>
  suplreg.Cname.includes(searchKey)
  
  
  )
  this.setState({suplreg:result})
}
handleSearchArea= (e) =>{
  const searchKey=e.currentTarget.value;

  axios.get("http://localhost:8000/supreg/get").then(res=>{
    if(res.data.success){

    this.filterData(res.data.extistingEmp,searchKey)
     }
  });
}

onDelete = (id)=>{
  axios.delete(`http://localhost:8000/supreg/delete/${id}`).then((res)=>{
    swal({
      title: "Successfully Deleted",
      icon: "success",
      button: "OK!",
    });
    //alert("deleted succcess");
    this.retrievePosts();
  })
}





    render(){
        return(
            <body className="Listofregsup">
           
           



<nav className="navbar">

     

       

        </nav>
  

    <center>

    <div class="pgname7">
    
        <font size = "6">List of Registered Suppliers</font></div>
        
            <div class="box7">

            <table className="table">
       
       <thead >
     
      
         <tr className="tr">
           <th scope="col" className>NO</th>
                 <th scope="col">Company Name</th>
                 <th scope="col">VAT Certificate No</th>
                 <th scope="col">Phone Number</th>
                 <th scope="col">Supplier ID No</th>
                 <th scope="col">Acc No</th>
                
               
         </tr>
       </thead>
       <tbody >
         {this.state.suplreg.map((suplreg,index)=>(
            <tr>
            <th scope="row">{index+1}</th>
            <td>{suplreg.Cname}</td>
            <td>
               
               {suplreg.VAT_Certificate_No}
            
            </td>
            <td>{suplreg.Phone_Number}</td>
            <td>{suplreg.Supplier_ID_No}</td>
            <td>{suplreg.Acc_No}</td>
            
          </tr>

        
     
         ))}

         
        
        
       </tbody>
       
     </table>

            
            
   </div>

           

        
</center>

{/* <button type = "submit" class = "Report-button"><a href="/reporttt">.</a></button> */}

<button type="button" className="Report-Gen-Btn"><a href="/Examplesupp"

style={{textDecoration:'none',color:'white'}}>Generate Report</a></button>





</body>


        )
        }

}