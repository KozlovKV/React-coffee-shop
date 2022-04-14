import { Component } from 'react';

import logoBlack from './svg/logo-black.svg';
import logoWhite from './svg/logo-white.svg';
import './menu.scss';

export default class Menu extends Component {
  render() {
    return (
      <nav>
		<span>
			<img src={this.props.white ? logoWhite : logoBlack} alt="" />
		</span>
		<span>
			Our coffee
		</span>
		<span>
			Our pleasure
		</span>
      </nav>
    );
  }
}