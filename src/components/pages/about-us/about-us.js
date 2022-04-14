import { Component } from 'react';

import Header from '../../header/header';
import TextContainer from '../../text-container/text-container';
import GoodsItemList from '../../goods-item-list/goods-item-list';
import HeaderContent from '../../header-content/header-content';

import bgImg from './main-bg.jpg';

export default class AboutUsPage extends Component {
	render() {
		const { onMenuClick } = this.props;
		return (
			<>
				<Header bgImg={bgImg} onMenuClick={onMenuClick}>
					<HeaderContent text="Everything You Love About Coffee">
						<h2>
							We makes every day full of energy and taste
						</h2>
						<h2>Want to try our beans?</h2>
						<button>More</button>
					</HeaderContent>
				</Header>
				<main>
					<TextContainer header="About us">
						<p>
							Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
							Afraid at highly months do things on at. Situation recommend objection do intention
							so questions. As greatly removed calling pleased improve an. Last ask him cold feel
							met spot shy want. Children me laughing we prospect answered followed. At it went
							is song that held help face.
						</p>
						<p>
							Now residence dashwoods she excellent you. Shade being under his bed her, Much
							read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
							horrible but confined day end marriage. Eagerness furniture set preserved far
							recommend. Did even but nor are most gave hope. Secure active living depend son
							repair day ladies now.
						</p>
					</TextContainer>
					<div className="wood-bg">
						<GoodsItemList best onMenuClick={onMenuClick}>
							<h2>Our best</h2>
						</GoodsItemList>
					</div>
				</main>
			</>
		);
	}
}
