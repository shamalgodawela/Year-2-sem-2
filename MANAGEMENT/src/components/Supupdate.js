import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams,useNavigate } from 'react-router-dom'
import { updatedata } from './context/ContextProvider'

import swal from 'sweetalert';


const Supupdate  = () => {
    const {updata, setUPdata} = useContext(updatedata)

    const history = useNavigate("");
    const [inpval,setINP] = useState({
        Cname:"",
        VAT_Certificate_No:"",
        Phone_Number:"",
        Supplier_ID_No:"",
        Acc_No:"",
    })

    const setdata = (e)=>{
        console.log(e.target.value);
        const {name,value} = e.target;
        setINP((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })
    }
    const { id } = useParams("");
    console.log(id);

    const getdata = async () => {

        const res = await fetch(`http://localhost:8000/supreg/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, []);


    const updateuser = async(e)=>{
        e.preventDefault();

        const  {Cname,VAT_Certificate_No,Phone_Number,Supplier_ID_No,Acc_No} = inpval;

        const res2 = await fetch(`http://localhost:8000/supreg/update/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                Cname,VAT_Certificate_No,Phone_Number,Supplier_ID_No,Acc_No
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            swal({
                title: "Successfully Updated",
                icon: "success",
                button: "OK!",
              });
            //alert("update success")
            
            history("/Listofregsupll")
            setUPdata(data2);
        }

    }

    return (
        <body className="Supupdatebody">
            <h1>&nbsp;</h1>
            <h3>&nbsp;</h3>
    
            <div className="contain1"/>
            
 
    <div class="Supupdatebox">
        <div class="SupupboxTitle"><font size = "5">Update Registration</font></div>

                   
    <form>
   
   <div class = "form-group1">
     
     <input type="name" class="form-control" id="Inputname" name="Cname" placeholder="Company name" value={inpval.Cname}onChange={setdata}/>
   </div>
   <div class="form-group2">
     
     <input type="name" class="form-control" id="Inputname" name="VAT_Certificate_No" placeholder="VAT" value={inpval.VAT_Certificate_No}onChange={setdata}/>
   </div>

   <div class="form-group3">
     
       <input type="name" class="form-control" id="Inputemail" name="Phone_Number" placeholder="Phone Number" value={inpval.Phone_Number}onChange={setdata}/>
     </div>

   <div class="form-group4">
     
       <input type="name" class="form-control" id="Inputpass" name="Supplier_ID_No" placeholder="Supplier ID" value={inpval.Supplier_ID_No}onChange={setdata}/>
     </div>

   <div class="form-group5">
     
       <input type="name" class="form-control" id="Inputnum" name="Acc_No" placeholder="Account Number" value={inpval.Acc_No}onChange={setdata}/>
     </div>
    
    
 

 
<button type = "submit" class = "Supreg-button" onClick={updateuser}><font size = "3">Update</font></button>

</form>
</div>


</body>

    )
}

export default Supupdate