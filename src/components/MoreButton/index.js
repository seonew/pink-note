import React from 'react';
import styles from './MoreButton.css';

class MoreButton extends React.Component {

  handleMoreItemClick(data) {
    const { onMoreItemClick } = this.props;
    onMoreItemClick(this.props.currentPageNo);
  }

  render () {
    const onClickCallback = this.handleMoreItemClick.bind(this);

    return (
      <React.Fragment>
        <div id="more-button" onClick = {onClickCallback}>
          <span>MORE</span>
        </div>
      </React.Fragment>
    );
  }
}

export default MoreButton;

