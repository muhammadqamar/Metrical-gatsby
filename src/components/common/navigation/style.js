import styled from "styled-components"

import { Container } from "../../global"

export const Nav = styled.nav`
  padding: ${props => (props.scrolled ? `16px 0` : `24px 0`)};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: white;
  transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
`

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavListWrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    padding-right: 10px;

    ${({ mobile }) => mobile &&
    `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
  }
`

export const NavItem = styled.li`
  margin: 0 0.75em;
  font-family: ${props => props.theme.font.bold};
  ${props => props.theme.font_size.xsmall};

  @media (max-width: ${props => props.theme.screen.lg}) {
    ${props => props.theme.font_size.xxsmall};

  }

  a {
    text-decoration: none;
    opacity: 0.9;
    color: ${props => props.theme.color.black.regular};
  }

  &.active {
    a {
      opacity: 1;
    }
  }
`

export const MobileMenu = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background: ${props => props.theme.color.regular};
`

export const Brand = styled.div`
width: 240px;
@media (max-width: ${props => props.theme.screen.md}) {
  width: 200px;
}
@media (max-width: ${props => props.theme.screen.sm}) {
  width: 160px;
}
`
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`

export const NavContainer = styled.div`
margin-left:auto; 
margin-right:0;
@media (max-width: ${props => props.theme.screen.sm}) {
    display: none;
  }
`

export const Mobile = styled.div`
  display: none;

  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
  }

  ${props => props.hide &&
    `
    display: flex;
    justify-content: flex-end;
    
    @media (max-width: ${props.theme.screen.sm}) {
      display: none;
    }
  `}
`

// Background blur info
// background-color: ${props => props.scrolled && `rgba(245, 245, 250, .8`};
// box-shadow:  ${props =>
//   props.scrolled &&
//   `0 0 0 1px rgba(0,0,50,.02) inset, 0 1px 1px rgba(0,0,50,.05) inset, 0 2px 4px rgba(0,0,50,.04) inset`};
//   backdrop-filter: ${props => props.scrolled && `blur(15px)`};
