import React, { Component } from "react";
import axios from 'axios';


export default class Rdetails extends Component {

  constructor(props) {
    super(props);

    this.state = {
      rdposts: []
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("http://localhost:8000/rd/get").then(res => {
      if (res.data.success) {
        this.setState({
          rdposts: res.data.extistingEmp
        });
        console.log(this.state.rdposts)
      }
    });
  }


  handleClick = async () => {
    const response = await fetch()
  }

  filterData(rdposts, searchKey) {
    const result = rdposts.filter((rdposts) =>
    rdposts.pname.includes(searchKey)


    )
    this.setState({ rdposts: result })
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8000/rd/get").then(res => {
      if (res.data.success) {

        this.filterData(res.data.extistingEmp, searchKey)
      }
    });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/rd/delete/${id}`).then((res) => {
      alert("deleted succcess");
      this.retrievePosts();
    })
  }
  render() {
    return (
      <div>



        <div className="container">


          <div>
            <center>
              <br /><br />
              <h1>Product's Technical Details</h1>
              <p className="pEdetais"></p></center>
            <nav className="navbar">
              <div className="container-fluid">
                <form className="d-flex">

                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="searchQuery" onChange={this.handleSearchArea} />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                 
                </form>
              </div>
            </nav>
            <br />
            <div className="RDdetailsbox">
              <table className="table">

                <thead>


                  <tr className="tr">
                    <th scope="col" className>#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Chemical Name</th>
                    <th scope="col">Manufacturer</th>
                    <th scope="col">Existing packs available</th>
                    <th scope="col">Medical Advice</th>
                    <th scope="col">Manufacture Date</th>
                    <th scope="col">Expire Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody >
                  {this.state.rdposts.map((rdposts, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>

                      <td >{rdposts.pname}</td>
                      <td>{rdposts.cname}</td>
                      <td>{rdposts.manufacturer}</td>
                      <td >{rdposts.epacks}</td>
                      <td>{rdposts.madvice}</td>
                      <td>{rdposts.mdate}</td>
                      <td>{rdposts.edate}</td>

                      <td>
                        
                          <a className="btn btn-warning" href={`/employee/${rdposts._id}`}>
                            <i className="fas fa-edit"></i>&nbsp;Edit
                          </a>
                          &nbsp;
                          <a className="btn btn-danger" href="#" onClick={() => this.onDelete(rdposts._id)} >
                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                          </a>
                        
                      </td>
                    </tr>

                  ))}


                </tbody>
              
              </table>
              
                
              <center>
                
                <button type="button" className="btn btn-success"><a href="/createrd" style={{ textDecoration: 'none', color: 'white' }}>Add Details</a></button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a className="btn btn-success" href="/reportrd">Report</a>
              </center>
            </div>
          </div>
        </div>
      </div>

    )
  }
}