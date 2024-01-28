import React from 'react';
import { rem } from '@mantine/core';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const collections = [
  { emoji: '📢', label: 'Campaigns', to: '/' },
  { emoji: '📖', label: 'How it works', to: '/about' },
];

const Navbar: React.FC = () => {
  const collectionLinks = collections.map((collection, index) => (
    <NavLink
      to={collection.to}
      key={index}
      className={({ isActive }) =>
        [classes.collectionLink, isActive ? classes.collectionLinkActive : ''].join(' ')
      }
    >
      <span style={{ marginRight: rem(9), fontSize: rem(16) }}>{collection.emoji}</span>{' '}
      {collection.label}
    </NavLink>
  ));

  return (
    <div className={classes.section}>
      <div className={classes.collections}>{collectionLinks}</div>
    </div>
  );
};

export default Navbar;
