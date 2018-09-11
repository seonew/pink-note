import React from 'react';
import styles from './Item.css';
import Item from './Item';

class ItemList extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="item-list">
          <Item/>
          <Item/>
        </div>
      </React.Fragment>
    );
  }
}

export default ItemList;