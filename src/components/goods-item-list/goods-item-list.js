import GoodsItem from '../goods-item/goods-item';

import img from './goods.jpg';

export default function GoodsItemList(props) {
    function getFilteredGoods(goods) {
        const { best, activeCountries, term } = props;
        if (best) { goods = goods.filter(item => item.best) }
        for (let country in activeCountries) {
            if (!activeCountries[country]) {
                while (goods.findIndex(
                    item => item.country === country) > -1
                ) {
                    goods.splice(goods.findIndex(item => item.country === country), 1);
                }
            }
        }
        if (term) { goods = goods.filter(item => item.header.toLowerCase().indexOf(term.toLowerCase()) > -1) }
        return goods;
    }

    function getGoodsItems() {
        let goods = _getGoodsFromLocalStorage()
        const { onMenuClick } = props;
        goods = getFilteredGoods(goods);
        return goods.map(
            goods => <GoodsItem
                key={goods.header}
                img={goods.img}
                header={goods.header}
                country={goods.country}
                price={goods.price}
                onMenuClick={onMenuClick} />
        );
    }

    const { children } = props;
    return (
        <div className='container'>
            {children}
            <div className='row row-cols-1 row-cols-md-3 justify-content-center'>
                {getGoodsItems()}
            </div>
        </div>
    );
}

export function _setGoodsInLocalStorage() {
    let goods = [
        { img: img, header: "KENIYA 1 KG", country: "Keniya", price: 4.99, best: false },
        { img: img, header: "COLUMBIA 1 KG", country: "Columbia", price: 9.99, best: true },
        { img: img, header: "BRAZIL 1 KG", country: "Brazil", price: 14.99, best: false },
        { img: img, header: "KENIYA PREMIUM 1 KG", country: "Keniya", price: 4.99, best: true },
        { img: img, header: "COLUMBIA PREMIUM 1 KG", country: "Columbia", price: 9.99, best: false },
        { img: img, header: "BRAZIL PREMIUM 1 KG", country: "Brazil", price: 14.99, best: false },
    ];
    localStorage.setItem('goods', JSON.stringify(goods));
}

export function _getGoodsFromLocalStorage() {
    let goodsList = localStorage.getItem('goods');
    if (!goodsList) {
        _setGoodsInLocalStorage();
        return _getGoodsFromLocalStorage();
    }
    return JSON.parse(goodsList);
}