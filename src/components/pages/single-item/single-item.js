import { useParams } from 'react-router-dom';

import Header from '../../header/header';
import TextContainer from '../../text-container/text-container';
import { _getGoodsFromLocalStorage } from '../../goods-item-list/goods-item-list';
import HeaderContent from '../../header-content/header-content';

import bgImg from './single-item-bg.jpg';

export default function SingleItemPage(props) {
    const beansName = useParams().header;
    function getGoodsData() {
        const goods = _getGoodsFromLocalStorage();
        return goods.filter(data => data.header === beansName)[0];
    }

    const goodsData = getGoodsData();
    return (
        <>
            <Header bgImg={bgImg}>
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
