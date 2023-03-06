import { List, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

import { CloseIcon } from '~/assets/images';

import {
  HashLinkStyled,
  MobileNavMenuStyled,
  NavItemButtonStyled,
  NavItemStyled,
  BurgerMenuClose,
} from './mobile-nav-menu.styled';

interface NavItem {
  title: string;
  path: string;
  onClick: () => void;
}

interface MobileNavMenuProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileNavMenu({ open, onClose, navItems }: MobileNavMenuProps): ReactElement {
  return (
    <MobileNavMenuStyled anchor='right' open={open} onClose={onClose}>
      <BurgerMenuClose onClick={onClose}>
        <CloseIcon />
      </BurgerMenuClose>
      <List>
        {navItems.map(({ title, onClick, path }, index) => (
          <NavItemStyled key={`mobile-nav-item-${index}`}>
            <HashLinkStyled href={path}>
              <NavItemButtonStyled onClick={onClick}>
                <Typography variant='button2'>{title}</Typography>
              </NavItemButtonStyled>
            </HashLinkStyled>
          </NavItemStyled>
        ))}
      </List>
    </MobileNavMenuStyled>
  );
}
