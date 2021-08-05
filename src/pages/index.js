// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1>Kate Franks Portfolio</h1>
      <p>Software Developer</p>
      <StaticImage
        alt="Kate Franks"
        src="../images/katefranks_about.JPG"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage

// 8/4- trying to debug Gatsby CLI issue- on NMB docs page, trying to do #5.
