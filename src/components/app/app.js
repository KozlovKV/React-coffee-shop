import { Component } from 'react';

import Menu from '../menu/menu';
import BeansDivider from '../beans-divider/beans-divider';
import AboutUsPage from '../pages/about-us/about-us';
import GoodsPage from '../pages/goods/goods';
import PleasurePage from '../pages/pleasure/pleasure';

import './app.scss';

export default class App extends Component {
  static pageComponents = {
    'about-us': AboutUsPage,
    'goods': GoodsPage,
    'pleasure': PleasurePage,
  }

  constructor(props) {
    super(props);

    const page = localStorage.getItem('page');
    this.state = {
      page: page ? page : 'about-us',
    }
  }

  setPage = (page) => {
    localStorage.setItem('page', page); 
    this.setState({page});
  }

  render() {
    const PageContent = App.pageComponents[this.state.page];
    return (
      <>
        <PageContent onMenuClick={this.setPage}/>
        <footer className='container'>
          <Menu />
          <BeansDivider />
        </footer>
      </>
    );
  }
}
