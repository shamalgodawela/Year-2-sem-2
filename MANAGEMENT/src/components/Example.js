import React from 'react';
import ReactToPrint from 'react-to-print';
import Assetsreport from './Assetsreport';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            
            return <a className='exam' href="#">Print this out!</a>;
          }}
          content={() => this.componentRef}
        />
        <Assetsreport ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}
