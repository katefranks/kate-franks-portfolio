import * as React from 'react'
import Layout from '../components/layout'
import {
  contactKate, email, contactLinks
} from './pages.module.css'



const ContactPage = () => {
  return (
    <Layout pageTitle="Contact Kate">
      <div className={contactKate}>
        <a className={contactLinks} style={{textDecoration :"none"}} href="https://github.com/katefranks" target="_blank">
          💻 GitHub | Kate Franks
        </a>
        <a className={contactLinks} style={{textDecoration :"none"}} href="https://www.linkedin.com/in/kateloves2code/" target="_blank">
          🌐 LinkedIn | kateloves2code
        </a>
        <a className={contactLinks} style={{textDecoration :"none"}} href="mailto:kateloves2code@gmail.com?subject=Hi Kate">📫 kateloves2code@gmail.com</a>
      </div>
    </Layout>
  )
}

export default ContactPage

//check website proxy/firewall
