import React from 'react';
import './Item.css';

class Item extends React.Component {
  
  handleClick(event) {
    const { onClick } = this.props;
    const { contents } = this.props.note;
    const note = {
      contents: contents
    };

    onClick(note);
    event.stopPropagation();
  }

  render () {
    const { title, date, contents } = this.props.note;
    const onClickCallback = this.handleClick.bind(this);

    return (
      <React.Fragment>
        <div className="item" onClick={onClickCallback} >
          <p className="title">{title}</p>
          <span className="date">{this.getDate(date)}</span>
          <span className="blind"> {contents}</span>
        </div>
      </React.Fragment>
    );
  }

  static defaultProps = {
    note: {}
  }

  getDate(timestampParam) {
    let date = new Date(timestampParam);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = "0" + month;
    }

    if (day < 10) {
      day = "0" + day;
    }

    // let result = year + "." + month + "." + day;
    let result = [year, month, day].join("-");

    return result;
  }
}

export default Item;