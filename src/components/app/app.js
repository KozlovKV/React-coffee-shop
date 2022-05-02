import { useState } from 'react';

import Menu from '../menu/menu';
import BeansDivider from '../beans-divider/beans-divider';
import AboutUsPage from '../pages/about-us/about-us';
import GoodsPage from '../pages/goods/goods';
import PleasurePage from '../pages/pleasure/pleasure';
import SingleItemPage from '../pages/single-item/single-item';

import './app.scss';

const pageComponents = {
    'about-us': AboutUsPage,
    'goods': GoodsPage,
    'pleasure': PleasurePage,
    'single-item': SingleItemPage,
}

function _getCachedPage() {
    let page = localStorage.getItem('page');
    return page ? page : 'about-us';
}

export default function App(props) {
    const [page, setPageState] = useState(_getCachedPage())


    const setPage = (page) => {
        localStorage.setItem('page', page);
        setPageState(page);
    }

    const PageContent = pageComponents[page];
    return (
        <>
            <PageContent onMenuClick={setPage} />
            <footer className='container'>
                <Menu onMenuClick={setPage} />
                <BeansDivider />
            </footer>
        </>
    );
}
