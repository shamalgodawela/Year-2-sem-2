import React, { Component } from "react";
import axios from 'axios';


export default class Reportrd extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("http://localhost:8000/rd/get").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.extistingEmp
        });
        console.log(this.state.posts)
      }
    });
  }


  handleClick = async () => {
    const response = await fetch()
  }

  filterData(posts, searchKey) {
    const result = posts.filter((post) =>
      post.pname.includes(searchKey)


    )
    this.setState({ posts: result })
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



        <div className="container bg-img">


          <div>
            <center>
              <br /><br />
              <h1>Product's Technical Details</h1>
              <p className="pEdetais"></p></center>
           
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
                    {/* <th scope="col">Action</th> */}
                  </tr>
                </thead>
                <tbody >
                  {this.state.posts.map((posts, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>

                      <td >{posts.pname}</td>
                      <td>{posts.cname}</td>
                      <td>{posts.manufacturer}</td>
                      <td >{posts.epacks}</td>
                      <td>{posts.madvice}</td>
                      <td>{posts.mdate}</td>
                      <td>{posts.edate}</td>

               
                    </tr>

                  ))}


                </tbody>
              
              </table>
              
                
              {<center>
                
                
                <a className="btn btn-success" href="/reportex">Report</a>
              </center> }
            </div>
          </div>
        </div>
      </div>

    )
  }
}