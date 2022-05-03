import { Link } from 'react-router-dom';

import './goods-item.scss';

export default function GoodsItem(props) {

	const { img, header, country, price } = props;
	return (
		<Link className='col goods-item' to={`/single-item/${header}`}>
			<img src={img} alt={`${header}`} />
			<div className='header'>{header}</div>
			{country ? <div className='country'>{country}</div> : null}
			<div className='price'><strong>{price}$</strong></div>
		</Link>
	);
}