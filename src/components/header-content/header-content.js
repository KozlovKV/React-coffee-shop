import { Component } from 'react';

import BeansDivider from './../beans-divider/beans-divider';

import './header-content.scss';

export default class HeaderContent extends Component {
  render() {
    const {text, children} = this.props;
    return (
      <>
        <h1>{text}</h1>
        {children ?
        (<>
          <BeansDivider white/>
          {children}
        </>) 
        : null}
      </>
    );
  }
}