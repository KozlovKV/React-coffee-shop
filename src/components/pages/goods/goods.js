import { useState } from 'react';

import Header from '../../header/header';
import TextContainer from '../../text-container/text-container';
import GoodsItemList from '../../goods-item-list/goods-item-list';
import HeaderContent from '../../header-content/header-content';
import FilterPanel from '../../filter-panel/filter-panel';

import bgImg from './goods-bg.jpg';
import img from './drinking-woman.png'

export default function GoodsPage(props) {
	const [term, setTerm] = useState('');
	const [activeCountries, setActiveCountries] = useState({});
	const setStatesLinks = {
		'term': setTerm,
		'activeCountries': setActiveCountries,
	}

	const onEditFilters = (obj) => {
		for (let key in obj) {
			setStatesLinks[key](obj[key]);
		}
	}

	const { onMenuClick } = props;
	return (
		<>
			<Header bgImg={bgImg} onMenuClick={onMenuClick}>
				<HeaderContent text="Our Coffee" />
			</Header>
			<main>
				<TextContainer header="About our beans" img={img}>
					<p>
						Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
					</p>
					<p>
						Afraid at highly months do things on at. Situation recommend objection do intention
						so questions.
					</p>
					<p>
						As greatly removed calling pleased improve an. Last ask him cold feel
						met spot shy want. Children me laughing we prospect answered followed. At it went
						is song that held help face.
					</p>
				</TextContainer>
				<GoodsItemList onMenuClick={onMenuClick} {...{term, activeCountries}}>
					<FilterPanel onEditFilters={onEditFilters} />
				</GoodsItemList>
			</main>
		</>
	);
}
