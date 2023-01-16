import React, { Component } from "react";
import axios from "axios";

export default class Radd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pname: "",
      cname: "",
      manufacturer: "",
      epacks: "",
      madvice: "",
      mdate: "",
      edate: "",

    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { pname, cname, manufacturer, epacks, madvice, mdate, edate } = this.state;

    const data = {
      pname: pname,
      cname: cname,
      manufacturer: manufacturer,
      epacks: epacks,
      madvice: madvice,
      mdate: mdate,
      edate: edate
    }

    console.log(data)

    axios.post("http://localhost:8000/rd/save'", data).then((res) => {
      if (res.data.success) {
        this.setState(
          {
            pname: "",
            cname: "",
            manufacturer: "",
            epacks: "",
            madvice: "",
            mdate: "",
            edate: "",

          }

        )
        alert("successfuly added");
        window.location.replace("http://localhost:3000/rdetails")
      }
    })


  }
  render() {
    return (
      <div>


        <div className="container">
        <br/><br/>
         <center> <h1 className="empreg">Product's Technical Details</h1></center>
          <br/><br/>
          <form className="frm">
            <form class="row g-3" >
              <div class="col-md-6">
                <div className="form-group">
                  <label for="inputp">Product Name</label>
                  <select className="form-select" name="pname" value={this.state.pname} onChange={this.handleInputChange}>
                    <option defaultValue={""}>Choose...</option>
                    <option value="Admire imidacloprid">Admire imidacloprid</option>
                    <option value="Natria Neem Oil Spray">Natria Neem Oil Spray</option>
                    <option value="Compare-N-Save Insect Drench">Compare-N-Save Insect Drench</option>
                    <option value="Bonide Systemic Granules">Bonide Systemic Granules</option>
                    <option value="Bioadvanced Insect, Disease,and Mite Control">Bioadvanced Insect, Disease,and Mite Control</option>
                    <option value="Mighty Mint Insect and Pest Control">Mighty Mint Insect and Pest Control</option>
                  </select>
                </div>
              </div>

              <div class="col-md-6">
                <div className="form-group">
                  <label for="inputc">Chemical Name</label>
                  <select className="form-select" name="cname" value={this.state.cname} onChange={this.handleInputChange}>
                    <option defaultValue={""}>Choose...</option>
                    <option value="Herbicides">Herbicides</option>
                    <option value="Insecticides">Insecticides</option>
                    <option value="Fungicides">Fungicides</option>
                    <option value="Sulfuric Acid">Sulfuric Acid</option>
                    
                  </select>
                </div>
              </div>

              <div class="col-12">
                <div className="form-group">
                  <label for="inputm">Manufacturer</label>
                  <select className="form-select" name="manufacturer" value={this.state.manufacturer} onChange={this.handleInputChange}>
                    <option defaultValue={""}>Choose...</option>
                    <option value="BASF">BASF</option>
                    <option value="Nufarm">Nufarm</option>
                    <option value="Sumitomo">Sumitomo</option>
                    <option value="NutriChem">NutriChem</option>
                    <option value="Syngenta">Syngenta</option>
                  </select>
                </div>
              </div>

              <div class="col-12">
                <div className="form-group">
                  <label for="inpute">Existing packs available</label>
                  <select className="form-select"name="epacks" value={this.state.epacks} onChange={this.handleInputChange}>
                    <option defaultValue={""}>Choose...</option>
                    <option value="Dozen">Dozen</option>
                    <option value="10 Dozen">10 Dozen</option>
                    <option value="50 Dozen">50 Dozen</option>
                    <option value="100 Dozen">100 Dozen</option>
                    <option value="500 Dozen">500 Dozen</option>
                    <option value="1000 Dozen">1000 Dozen</option>
                  </select>
                </div>
              </div>
             
             
              <div class="col-md-6">
                <label for="inputme" class="form-label">Medical Advice</label>
                <input type="text" class="form-control" id="inputme" name="madvice" value={this.state.madvice} onChange={this.handleInputChange} />
              </div>
              <div class="col-md-6">
                <label for="inputmd" class="form-label">Manufacture Date</label>
                <input type="Date" class="form-control" id="inputmd" name="mdate" value={this.state.mdate} onChange={this.handleInputChange} />
              </div>
              <div class="col-md-6">
                <label for="inputed" class="form-label">Expire Date</label>
                <input type="Date" class="form-control" id="inputed" name="edate" value={this.state.edate} onChange={this.handleInputChange} />
              </div>

              <div class="col-12">
                <button type="submit" class="btn btn-primary" id="btn9" onClick={this.onSubmit}>Add</button>

              </div>
            </form>
          </form>
        </div>
      </div>
    )
  }
}