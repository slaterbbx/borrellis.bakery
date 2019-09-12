import React from "react"

import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../global/base-theme"
import GlobalBaseStyles from "../global/base-styles"

const Layout = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <>
      <GlobalBaseStyles />
      {children}
    </>
  </ThemeProvider>
)

export default Layout
