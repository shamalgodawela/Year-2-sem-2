import React,{ Component } from "react";


export default class Acclogin extends Component{

    render(){
        return(
            <body>
                <div className="acclog">

                 <form >
                    <center>
                <h1 className="accform">Login </h1>
                </center>
                <div class="form-outline mb-4">
                    <input type="email" id="form2Example1" placeholder="Enter your User name" class="form-control" />
                    
                </div>

                
                <div class="form-outline mb-4">
                    <input type="password" id="form2Example2" placeholder="Enter your Passsword" class="form-control" />
                    
                </div>

            <center>
                <button type="button" href="/emd" class="btn btn-primary btn-block mb-4">Sign in</button>
                </center>
               
                
                    

                    

                    

                    
                
                </form> 
                
                    
                    </div>
            </body>
        )
    }
}