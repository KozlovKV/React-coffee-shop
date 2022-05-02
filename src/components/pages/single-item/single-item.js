import Header from '../../header/header';
import TextContainer from '../../text-container/text-container';
import { _getGoodsFromLocalStorage } from '../../goods-item-list/goods-item-list';
import HeaderContent from '../../header-content/header-content';

import bgImg from './single-item-bg.jpg';

export default function SingleItemPage(props) {
    function getGoodsData() {
        const goods = _getGoodsFromLocalStorage();
        const beansName = localStorage.getItem('beansName');
        return goods.filter(data => data.header === beansName)[0];
    }

    const { onMenuClick } = props;
    const goodsData = getGoodsData();
    console.log(goodsData);
    return (
        <>
            <Header bgImg={bgImg} onMenuClick={onMenuClick}>
                <HeaderContent text={goodsData.header} />
            </Header>
            <main>
                <TextContainer header="About it" img={goodsData.img} align="left">
                    <p>
                        <strong>Price: </strong>{goodsData.price}$
                    </p>
                    <p>
                        <strong>Country: </strong>{goodsData.country}
                    </p>
                    <p>
                        <strong>Description: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil optio ipsum laudantium repellat, a quae neque facilis non consequatur odio accusamus! Tempora itaque ex repellat modi, sunt debitis laboriosam.
                    </p>
                </TextContainer>
            </main>
        </>
    );
}
