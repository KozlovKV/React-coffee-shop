import logoBlack from './svg/logo-black.svg';
import logoWhite from './svg/logo-white.svg';
import './menu.scss';

export default function Menu(props) {
	const setPage = (e) => {
		const { onMenuClick } = props;
		onMenuClick(e.currentTarget.dataset.page);
	}

	return (
		<nav style={{ textAlign: props.align }}>
			<span data-page="about-us" onClick={setPage}>
				<img src={props.white ? logoWhite : logoBlack} alt="Logo" />
			</span>
			<span data-page="goods" onClick={setPage}>
				Our coffee
			</span>
			<span data-page="pleasure" onClick={setPage}>
				For your pleasure
			</span>
		</nav>
	);
}