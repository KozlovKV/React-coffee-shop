import './goods-item.scss';

export default function GoodsItem(props) {
	const onSinglePage = (e) => {
		const { onMenuClick, header } = props;
		localStorage.setItem('beansName', header);
		onMenuClick('single-item');
	}

	const { img, header, country, price } = props;
	return (
		<div className='col goods-item' onClick={onSinglePage}>
			<img src={img} alt={`${header}`} />
			<div className='header'>{header}</div>
			{country ? <div className='country'>{country}</div> : null}
			<div className='price'><strong>{price}$</strong></div>
		</div>
	);
}