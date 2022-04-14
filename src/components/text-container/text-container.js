import { Component } from 'react';

import BeansDivider from './../beans-divider/beans-divider';

import './text-container.scss';

export default class TextContainer extends Component {
  render() {
    const {header, img, align, children} = this.props;
	let imgBlock, halfsStyle = {
		width: '100%', display: 'inline-block'
	};
	if (img) {
		halfsStyle.width = '49%';
		imgBlock = (
			<div style={halfsStyle}>
				<img className='content-img' src={img} alt="" />
			</div>
		);
	}
    return (
      <section className='container'>
		{imgBlock}
		<div style={{textAlign: align, ...halfsStyle}}>
			<h2>{header}</h2>
			<BeansDivider/>
			{children}
		</div>
      </section>
    );
  }
}