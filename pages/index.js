import Head from "next/head";
import GlobalStyles from "../globalStyles";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../components/themes";
import { useStateValue } from "../context/StateProvider";
import { THEME_STATE } from "../context/reducer";

import Homepage from "../components/templates/Home";

export default function Home() {
  const [{ theme }] = useStateValue();

  return (
    <ThemeProvider theme={theme === THEME_STATE.LIGHT ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <Head>
          <title>Hospital Santa Rosa | Villaguay</title>
          <meta
            name="description"
            content="Cinefan 2 es una nueva version de Cinefan, nuevo diseño, nuevo esquema y nuevas sensaciones."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* home page */}
        <Homepage />
      </div>
    </ThemeProvider>
  );
}
