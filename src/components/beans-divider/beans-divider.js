import { Component } from 'react';

import black from './svg/beans-black.svg';
import white from './svg/beans-white.svg';

export default class BeansDivider extends Component {
  render() {
	let beansUrl = this.props.white ? white : black;
    return <img src={beansUrl} alt="beans_divider" />;
  }
}