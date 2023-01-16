import React from 'react';
import ReactToPrint from 'react-to-print';
import AdminReport from './AdminReport';

export default class ExampleAdmin extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            
            return <a className='exam' href="#"><button type="button" class="btn btn-secondary"><i class="fa-solid fa-file-pdf"></i>  Download As PDF</button></a>;
            
          }}
          content={() => this.componentRef}
        />
        <AdminReport ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}