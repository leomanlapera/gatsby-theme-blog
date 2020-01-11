export default {
  space: [0, 4, 8, 12, 16, 32, 48, 56, 64],
  fonts: {
    heading: "Arial, Helvetica Neue, Helvetica, sans-serif",
    body: "Georgia, Times, Times New Roman, serif"
  },
  fontSize: [16, 18, 20, 22, 27, 36, 48],
  lineHeights: {
    body: 1.45,
    heading: 1.2
  },
  colors: {
    body: "#333",
    heading: "darkslateblue",
    background: "white",
    modes: {
      dark: {
        body: "white",
        background: "black",
        heading: "white"
      }
    }
  },
  sizes: {
    default: "90vw",
    max: "42rem"
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      color: "body",
      bg: "background"
    },
    Layout: {
      fontFamily: "body",
      fontSize: 3,
      lineHeight: "body"
    },
    Header: {
      margin: "0 auto",
      maxWidth: "max",
      width: "default",
      padding: 3
    },
    Footer: {
      margin: "0 auto",
      maxWidth: "max",
      width: "default",
      padding: 3
    },
    Main: {
      margin: "0 auto",
      maxWidth: "max",
      width: "default"
    },
    Container: {
      padding: 3
    },
    h1: {
      fontSize: 6,
      fontWeight: "bold",
      lineHeight: "heading",
      marginTop: 6,
      fontFamily: "heading"
    },
    h2: {
      fontSize: 5,
      lineHeight: "heading",
      marginTop: 6,
      fontFamily: "heading"
    },
    h3: {
      fontSize: 5,
      lineHeight: "heading",
      marginTop: 6,
      fontFamily: "heading"
    },
    ul: {
      listStyle: "none",
      padding: 0,
      margin: 0
    },
    li: {
      marginTop: 6,
      marginBottom: 6
    },
    a: {
      color: "heading",
      textDecoration: "none",
      ":hover, :focus, :active": {
        color: "heading",
        textDecoration: "underline"
      }
    }
  }
};
