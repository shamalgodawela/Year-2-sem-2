import React, { Component } from "react";
import './css/style.css';



export default class Hrlogin extends Component{
    

    render(){
        return(
            <body className="bod22">
          <div>
            
            <div class="container10">
            <div class="img8">
			<img src="images/Nihon Logo-02.png"/>
		    </div>
            <div class="login-content">
            <form action="/hrhome" className="form10">
		
				<img src="images/avatar.svg"/>
				<h2 class="title">Login To The HR System</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<input type="text" class="input"placeholder="Username"/>
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<input type="password" class="input" placeholder="Password"/>
            	   </div>
            	</div>
            
            	<input type="submit" class="btn8" value="Login"/>
                </form>
        
        </div>
            </div>
            <script type="text/javascript" src="js/main.js"></script>
        </div>
		</body>
        )
    }
}