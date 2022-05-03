import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from '../menu/menu';
import BeansDivider from '../beans-divider/beans-divider';
import AboutUsPage from '../pages/about-us/about-us';
import GoodsPage from '../pages/goods/goods';
import PleasurePage from '../pages/pleasure/pleasure';
import SingleItemPage from '../pages/single-item/single-item';

import './app.scss';

export default function App(props) {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<AboutUsPage/>}/>
                <Route path='/goods' element={<GoodsPage/>}/>
                <Route path='/pleasure' element={<PleasurePage/>}/>
                <Route path='/single-item/:header' element={<SingleItemPage/>}/>
            </Routes>
            <footer className='container'>
                <Menu />
                <BeansDivider />
            </footer>
        </Router>
    );
}
