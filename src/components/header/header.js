import { Component } from 'react';

import Menu from '../menu/menu';

import './header.scss';

export default class Header extends Component {
  render() {
	const {bgImg, onMenuClick, children} = this.props;
    return (
		<header style={{background: `url(${bgImg}) center / cover`}}>
			<div className="container">
				<Menu white align="left" onMenuClick={onMenuClick}/>
				{children}
			</div>
		</header>
    );
  }
}