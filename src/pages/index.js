// Step 1: Import React
import * as React from 'react'
import { Link } from "gatsby"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Kate Franks Portfolio</title>
      <h1>Kate Franks Portfolio</h1>
      <p>Software Developer</p>
      <br />
      <Link to="/about">About Kate</Link>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage
