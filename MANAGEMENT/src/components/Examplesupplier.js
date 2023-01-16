import React from 'react';
import ReactToPrint from 'react-to-print';
import Supplierreport from './Supplierreport';




export default class Examplesupplier extends React.Component {

  render() {

    return (

      <div>

        <ReactToPrint
         trigger={() => {

            return <a className='exam' href="#">Download PDF</a>;

          }}

          content={() => this.componentRef}

        />

        <Supplierreport ref={el => (this.componentRef = el)} />

      </div>

    );

  }

}