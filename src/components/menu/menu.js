import { Component } from 'react';

import { logo } from './logo';
import './menu.scss';

export default class Menu extends Component {
  render() {
    return (
      <nav>
		<a href="./">
			{logo}
		</a>
		<a href="./">
			Our coffee
		</a>
		<a href="./">
			Our pleasure
		</a>
      </nav>
    );
  }
}