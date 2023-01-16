import React, { Component } from "react";
import axios from "axios";

export default class Pagenavigater extends Component{

    render(){
        return(
            <body className="Pgnavi">
            <h1>&nbsp;</h1>
            <h3>&nbsp;</h3>


<center>

<div class="Pgnavbox">

<button type = "submit" class = "Procu-button"><a href="/Log"><font size = "5">Procurement</font></a></button>
<button type = "submit" class = "Sup-button"><a href="/Supplreg"><font size = "5">Supplier</font></a></button>

</div>
</center>

</body>
        )
}


}
