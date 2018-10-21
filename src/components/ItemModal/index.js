import React from 'react';
import './ItemModal.css';
import ReactHtmlParser from 'react-html-parser';

class ItemModal extends React.Component {

  render () {
    const { contents, opened } = this.props;

    return (
      <React.Fragment>
        <div className="modal-container">
          <div id="modal" className={ !opened ? "hidden" : "" }>
            <div className="modal-header">
              <span id="close"></span>
            </div>
            <div className="modal-content">{ReactHtmlParser(contents)}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  static defaultProps = {
    opened: false
  }
}

export default ItemModal;

