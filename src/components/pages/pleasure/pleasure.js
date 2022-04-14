import { Component } from 'react';

import Header from '../../header/header';
import TextContainer from '../../text-container/text-container';
import GoodsItemList from '../../goods-item-list/goods-item-list';
import HeaderContent from '../../header-content/header-content';

import bgImg from '../pleasure/pleasure-bg.jpg';
import img from '../pleasure/coffee-cap.jpg'

export default class PleasurePage extends Component {
	render() {
		const { onMenuClick } = this.props;
		return (
			<>
				<Header bgImg={bgImg} onMenuClick={onMenuClick}>
					<HeaderContent text="For your pleasure" />
				</Header>
				<main>
					<TextContainer header="About our goods" img={img}>
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
					<GoodsItemList>
						<h2>------------------------------</h2>
					</GoodsItemList>
				</main>
			</>
		);
	}
}
