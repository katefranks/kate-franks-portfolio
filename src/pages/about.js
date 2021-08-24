// Step 1: Import your component
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
  aboutImage
} from './pages.module.css'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About">
    <p>Hi, I'm Kate</p>
    <StaticImage
      className={aboutImage}
      alt="Kate Franks"
      src="../images/katefranks_about.JPG"
    />
      <p>Software Developer | Endurance Sports Enthusiast | Dog Lover</p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage
