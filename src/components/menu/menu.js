import { Component } from 'react';

import logoBlack from './svg/logo-black.svg';
import logoWhite from './svg/logo-white.svg';
import './menu.scss';

export default class Menu extends Component {
	setPage = (e) => {
		const { onMenuClick } = this.props;
		onMenuClick(e.currentTarget.dataset.page);
	}

	render() {
		return (
			<nav style={{ textAlign: this.props.align }}>
				<span data-page="about-us" onClick={this.setPage}>
					<img src={this.props.white ? logoWhite : logoBlack} alt="Logo" />
				</span>
				<span data-page="goods" onClick={this.setPage}>
					Our coffee
				</span>
				<span data-page="pleasure" onClick={this.setPage}>
					For your pleasure
				</span>
			</nav>
		);
	}
}