// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {
  btn, projectcovers, projectCoverImage, mainInfo
} from './pages.module.css'
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Portfolio">
    <h3 className={mainInfo}>Purpose | Driven | Solutions</h3>
    <section className={projectcovers}>
      <a target="_blank" href="https://mydentalrecords.herokuapp.com/">
        <StaticImage className={projectCoverImage}
          alt="Fullstack app: My Dental Records"
          src="../images/mydentalrecords_thumbnail.png"
        />
      </a>
      <a target="_blank" href="https://fullstack-chat-app-katefranks.herokuapp.com/">
        <StaticImage className={projectCoverImage}
          alt="qué tal chat app"
          src="../images/quetal_chatapp.png"
        />
      </a>
      <a target="_blank" href="https://django-rest-api-katefranks.herokuapp.com/">
        <StaticImage className={projectCoverImage}
          alt="Fullstack app: restaurant site"
          src="../images/restaurant_thumbnail.png"
        />
      </a>
      <a target="_blank" href="https://fullstack-chat-app-katefranks.herokuapp.com/">
        <StaticImage className={projectCoverImage}
          alt="Kate Franks"
          src="../images/sk8_thumbnail.png"
        />
      </a>
      <a target="_blank" href="https://katefranks.github.io/js-responsive-calculator/">
        <StaticImage className={projectCoverImage}
          alt="JavaScript Calculator"
          src="../images/js_calculator.png"
        />
      </a>
      <a href="">
        <StaticImage className={projectCoverImage}
          alt="Kate Franks"
          src="../images/katefranks_about.JPG"
        />
      </a>
    </section>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
