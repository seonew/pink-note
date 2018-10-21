import React from 'react';
// import './Item.css';
import Item from '../Item';

class ItemList extends React.Component {

  handleItemClick(note) {
    const { onItemClick } = this.props;
    onItemClick(note);
  }

  render() {
    const { data } = this.props;
    const onClickCallback = this.handleItemClick.bind(this);

    const list = data.map(
      note => (<Item key={note.id} note={note} onClick={onClickCallback} />)
    );

    return (
      <React.Fragment>
        <div className="item-list">
          {list} 
        </div>
      </React.Fragment>
    );
  }

  static defaultProps = {
    data: []
  }
}

export default ItemList;