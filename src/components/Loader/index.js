import React from 'react';
import './Loader.css';

class Loader extends React.Component {

  render () {
    const { loading } = this.props;

    return (
      <React.Fragment>
        <div id="loader" className={ !loading ? "hidden" : "" }></div>
      </React.Fragment>
    );

  }
}

export default Loader;

