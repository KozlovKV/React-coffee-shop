import { Component } from 'react';

import './goods-item.scss';

export default class GoodsItem extends Component {
  render() {
	const {img, header, country, price} = this.props;
    return (
		<div className='col goods-item'>
			<img src={img} alt={`${header}`} />
			<div className='header'>{header}</div>
			{country ? <div className='country'>{country}</div> : null}
			<div className='price'><strong>{price}$</strong></div>
		</div>
    );
  }
}