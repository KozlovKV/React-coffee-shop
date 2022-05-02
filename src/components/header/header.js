import Menu from '../menu/menu';

import './header.scss';

export default function Header(props) {
	const { bgImg, onMenuClick, children } = props;
	return (
		<header style={{ background: `url(${bgImg}) center / cover` }}>
			<div className="container">
				<Menu white align="left" onMenuClick={onMenuClick} />
				{children}
			</div>
		</header>
	);
}