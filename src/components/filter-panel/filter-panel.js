import { Component } from 'react';

import './filter-panel.scss';

export default class FilterPanel extends Component {
	state = {
		term: '',
		activeCountries: {
			Brazil: true,
			Keniya: true,
			Columbia: true
		}
	}

	onEditFilter = (e) => {
		const { dataset, value } = e.target;
		this.setState({ [dataset.filterKey]: value });
		this.props.onEditFilters({ [dataset.filterKey]: value })
	}

	onToggleCountryBtn = (e) => {
		const { value } = e.target;
		this.setState(({ activeCountries }) => {
			let newActiveCountries = { ...activeCountries }
			newActiveCountries[value] = !newActiveCountries[value];
			this.props.onEditFilters({ activeCountries: newActiveCountries });
			return { activeCountries: newActiveCountries }
		});
	}

	getCountryBtnsElements() {
		const { activeCountries } = this.state;
		let countryBtnElements = [];
		for (let country in activeCountries) {
			countryBtnElements.push(
				<input
					type="button"
					key={country}
					value={country}
					className={activeCountries[country] ? "active" : null}
					data-filter-key="country"
					onClick={this.onToggleCountryBtn}
				/>
			)
		}
		return countryBtnElements;
	}

	render() {
		return (
			<div className="container">
				<div className="row row-cols-1 row-cols-md-2">
					<div className="col filter-block">
						<span>Looking for</span>
						<input
							name="term" id="term" className="active"
							type="text" placeholder="start typing here"
							value={this.state.term} onInput={this.onEditFilter}
							data-filter-key="term" />
					</div>
					<div className="col filter-block">
						<span>Or filter</span>
						{this.getCountryBtnsElements()}
					</div>
				</div>
			</div>
		);
	}
}