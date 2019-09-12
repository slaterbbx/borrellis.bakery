import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"

import Icon from "../util/icons/icons"
import * as Styles from "./index-styles"
import PageWrapper from "../components/pageWrapper/pageWrapper"
import Navigation from "../components/navigation/navigation"
import SudoTable from "../util/sudoTable"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <PageWrapper src="displayCase.jpg" innerGradiant={true}>
        <Navigation />
        <SudoTable>
          <Icon name="logo" styles={Styles.Logo} />
        </SudoTable>
      </PageWrapper>
    </>
  )
}

export default IndexPage
