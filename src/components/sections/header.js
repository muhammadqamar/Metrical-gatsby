import React from "react"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import { PageHeader } from "../global"

const Header = () => {

  return (
    <HeaderWrapper id="top">
      <StyledBackgroundSection>

      </StyledBackgroundSection>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  margin-top: 90px;
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-top: 80px;
  }
`

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "home-bg.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2048) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <PageHeader>
            <HeaderTextGroup>
              <h1>Artificial Intelligence.</h1>
              <h1>Real revenue</h1>
              <h2>Smart targeting and real-time customer</h2>
              <h2>engagement give you edge you need.</h2>
            </HeaderTextGroup>
          </PageHeader>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: top;
  background-repeat: no-repeat;
  ${props => props.theme.clip_path};
  background-size: 100%;
`

const HeaderTextGroup = styled.div`
  position: absolute;
  overflow: auto;

  h1 {
    line-height: 20px;
    text-transform: uppercase;
    color: ${props => props.theme.color.white.regular};
    ${props => props.theme.font_size.large};

    @media (min-width: ${props => props.theme.screen.xxxs}) {
      ${props => props.theme.font_size.xxsmall};
      line-height: 10px;

    }

    @media (min-width: ${props => props.theme.screen.xxs}) {
      ${props => props.theme.font_size.xsmall};
      line-height: 10px;

    }

    @media (min-width: ${props => props.theme.screen.xs}) {
      ${props => props.theme.font_size.small};
      line-height: 10px;

    }

    @media (min-width: ${props => props.theme.screen.sm}) {
      ${props => props.theme.font_size.regular};
      line-height: 20px;

    }
  
    @media (min-width: ${props => props.theme.screen.md}) {
      ${props => props.theme.font_size.large};
      line-height: 20px;

    }
  
    @media (min-width: ${props => props.theme.screen.lg}) {
      ${props => props.theme.font_size.larger};
      line-height: 20px;

    }
  }

  h2 {
    color: ${props => props.theme.color.white.regular};
    ${props => props.theme.font_size.regular};
    line-height: 20px;

    @media (min-width: ${props => props.theme.screen.xxxs}) {
      ${props => props.theme.font_size.xxxsmall};
      line-height: 10px;
    }

    @media (min-width: ${props => props.theme.screen.xxs}) {
      ${props => props.theme.font_size.xxsmall};
      line-height: 10px;
    }

    @media (min-width: ${props => props.theme.screen.xs}) {
      ${props => props.theme.font_size.xsmall};
      line-height: 10px;

    }

    @media (min-width: ${props => props.theme.screen.sm}) {
      ${props => props.theme.font_size.xsmall};
      line-height: 20px;

    }
  
    @media (min-width: ${props => props.theme.screen.md}) {
      ${props => props.theme.font_size.small};
      line-height: 20px;

    }
  
    @media (min-width: ${props => props.theme.screen.lg}) {
      ${props => props.theme.font_size.regular};
      line-height: 20px;

    }
  }

`