// Step 1: Import your component
import * as React from 'react'
import { Link } from "gatsby"

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <title>About</title>
      <h1>About Kate</h1>
      <p>Software Developer</p>
      <p>Endurance Sports Enthusiast</p>
      <p>Dog Lover</p>
      <br />
      <Link to="/">Home</Link>
    </main>
  )
}

// Step 3: Export your component
export default AboutPage
