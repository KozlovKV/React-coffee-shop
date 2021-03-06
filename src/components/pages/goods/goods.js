import { Component } from 'react';

import Header from '../../header/header';
import TextContainer from '../../text-container/text-container';
import GoodsItemList from '../../goods-item-list/goods-item-list';
import HeaderContent from '../../header-content/header-content';
import FilterPanel from '../../filter-panel/filter-panel';

import bgImg from './goods-bg.jpg';
import img from './drinking-woman.png'

export default class GoodsPage extends Component {
	state = {
		term: '',
		activeCountries: {},
	}

	onEditFilters = (obj) => {
		this.setState(obj);
	}

	render() {
		const {onMenuClick} = this.props;
		return (
			<>
				<Header bgImg={bgImg} onMenuClick={onMenuClick}>
					<HeaderContent text="Our Coffee"/>
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
					<GoodsItemList onMenuClick={onMenuClick} {...this.state}>
						<FilterPanel onEditFilters={this.onEditFilters}/>
					</GoodsItemList>
				</main>
			</>
		);
	}
}
