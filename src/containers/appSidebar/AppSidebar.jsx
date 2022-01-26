import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import image from 'src/constants/image';

const navigation = [
  {
    label: 'Home',
    href: '/home',
    icon: <i className="fas fa-home"></i>,
  },
  {
    label: 'Books',
    href: '/books',
    icon: <i className="fas fa-box"></i>,
    childs: [
      {
        label: 'Tes 1',
        href: '/tes-1',
      },
      {
        label: 'Tes 2',
        href: '/tes-2',
      },
      {
        label: 'Tes 3',
        href: '/tes-3',
      },
    ],
  },
];

const AppSidebar = () => {
  const [isSubmenu, setisSubmenu] = useState();

  const openSubMenu = (href) => {
    if (href === isSubmenu) {
      setisSubmenu(null);
    } else setisSubmenu(href);
  };

  const renderNavigation = () => {
    const result = [];
    navigation.map((nav) => {
      if (nav.childs) {
        result.push(
          <li key={nav.href}>
            <div className={`c-menu ${nav.href === isSubmenu ? 'show' : ''}`} onClick={() => openSubMenu(nav.href)}>
              <div className="menu">
                {nav.icon}
                <span className="link-name">{nav.label}</span>
              </div>
              <i className="fas fa-chevron-down"></i>
            </div>
            <ul className={`sub-menu ${nav.href === isSubmenu ? 'show' : ''}`}>
              {nav.childs.map((ch) => (
                <li key={nav.href + ch.href}>
                  <Link to={nav.href + ch.href}>
                    <span className="link-name">{ch.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        );
      } else {
        result.push(
          <li key={nav.href}>
            <Link to={nav.href}>
              {nav.icon}
              <span className="link-name">{nav.label}</span>
            </Link>
          </li>
        );
      }
    });

    return result;
  };

  return (
    <div className="sidebar">
      <div className="c-logo">
        <div className="logo">
          <img src={image.logo} alt="" />
        </div>
        <span className="logo-name">Dashboard</span>
      </div>
      <ul className="nav-links">{renderNavigation()}</ul>
    </div>
  );
};

export default AppSidebar;
