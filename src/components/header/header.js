import { Component } from 'react';

import Menu from '../menu/menu';
import HeaderContent from '../header-content/header-content';

import './header.scss';

export default class Header extends Component {
  render() {
    return (
		<header>
			<div className="container">
				<Menu white align="left"/>
				<HeaderContent text="Everything You Love About Coffee">
					<h2>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dolore libero quia veritatis possimus, corrupti voluptatem sed. Nobis saepe libero modi rem possimus repellat adipisci facere, ut exercitationem labore dolor.
					</h2>
					<button>More</button>
				</HeaderContent>
			</div>
		</header>
    );
  }
}