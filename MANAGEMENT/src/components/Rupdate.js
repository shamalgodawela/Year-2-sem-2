import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams,useNavigate } from 'react-router-dom'
import { updatedata } from './context/ContextProvider'


const Rupdate = () => {
    const {updata, setUPdata} = useContext(updatedata)

    const history = useNavigate("");
    const [inpval,setINP] = useState({
        pname:"",
        cname:"",
        manufacturer:"",
        epacks:"",
        madvice:"",
        mdate:"",
        edate:""
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
    }, []);


    const updateuser = async(e)=>{
        e.preventDefault();

        const  {pname,cname,manufacturer,epacks,madvice,mdate,edate} = inpval;

        const res2 = await fetch(`http://localhost:8000/employee/update/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                pname,cname,manufacturer,epacks,madvice,mdate,edate
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            alert("update success")
            history("/rdetails")
            setUPdata(data2);
        }

    }

    return (
        <body className="body100">
        <div className="container">
           
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg6 col-md-6 col-12">
                        <label for="exampleInputName1" className="form-label">Product Name</label>
                        <input type="text" value={inpval.pname} onChange={setdata} name="pname" className="form-control" />
                    </div>
                    <div className="mb-3 col-lg6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Chemical Name</label>
                        <input type="text" onChange={setdata} value={inpval.cname} name="cname" className="form-control" aria-describedby="emailHelp" />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col-lg6 col-md-6 col-12">
                        <label for="exampleInputAge1" className="form-label">Manufacturer</label>
                        <input type="text" onChange={setdata} value={inpval.manufacturer} name="manufacturer" className="form-control" />
                    </div>
                    <div className="mb-3 col-lg6 col-md-6 col-12">
                        <label for="exampleInputPhone1" className="form-label">Existing packs available</label>
                        <input type="text" onChange={setdata} value={inpval.epacks} name="epacks" className="form-control"  />
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col-lg6 col-md-6 col-12">
                        <label for="exampleInputwork1" className="form-label">Medical Advice</label>
                        <input type="text" onChange={setdata} value={inpval.madvice} name="madvice" className="form-control"  />
                    </div>
                    <div className="mb-3 col-lg6 col-md-6 col-12">
                        <label for="exampleInputAddress1" className="form-label">Manufacture Date</label>
                        <input type="text" onChange={setdata} value={inpval.mdate} name="mdate" className="form-control" />
                    </div>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Expire Date</label>
                    <textarea onChange={setdata} value={inpval.edate} name="edate" className="form-control"  rows="3"></textarea>
                </div>
                <button type="submit" onClick={updateuser} class="btn btn-primary">update</button>
            </form>
        </div>
        </body>
    )
}

export default Rupdate