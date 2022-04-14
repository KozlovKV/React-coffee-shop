import { Component } from 'react';


export default class FilterPanel extends Component {
	state = {
		term: '',
		country: '',
	}

	onEditFilter = (e) => {
		const {dataset, value} = e.target;
		this.setState({[dataset.filterKey]: value});
		this.props.onEditFilters(dataset.filterKey, value)
	}

	render() {
		return (
			<div className="container">
				<div className="row row-cols-1 row-cols-md-2">
					<div className="col">
						<label htmlFor="term">Looking for</label>
						<input 
							name="term" id="term" 
							type="text" placeholder="start typing here" 
							value={this.state.term} onInput={this.onEditFilter}
							data-filter-key="term"/>
					</div>
					<div className="col">
						<button 
							value="" 
							data-filter-key="country" 
							onClick={this.onEditFilter}
						>
							All
						</button>
						<button 
							value="Brazil" 
							data-filter-key="country" 
							onClick={this.onEditFilter}
						>
							Brazil
						</button>
						<button 
							value="Keniya" 
							data-filter-key="country" 
							onClick={this.onEditFilter}
						>
							Keniya
						</button>
						<button 
							value="Columbia" 
							data-filter-key="country" 
							onClick={this.onEditFilter}
						>
							Columbia
						</button>
					</div>
				</div>
			</div>
		);
	}
}