// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {
  btn
} from './pages.module.css'
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="There's always a reason to smile...">
    <a style={{textDecoration :"none"}} href="/contact">
      <div className={btn}>Let's find it!</div>
    </a>
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
