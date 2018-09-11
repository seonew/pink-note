import React from 'react';
import styles from './Item.css';

class Item extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="item">
          <p className="title">Note #994</p>
          <span className="date">2018-09-04</span>
          <span className="blind">
            <div><strong>Pink Notes</strong></div>
            <img src="https://adc3ef35f321fe6e725a-fb8aac3b3bf42afe824f73b606f0aa4c.ssl.cf1.rackcdn.com/tenantlogos/15979.png"/>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default Item;