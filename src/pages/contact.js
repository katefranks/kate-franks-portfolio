import * as React from 'react'
import Layout from '../components/layout'
import {
  contactKate, contactLinks
} from './pages.module.css'



const ContactPage = () => {
  return (
    <Layout pageTitle="Contact Kate">
      <div className={contactKate}>
        <a className={contactLinks} href="https://github.com/katefranks" target="_blank" rel="noreferrer">
          💻 GitHub | Kate Franks
        </a>
        <a className={contactLinks} href="https://www.linkedin.com/in/kateloves2code/" target="_blank" rel="noreferrer">
          🌐 LinkedIn | kateloves2code
        </a>
        <a className={contactLinks}  href="mailto:kateloves2code@gmail.com?subject=Hi Kate">📫 kateloves2code@gmail.com</a>
      </div>
    </Layout>
  )
}

export default ContactPage

//check website proxy/firewall
