import React, { useState, useEffect, useRef } from 'react';
import { PrimaryMenu, SecondaryMenu, useOutsideAlerter } from './MenuHelpers';
import './Menu.scss';

import MainMenuData from './Data/main-menu.json';
import SubMenuGeneric from './Data/sub-menu-generic.json';
import SubMenuFormik from './Data/sub-menu-formik.json';

function Menu({ navIcon, title }) {
  const [open, setOpen] = useState(false);
  
  function Navbar({ children, title }) {
    return (
      <nav className="navbar">
        <h3 className='navbar-heading' data-testid='navbar-main'>
          {title}
        </h3>
        <ul className="navbar-nav">{children}</ul>
      </nav>
    );
  }
  
  function NavItem({ icon, children }) {  
    return (
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {icon}
        </a>
        {open && children}
      </li>
    );
  }
  
  function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
    useOutsideAlerter(dropdownRef, setOpen);
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
    return (
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
        <PrimaryMenu
          activeMenuProp={activeMenu === 'main'}
          calcHeight={calcHeight}
          menuData={MainMenuData}
          setActiveMenu={setActiveMenu}
        /> 
        <SecondaryMenu
          activeMenuProp={activeMenu === 'generic'}
          calcHeight={calcHeight}
          menuData={SubMenuGeneric}
          setActiveMenu={setActiveMenu}
        />
        <SecondaryMenu
          activeMenuProp={activeMenu === 'formik'}
          calcHeight={calcHeight}
          menuData={SubMenuFormik}
          setActiveMenu={setActiveMenu}
        />
      </div>
    );
  }

  return (
    <Navbar title={title}>
      <NavItem icon={navIcon}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );
}
  
export default Menu;