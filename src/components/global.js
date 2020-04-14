import styled from "styled-components"
export const Container = styled.div`
  max-width: 1900px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 700px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 900px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 1200px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1900px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1900px !important;
  `};
`

export const PageHeader = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media (min-width: ${props => props.theme.screen.xxxs}) {
    max-width: 320px;
    height: 200px;
  }

  @media (min-width: ${props => props.theme.screen.xxs}) {
    max-width: 480px;
    height: 290px;
  }
  
  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
    height: 340px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
    height: 440px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
    height: 600px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
    height: 720px;
  }

`

export const Section = styled.section`
  padding: 80px 0;
  overflow: hidden;
  background-color: ${props => {
    switch (props.accent) {
      case "secondary":
        return props.theme.color.white.dark
      case "main":
        return props.theme.color.primary
      default:
        return "white"
    }
  }};

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 80px 0;
  }

  ${props =>
    props.accent &&
    `background-color: ${
    props.accent === "secondary"
      ? props.theme.color.white.dark
      : props.theme.color.primary
    }`};
`

export const ButtonSolid = styled.div`
  font-family: ${props => props.theme.font.bold};
  ${props => props.large ? props.theme.font_size.regular : props.theme.font_size.xsmall};
  color: white;
  background: ${props => props.theme.color.gradiant};
  border-radius: 4px;
  padding: 10px 46px;
  text-transform: uppercase;
`

export const ButtonLined = styled.div`
  font-family: ${props => props.theme.font.bold};
  ${props => props.large ? props.theme.font_size.regular : props.theme.font_size.xxsmall};
  color: ${props => props.theme.color.black.regular};
  background: white;
  border-radius: 4px;
  border: 2px solid #4559A7;
  padding: 10px 46px;
  text-transform: uppercase;
`