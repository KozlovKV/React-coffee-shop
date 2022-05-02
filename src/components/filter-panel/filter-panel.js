import { useState } from 'react';

import './filter-panel.scss';

export default function FilterPanel(props) {
	const [term, setTerm] = useState('');
	const [activeCountries, setActiveCountries] = useState({
		Brazil: true,
		Keniya: true,
		Columbia: true
	});

	const onEditTerm = (e) => {
		const { dataset, value } = e.target;
		setTerm(value);
		props.onEditFilters({ [dataset.filterKey]: value })
	}

	const onToggleCountryBtn = (e) => {
		const { value } = e.target;
		setActiveCountries(( activeCountries ) => {
			let newActiveCountries = { ...activeCountries }
			newActiveCountries[value] = !newActiveCountries[value];
			props.onEditFilters({ activeCountries: newActiveCountries });
			return newActiveCountries;
		});
	}

	const getCountryBtnsElements = () => {
		let countryBtnElements = [];
		for (let country in activeCountries) {
			countryBtnElements.push(
				<input
					type="button"
					key={country}
					value={country}
					className={activeCountries[country] ? "active" : null}
					data-filter-key="country"
					onClick={onToggleCountryBtn}
				/>
			)
		}
		return countryBtnElements;
	}

	return (
		<div className="container">
			<div className="row row-cols-1 row-cols-md-2">
				<div className="col filter-block">
					<span>Looking for</span>
					<input
						name="term" id="term" className="active"
						type="text" placeholder="start typing here"
						value={term} onInput={onEditTerm}
						data-filter-key="term" />
				</div>
				<div className="col filter-block">
					<span>Or filter</span>
					{getCountryBtnsElements()}
				</div>
			</div>
		</div>
	);
}