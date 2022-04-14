import { Component } from 'react';

import Menu from '../menu/menu';
import BeansDivider from '../beans-divider/beans-divider';

import './app.scss';
import Header from '..//header/header';

export default class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <main className='container'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quidem consequuntur sint veritatis cum id officiis, dolorum doloribus nemo, nisi eius? Reprehenderit, quisquam accusamus enim dolorum id similique deserunt at!
          Laudantium eum omnis ut nam delectus deserunt! Libero, dolorum quasi. Corporis ab veritatis nobis, illo error facilis? Ipsum voluptatum numquam accusamus, sunt sit in! Eveniet modi quae consectetur hic. Obcaecati.
          Eius exercitationem suscipit perferendis alias repellat et ipsam voluptates, non quas laboriosam? Doloremque sunt assumenda inventore delectus exercitationem qui magnam adipisci quasi, aut eaque ut unde architecto voluptates at debitis.
          Excepturi repellendus velit architecto voluptas, maxime beatae similique, iure placeat magnam deleniti quo laudantium! Qui tempore totam, neque assumenda quae magni corporis odio sint reprehenderit placeat modi ullam eligendi! Natus.
          Deleniti ipsum eligendi sunt exercitationem fugit saepe possimus, voluptatibus cumque, error eaque nam rerum similique. Sed beatae sunt iste et vel quisquam. Libero eligendi labore beatae harum, repellendus expedita voluptatibus.
        </main>
        <footer className='container'>
          <Menu/>
          <BeansDivider/>
        </footer>
      </>
    );
  }
}
