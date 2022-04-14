import { Component } from 'react';

import GoodsItem from '../goods-item/goods-item';

import img from './goods.jpg';

export default class GoodsItemList extends Component {
	static setGoodsInLocalStorage() {
		let goods = [
			{img: img, header: "KENIYA 1 KG", country: "Keniya", price: 4.99, best: false},
			{img: img, header: "COLUMBIA 1 KG", country: "Columbia", price: 9.99, best: true},
			{img: img, header: "BRAZIL 1 KG", country: "Brazil", price: 14.99, best: false},
			{img: img, header: "KENIYA PREMIUM 1 KG", country: "Keniya", price: 4.99, best: true},
			{img: img, header: "COLUMBIA PREMIUM 1 KG", country: "Columbia", price: 9.99, best: false},
			{img: img, header: "BRAZIL PREMIUM 1 KG", country: "Brazil", price: 14.99, best: false},
		];
		localStorage.setItem('goods', JSON.stringify(goods));
	}

	static getGoodsFromLocalStorage() {
		let goodsList = localStorage.getItem('goods');
		if (!goodsList) {
			GoodsItemList.setGoodsInLocalStorage();
			return GoodsItemList.getGoodsFromLocalStorage();
		}
		return JSON.parse(goodsList);
	}

	getGoodsItems() {
		let goods = GoodsItemList.getGoodsFromLocalStorage()
		const {best, country} = this.props;
		if (best) { goods = goods.filter(item => item.best) }
		if (country) { goods = goods.filter(item => item.country === country) }
		return goods.map(
			goods => <GoodsItem
						key={goods.header} 
						img={goods.img} 
						header={goods.header} 
						country={goods.country} 
						price={goods.price}/>
		);
	}

	render() {
		const { children } = this.props;
		return (
			<div className='container'>
				{children}
				<div className='row row-cols-1 row-cols-md-3 justify-content-center'>
					{this.getGoodsItems()}	
				</div>
			</div>
		);
	}
}