// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {
  btn, projectcovers, projectCoverImage
} from './pages.module.css'
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Portfolio">
    <h3 className="maininfo">Purpose.Driven.Solutions</h3>
    <section className={projectcovers}>
      <a target="_blank" href="https://mydentalrecords.herokuapp.com/">
      <StaticImage className={projectCoverImage}
        alt="Kate Franks"
        src="../images/mydentalrecords_thumbnail.png"
      />
      </a>
      <a target="_blank" href="https://fullstack-chat-app-katefranks.herokuapp.com/">
      <StaticImage className={projectCoverImage}
        alt="Kate Franks"
        src="../images/quetal_chatapp.png"
      />
      </a>
      <StaticImage className={projectCoverImage}
        alt="Kate Franks"
        src="../images/katefranks_about.JPG"
      />
      <StaticImage className={projectCoverImage}
        alt="Kate Franks"
        src="../images/katefranks_about.JPG"
      />
    </section>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
