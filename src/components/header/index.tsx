import { useMediaQuery, useTheme } from '@mui/material';
import React, { ReactElement, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Logo, MenuIcon } from '~/assets/images';
import { AppRoutes } from '~/cdk/enums';
import palette from '~/cdk/theme/palette';
import MobileNavMenu from '~/components/mobile-nav-menu';

import {
  HeaderWrapper,
  HeaderContainerStyled,
  NavContainer,
  HomeLink,
  NavLinkStyled,
  HeaderButton,
  BurgerMenu,
  LinkButton,
} from './header.styled';

export default function Header(): ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [color, setColor] = useState('transparent');
  const currentPath = useLocation();

  const changeBackground = () => {
    if (!!isMobile && window.scrollY > 10) {
      setColor(palette.headerBcg);
    } else {
      setColor('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground, true);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  const navItems = [
    {
      title: 'PROBLEM',
      path: AppRoutes.Hero,
      onClick: () => {
        setMobileMenuOpened(false);
      },
    },
    {
      title: 'CHALLENGE',
      path: AppRoutes.Challenge,
      onClick: () => {
        setMobileMenuOpened(false);
      },
    },
    {
      title: 'SOLUTION',
      path: AppRoutes.Solution,
      onClick: () => {
        setMobileMenuOpened(false);
      },
    },
    {
      title: 'TRY IT OUT',
      path: AppRoutes.TryItOut,
      onClick: () => {
        setMobileMenuOpened(false);
      },
    },
  ];

  const handleMobileMenuButtonClick = (): void => {
    setMobileMenuOpened(true);
  };

  const handleMobileMenuClose = (): void => {
    setMobileMenuOpened(false);
  };

  return (
    <HeaderWrapper style={{ backgroundColor: color }}>
      <HeaderContainerStyled>
        <HomeLink to={AppRoutes.Home}>
          <Logo />
        </HomeLink>
        {currentPath.pathname !== AppRoutes.Report && (
          <>
            <NavContainer data-scroll-header>
              {isMobile ? (
                <BurgerMenu onClick={mobileMenuOpened ? handleMobileMenuClose : handleMobileMenuButtonClick}>
                  <MenuIcon />
                </BurgerMenu>
              ) : (
                <>
                  {navItems.map(({ title, path }, index) => (
                    <NavLinkStyled key={`mobile-nav-item-${index}`} href={path}>
                      {title}
                    </NavLinkStyled>
                  ))}
                </>
              )}
            </NavContainer>
            <LinkButton href={process.env.REACT_APP_BOT_URL} target='_blank'>
              <HeaderButton>Try it out!</HeaderButton>
            </LinkButton>
            <MobileNavMenu navItems={navItems} open={mobileMenuOpened} onClose={handleMobileMenuClose} />
          </>
        )}
      </HeaderContainerStyled>
    </HeaderWrapper>
  );
}
