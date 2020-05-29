import { Link } from 'gatsby';
import React from 'react';
import navStyles from './nav.module.scss';

const Nav = () => {
  return (
    <header className={navStyles.header}>

        <div className={navStyles.container}>
          <nav>
            <ul className={navStyles.menu}>
              <li>
                <Link activeClassName={navStyles.activeNavItem} to="/">
                  FORSIDE
                </Link>
              </li>
              <li>
                <Link activeClassName={navStyles.activeNavItem} to="/products">
                  PRODUKTER
                </Link>
              </li>
              <li>
                <Link className={navStyles.logo} to="/">
                  bageriet
                </Link>
              </li>
              <li>
                <Link activeClassName={navStyles.activeNavItem} to="/contact">
                  KONTAKT
                </Link>
              </li>
              <li>
                <Link activeClassName={navStyles.activeNavItem} to="/login">
                  LOGIN
                </Link>
              </li>
            </ul>
          </nav>
        </div>

    </header>
  );
};

export default Nav;
