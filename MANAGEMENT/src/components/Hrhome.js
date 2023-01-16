import React, { Component } from "react";
import './css/hrhome.css'
import axios from "axios";

export default class Hrhome extends Component{
  constructor(props){
    super(props);

    this.state={
      hrs:[]
    };
  }

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:8000/hr/get").then(res=>{
    if(res.data.success){
      this.setState({
        hrs:res.data. extistinghr
      });
      console.log(this.state.hrs)
    }
  });
}


handleClick=async ()=>{
  const response=await fetch()
}
    render(){
        return(
            <body>
    <div class="header__wrapper">
      <header></header>
      <div class="cols__container">
        <div class="left__col">
          <div class="img__container">
            <img src="images/shamal.jpeg" alt="HR manager"  />
            <span></span>
          </div>
          <h2>shamal melantha</h2>
          <p>HR manager</p>
          <p>hr@nihonagholdings.com</p>

          <div class="content">
           <h1 class="nihon">Nihon agriculture holdings (Pvt)Ltd</h1>

            <ul>
             
              <i class="fab fa-pinterest"></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-dribbble"></i>
            </ul>
          </div>
        </div>
        <div class="right__col">
          <nav>
            <ul>
              <li><a href="">HR profile</a></li>
              <li><a href="/create">Employee registration</a></li>
              <li><a href="/details">Company employee</a></li>
              <li><a href="/assets">Assets and maintaince record</a></li>
            </ul>
            
          </nav>

          
            

            <div class=""/>
                <div class="">
                  <form className="form55">
                   
                    <div class="container5">
                    
                        <h2 className="hrh2">HR manager profile</h2>
                        {this.state.hrs.map((hrs)=>(
                        <label class="lab1" >Name:{hrs.name}</label>
                        ))}<br/><br/>
                
                        {this.state.hrs.map((hrs)=>(
                        <label class="lab1" >Email:{hrs.email}</label>
                        ))}<br/><br/>
                       
                        {this.state.hrs.map((hrs)=>(
                        <label class="lab1" >Password:{hrs.password}</label>
                        ))}<br/><br/>
                        {this.state.hrs.map((hrs)=>(
                        <label class="lab1" >Phone number:{hrs.number}</label>
                        ))}<br/><br/>
                       {this.state.hrs.map((hrs)=>(
                        <label class="lab1" >Address:{hrs.address}</label>
                        ))}<br/>
                       
                    </div>
                    </form>
                </div>
            
           
          
         
        </div>
      </div>
    </div>
  </body>
        )
    }
}