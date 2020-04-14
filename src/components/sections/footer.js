import React from "react"
import styled from "styled-components"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <ul>
          <li><a href="/metrical/termsofuses">Terms of use</a></li>
          <li><a href="/metrical/privacypolicy">Privacy Policy</a></li>
          <li><a href="/metrical/cookiepolicy">Cookies</a></li>
        </ul>
        <span>© Copyright <a href="/">Metrical</a>, Inc., 2020. All rights reserved.</span>
      </FooterColumn>
    </FooterColumnContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.black.regular};
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 40px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding-top: 20px;
    padding-bottom: 40px;
  }
`
const FooterColumnContainer = styled(Container)`
  text-align: left;
  @media (max-width: ${props => props.theme.screen.sm}) {
    text-align: center;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: ${props => props.theme.font_size.xsmall};
    color: ${props => props.theme.color.white.regular};
    a {
      font-size: ${props => props.theme.font_size.xsmall};
      color: ${props => props.theme.color.white.regular};
      text-decoration: none;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    color: ${props => props.theme.color.white.regular};
    li {
      display: inline-block;
      margin-bottom: 12px;
      text-transform: uppercase;
      font-family: ${props => props.theme.font.normal};
      font-size: ${props => props.theme.font_size.small};
      a {
        color: ${props => props.theme.color.white.regular};
        font-family: ${props => props.theme.font.normal};
        font-size: ${props => props.theme.font_size.small};
        text-decoration: none;
      }
    }
    li:not(:first-child):before {
      content: "|";
      margin: 5px;
    }
  }
`

export default Footer
