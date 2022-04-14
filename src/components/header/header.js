import { Component } from 'react';

import Menu from '../menu/menu';
import HeaderContent from '../header-content/header-content';

import './header.scss';

export default class Header extends Component {
  render() {
    return (
		<header>
			<div className="container">
				<Menu white/>
				<HeaderContent 
					h1Text="Everything You Love About Coffee"
					h2Text="We makes every day full of energy and taste"/>
			</div>
		</header>
    );
  }
}