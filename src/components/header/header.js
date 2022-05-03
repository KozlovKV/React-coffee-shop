import Menu from '../menu/menu';

import './header.scss';

export default function Header(props) {
	const { bgImg, children } = props;
	return (
		<header style={{ background: `url(${bgImg}) center / cover` }}>
			<div className="container">
				<Menu white align="left" />
				{children}
			</div>
		</header>
	);
}