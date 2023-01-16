import React from 'react';
import ReactToPrint from 'react-to-print';

import Reportrd from './Reportrd';

export default class Rdexample extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <a className='shamilex' href="#">Print this out!</a>;
          }}
          content={() => this.componentRef}
        />
        <Reportrd ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}