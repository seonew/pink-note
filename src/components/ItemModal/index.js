import React from 'react';
import styles from './ItemModal.css';

class ItemModal extends React.Component {

  render () {
    const { contents, opened } = this.props;

    let className = "";
    if (!opened) {
      className = "hidden";
    }
    else {
      className = "";
    }
    
    return (
      <React.Fragment>
        <div className="modal-container">
          <div id="modal" className={className}>
            <div className="modal-header">
              <span id="close"></span>
            </div>
            <div className="modal-content">{contents}</div>
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

