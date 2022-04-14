import { Component } from 'react';

import GoodsItem from '../goods-item/goods-item';

import img from './goods.jpg';

export default class GoodsItemList extends Component {
  render() {
	const {children} = this.props;
    return (
		<div className='container'>
			{children}
			<div className='row row-cols-1 row-cols-md-3'>
				<GoodsItem img={img} header="BRAZIL PREMIUM" country="Brazil" price={14.99}></GoodsItem>
				<GoodsItem img={img} header="BRAZIL PREMIUM" country="Brazil" price={14.99}></GoodsItem>
				<GoodsItem img={img} header="BRAZIL PREMIUM" country="Brazil" price={14.99}></GoodsItem>
				<GoodsItem img={img} header="BRAZIL PREMIUM" country="Brazil" price={14.99}></GoodsItem>
				<GoodsItem img={img} header="BRAZIL PREMIUM" country="Brazil" price={14.99}></GoodsItem>
				<GoodsItem img={img} header="BRAZIL PREMIUM" country="Brazil" price={14.99}></GoodsItem>	
			</div>
		</div>
    );
  }
}