import { styled, Box, Button, IconButton, Link } from '@mui/material';
import { HashLink } from 'react-router-hash-link';

export const HeaderWrapper = styled(Box)`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  position: absolute;
  transition: all 0.1s ease-in-out;

  ${({ theme }) => theme.breakpoints.down('md')} {
    position: fixed;
  }
`;

export const HeaderContainerStyled = styled('header')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height: 85px;
  max-height: 85px;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    padding: 0 32px;
  }

  ${({ theme }) => theme.breakpoints.down(860)} {
    padding: 0 16px;
    column-gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 64px;
  }
`;

export const NavContainer = styled('nav')`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 40px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    order: 1;
  }

  ${({ theme }) => theme.breakpoints.down(860)} {
    column-gap: 20px;
  }
`;

export const NavLinkStyled = styled('a')`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 16px;
  line-height: 29px;
  font-weight: 400;
  letter-spacing: 0.01em;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
    transition: all 0.2s ease;
    cursor: pointer;
  }
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
  width: 100%;
  max-width: 180px;
`;

export const HeaderButton = styled(Button)`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  text-transform: none;
  border-radius: 37px;
  font-family: Lato, sans-serif;
  background: linear-gradient(95.56deg, #874da2 0.25%, #c43a30 104.71%);
  color: ${({ theme }) => theme.palette.text.primary};
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const HomeLink = styled(HashLink)`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export const BurgerMenu = styled(IconButton)`
  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const BurgerMenuClose = styled(IconButton)`
  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-left: 0;
    padding-right: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 100;
  }
`;
