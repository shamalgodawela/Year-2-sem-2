import React from 'react';
import axios from 'axios';

export default class Assetsreport extends React.Component{
    
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
      handleClick=async ()=>{
        const response=await fetch()
      }
      
      filterData(assets,searchKey){
        const result=assets.filter((assets)=>
        assets.serviceEname.includes(searchKey)
        
        
        )
        this.setState({assets:result})
      }
      handleSearchArea= (e) =>{
        const searchKey=e.currentTarget.value;
      
        axios.get("http://localhost:8000//assets/get").then(res=>{
          if(res.data.success){
      
          this.filterData(res.data.extgassets,searchKey)
           }
        });
      }
      
        
    render(){
        return(
            
          <body className="bod90">
          <div>
              <p className="pEdetais">Nihon Assets and Maintaince details</p>
              <img src="./images/Nihon Logo-01.png" alt="" className="logoo"/>
          
            <div className="container">
        
        
            <div>
            
         
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
             
            
           </tr>
      
          ))}
         
         
        </tbody>
       
       
      </table>
      
      <a className="btn btn-success" href="/example" >Report</a>
            <a className="btn btn-success" href="/report" >Bar Graph</a>
      
            </div>
            </div>
            </div>
            
            
            </body>
            
        )
    }
}
