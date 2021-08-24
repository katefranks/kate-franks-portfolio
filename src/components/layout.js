import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  btn,
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  siteFooter,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={container}>
      <title>{data.site.siteMetadata.title} | {pageTitle} </title>
      <header>
      <h1 className={siteTitle}>{data.site.siteMetadata.title}</h1>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Portfolio</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About Me</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      </header>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer className={siteFooter}>
        <p className="footer-text">© 2021 | kateloves2code</p>
      </footer>
    </div>
  )
}
export default Layout

// Blog post link:
// <li className={navLinkItem}>
//   <Link to="/blog" className={navLinkText}>
//     Blog
//   </Link>
// </li>
