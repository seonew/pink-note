import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

library.add(faGem)

class Header extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div id='header'>
          <span><FontAwesomeIcon icon='gem'/></span> PINK NOTE <span><FontAwesomeIcon icon='gem'/></span>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;