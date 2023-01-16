import React, { useContext, useEffect, useState } from 'react'
import {  useParams,useNavigate } from 'react-router-dom'
import {  updatedata } from './context/ContextProvider'



const Update = () => {
    const {update, setUPdata} = useContext(updatedata)

    const history = useNavigate("");
    const [inpval,setINP] = useState({
        apname:"",
      asname:"",
      aquantity:"",
      adate:"",
      atprice:"",
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

        const res = await fetch(`http://localhost:8000/employee/${id}`, {
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
    }, );


    const updateuser = async(e)=>{
        e.preventDefault();

        const  { apname,asname,aquantity, adate, atprice} = inpval;

        const res2 = await fetch(`http://localhost:8000/employee/update/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                apname,asname,aquantity,adate, atprice
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            alert("update success")
            history("/")
            setUPdata(data2);
        }

    }

    return (
        <div className="container">
           <p className="pEdetais">Update Details</p>
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg6 col-md-6 col-12">
                        <label for="exampleInputProductName" className="form-label">Product Name</label>
                        <input type="text" value={inpval.apname} onChange={setdata} name="apname" className="form-control" />
                    </div>
                    <div className="mb-3 col-lg6 col-md-6 col-12">
                        <label for="exampleInputShopname" className="form-label">Shop Name</label>
                        <input type="text" onChange={setdata} value={inpval.asname} name="asname" className="form-control" aria-describedby="emailHelp" />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col-lg6 col-md-6 col-12">
                        <label for="exampleInputQuantity" className="form-label">Quantity</label>
                        <input type="text" onChange={setdata} value={inpval.aquantity} name="aquantity" className="form-control" />
                    </div>
                    
                </div>
                <div className="row">
                    <div className="mb-3 col-lg6 col-md-6 col-12">
                        <label for="exampleInputTotalIncome" className="form-label">Date</label>
                        <input type="date" onChange={setdata} value={inpval.adate} name="adate" id="adate" className="form-control"  />
                    </div>
                    
                </div>
                <div className="row">
                    <div className="mb-3 col-lg6 col-md-6 col-12">
                        <label for="exampleInputTotalIncome" className="form-label">Price</label>
                        <input type="number" onChange={setdata} value={inpval.atprice} name="atprice" className="form-control"  />
                    </div>
                    
                </div>
              
                <button type="submit" onClick={updateuser} class="btn btn-primary">update</button>
            </form>
        </div>
    )
    }


export default Update