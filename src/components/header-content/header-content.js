import { Component } from 'react';

import BeansDivider from './../beans-divider/beans-divider';

import './header-content.scss';

export default class HeaderContent extends Component {
  render() {
    const {h1Text, h2Text} = this.props;
    return (
      <>
        <h1>{h1Text}</h1>
        {h2Text ?
        (<>
          <BeansDivider white/>
          <h2>{h2Text}</h2>
        </>) 
        : null}
      </>
    );
  }
}