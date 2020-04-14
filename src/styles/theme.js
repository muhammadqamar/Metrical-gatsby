// Theme

const theme = {
  font: {
    primary: `'HK Grotesk Normal'`,
    secondary: `'HK Grotesk Medium'`,
    light: `'HK Grotesk Light'`,
    normal: `'HK Grotesk Normal'`,
    medium: `'HK Grotesk Medium'`,
    semibold: `'HK Grotesk Semibold'`,
    bold: `'HK Grotesk Bold'`,
    extrabold: `'HK Grotesk Extra Bold'`,
  },
  font_size: {
    xxxsmall: "font-size: 12px;",
    xxsmall: "font-size: 14px;",
    xsmall: "font-size: 16px;",
    small: "font-size: 18px;",
    regular: "font-size: 22px; line-height: 30px;",
    large: "font-size: 28px; line-height: 30px;",
    larger: "font-size: 40px; line-height: 50px;",
    xlarge: "font-size: 48px; line-height: 48px;",
  },
  clip_path: "clip-path: polygon(0 0, 100% 0, 100% calc(100% - 8vw), 0 100%);",
  color: {
    primary: "#4559A7",
    secondary: "#098c8c",
    accent: "#cca86e",
    gradiant: "linear-gradient(130deg, rgb(55, 70, 128) 17%, rgb(102, 136, 178) 50%, rgb(83, 179, 170) 88%)",
    background: {
      white: "#ffffff",
      light: "#f8f8f8",
    },
    white: {
      regular: "#ffffff",
      lessdark: "#faf9f8",
      dark: "#f6f6f6",
      darker: "#eeeeee",
    },
    black: {
      lightest: "#747C92",
      light: "#4C4C4D",
      regular: "#323031",
    },
  },
  screen: {
    xxxs: "319px",
    xxs: "479px",
    xs: "575px",
    sm: "767px",
    md: "991px",
    lg: "1199px",
  },
}

export default theme
