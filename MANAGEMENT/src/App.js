import React,{Component} from "react";
import{BrowserRouter,Route, Routes} from 'react-router-dom';
import Employeedetails from './components/Employeedetails'
import Createemp from "./components/Createemp";
import Hrlogin from "./components/Hrlogin";
import Addassets from "./components/Addassets";
import Assetsdetails from "./components/Assetsdetails";
import Home from "./components/Home";
import Hrhome from "./components/Hrhome";
import Edit from "./components/Edit";
import Report from "./Report";
import Nav from "./components/Nav";
import Assetsreport from "./components/Assetsreport";
import Example from "./components/Example";
//osanda
import Procurementreg from "./components/Procurementreg.js";
import Procurelogin from "./components/Procurelogin.js";
import Procurepage from "./components/Procurepage";
import Supplierlogin from "./components/Supplierlogin";
import Supplierreg from "./components/Supplierreg";
import Listofregsup from "./components/Listofregsup.js";
import Supupdate from "./components/Supupdate.js"; 
import Pagenavigater from "./components/Pagenavigater";
import Supprofile from "./components/Supprofile";

import GetRequest from "./components/Getrequest";
import Supplierreport from "./components/Supplierreport";
import Examplesupplier from "./components/Examplesupplier";
import './components/css/all.css'
//dinendra
import InventoryDetails from './components/InventoryDetails'
import AddProduct from "./components/AddProduct";
import Login from "./components/Login";
import Choose from "./components/Choose";
import AssetsAndMaintainance from "./components/AssetsAndMaintainance";

import AddMaintainance from "./components/AddMaintainance";
import Request from "./components/Request";
import ViewRequest from "./components/ViewRequest";
import InvUpdate from "./components/InvUpdate";

import InvReport from "./components/InvReport";
import ExampleInv from "./components/ExampleInv";
//ayeshan
import CreateAdmin from "./components/CreateAdmin";
import UpdateAdmin from "./components/UpdateAdmin";
import AdminReport from "./components/AdminReport";
import ExampleAdmin from "./components/ExampleAdmin";
import AdminDetails from "./components/AdminDetails";

//shamil
import Radd from "./components/Radd";
import Rhome from "./components/Rhome";
import Rcertificate from "./components/Rcertificate";
import Rperformance from "./components/Rperformance";
import Rupdate from "./components/Rupdate";
import Rlogin from "./components/Rlogin";
import Reportrd from "./components/Reportrd";
import Rdexample from "./components/Rdexample";
import Rdetails from './components/Rdetails'
//asini
import AddAccDetails from "./components/AddAccDetails";
import Update from "./components/Update";
import Accountreport from "./components/Accountreport";
import Exampleacc from "./components/Exampleacc";
import Accountdetails from './components/Accountdetails'



export default class App extends Component {
 render(){

    return(
      <BrowserRouter>
      <div>
   
        <Nav/>
     

        <Routes>
        

        <Route path="/" element={<Home/>}/>
        <Route path="/assets/add" element={<Addassets/>}/>
        <Route path="/login" element={<Hrlogin/>}/>
        <Route path="/details" element={<Employeedetails/>}/>
        <Route path="/create" element={<Createemp/>}/>
        <Route path="/assets" element={<Assetsdetails/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/hrhome" element={<Hrhome/>}/>
        <Route path="/report" element={<Report/>}/>
         <Route path="/nav" element={<Nav/>}/>
         <Route path="/asreport" element={<Assetsreport/>}/>
         <Route path="/example" element={<Example/>}/>
      
         <Route path="/Reg" element={<Procurementreg/>}/>  
        <Route path="/Log" element={<Procurelogin/>}/> 
        <Route path="/Procpg" element={<Procurepage/>}/>
        <Route path="/Suppllog" element={<Supplierlogin/>}/>  
        <Route path="/Supplreg" element={<Supplierreg/>}/>
        <Route path="/Listofregsupll" element={<Listofregsup/>}/>
        <Route path="/supreg/update/:id" element={<Supupdate/>}/>
        <Route path="/Navpg" element={<Pagenavigater/>}/>
        <Route path="/Supprof" element={<Supprofile/>}/>
        <Route path="/reporttt" element={<Report/>}/>
        <Route path="/Getreq" element={<GetRequest/>}/>
        <Route path="/Supreport" element={<Supplierreport/>}/>
        <Route path="/Examplesupp" element={<Examplesupplier/>}/>
        
       
        <Route path="/storeslog" element={<Login/>}/> 
        <Route path="/ch" element={<Choose/>}/> 
        <Route path="/inv" element={<InventoryDetails/>}/>
        <Route path="/ass" element={<AssetsAndMaintainance/>}/>
        <Route path="/factory" element={<AddProduct/>}/>
        <Route path="/smanager/update/:id" element={<InvUpdate/>}/>
        <Route path="/add" element={<AddMaintainance/>}/>
        <Route path="/req" element={<Request/>}/>
        <Route path="/greq" element={<ViewRequest/>}/>
        <Route path="/inpdf" element={<InvReport/>}/>
        <Route path="/expdf" element={<ExampleInv/>}/>


        <Route path="/admindetails" element={<AdminDetails/>}/>
        <Route path="/ayeadimin" element={<CreateAdmin/>}/>
        <Route path="/Update/:id" element={<UpdateAdmin/>}/>
        <Route path="/AdminReport" element={<AdminReport/>}/>
        <Route path="/ExampleAdmin" element={<ExampleAdmin/>}/>

        <Route path="/loginrd" element={<Rlogin/>}/>
        <Route path="/rhome" element={<Rhome/>}/>
        <Route path="/rdetails" element={<Rdetails/>}/>
        <Route path="/createrd" element={<Radd/>}/>
        <Route path="/rcertificate" element={<Rcertificate/>}/>
        <Route path="/rperformance" element={<Rperformance/>}/>
        <Route path="/employee/:id" element={<Rupdate/>}/>
        <Route path="/reportrd" element={<Reportrd/>}/>
        <Route path="/reportex" element={<Rdexample/>}/>
       
        
        <Route path="/accdetails" element={<Accountdetails/>}/>
        <Route path="/cr" element={<AddAccDetails/>}/>
        <Route path="/employee/update:id" element={<Update/>}/>
        <Route path="/accreport" element={<Accountreport/>}/>
        <Route path="/exreport" element={<Exampleacc/>}/>



     
        
  
        </Routes>


      </div>
      
      
      
      </BrowserRouter>
      
     
    )
 }
  
}