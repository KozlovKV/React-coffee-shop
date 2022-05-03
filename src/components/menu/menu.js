import { Link } from 'react-router-dom';

import logoBlack from './svg/logo-black.svg';
import logoWhite from './svg/logo-white.svg';
import './menu.scss';

export default function Menu(props) {
	const color = props.white ? 'white' : 'black';
	return (
		<nav style={{ textAlign: props.align, color }} >
			<Link to="/">
				<img src={props.white ? logoWhite : logoBlack} alt="Logo" />
			</Link>
			<Link to="/goods" style={{color}}>
				Our coffee
			</Link>
			<Link to="/pleasure" style={{color}}>
				For your pleasure
			</Link>
		</nav>
	);
}