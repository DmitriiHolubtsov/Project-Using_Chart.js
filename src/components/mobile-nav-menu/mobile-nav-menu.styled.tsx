import { Drawer, ListItem, ListItemButton, styled, IconButton } from '@mui/material';

export const MobileNavMenuStyled = styled(Drawer)`
  top: 80px;

  & .MuiBackdrop-root {
    top: 80px;
  }

  & .MuiDrawer-paper {
    margin-top: 80px;
    width: 100%;
    background: linear-gradient(117.42deg, #000.24%, #1f2122 81.6%);

    ${({ theme }) => theme.breakpoints.down('md')} {
      margin-top: 0;
      z-index: 1;
      padding-top: 160px;
    }
  }
`;

export const NavItemStyled = styled(ListItem)`
  padding: 0;
  margin: 0;
`;

export const HashLinkStyled = styled('a')`
  width: 100%;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: 400;
`;

export const NavItemButtonStyled = styled(ListItemButton)`
  padding: 20px;
  font-weight: 400;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;

  & .MuiTypography-root {
    font-size: 24px;
    line-height: 44px;
    font-weight: 400;
    letter-spacing: 0.01em;
  }
`;

export const BurgerMenuClose = styled(IconButton)`
  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-left: 0;
    padding-right: 0;
    position: absolute;
    right: 23px;
    top: 17px;
    z-index: 100;

    & svg {
      width: 19px;
      height: 19px;
    }
  }
`;
