import React from 'react';
import '../../styles/index.scss';
import '../../styles/reset.scss';
import Footer from '../footer/footer';

import Nav from '../nav/nav';
import layoutStyles from './layout.module.scss';

const Layout = props => (
  <>
    <Nav />
    <div className={layoutStyles.container}>
      <main>{props.children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;
