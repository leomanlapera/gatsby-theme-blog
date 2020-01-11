/** @jsx jsx */
import {
  jsx,
  Layout as ThemeLayout,
  Header,
  Footer,
  Main,
  Container,
  useColorMode
} from "theme-ui";
import { Global } from "@emotion/core";

import Head from "./head";
import Foot from "./foot";
import SEO from "./seo";

export default props => {
  const [mode, setMode] = useColorMode();
  const toggleMode = e => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <ThemeLayout>
      <SEO />
      <Global
        styles={theme => ({
          body: {
            margin: 0
          },
          a: {
            color: theme.colors.heading,
            textDecoration: "none"
          },
          h1: {
            color: theme.colors.heading
          },
          h2: {
            color: theme.colors.heading,
            marginTop: theme.space[6]
          },
          h3: {
            color: theme.colors.heading,
            marginTop: theme.space[6]
          },
          p: {
            marginTop: theme.space[5]
          }
        })}
      />
      <Header>
        <Head
          py={5}
          title="#100DaysOfGatsby"
          toggleMode={toggleMode}
          mode={mode}
        />
      </Header>
      <Main>
        <Container>{props.children}</Container>
      </Main>
      <Footer>
        <Foot
          py={5}
          twitter="https://twitter.com/leomanlapera"
          github="https://github.com/leomanlapera"
        />
      </Footer>
    </ThemeLayout>
  );
};
