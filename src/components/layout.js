import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  siteHeader,
  siteLogo,
  siteFooter,
  titleLogoContainer
} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

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
      <header className={siteHeader}>
        <div className={titleLogoContainer}>
          <h1 className={siteTitle}>{data.site.siteMetadata.title}</h1>
          <div className={siteLogo}>
            <StaticImage
              alt="kateloves2code logo"
              src="../images/kateloves2code_logo.png"
            />
          </div>
        </div>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>Portfolio</Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>About Kate</Link>
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
      <footer>
        <div className={siteFooter}>
          <p className="footer-text">© 2021 | kateloves2code</p>
        </div>
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
