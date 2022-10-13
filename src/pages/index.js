import * as React from "react"
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'



const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    <p>A novel framework to solve data deficiency problems caused by privacy issues and time-consuming and costly medical data annotation processes.</p>
    <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://thumbs.dreamstime.com/b/digital-ray-human-body-scan-background-interface-d-rendering-digital-ray-human-body-scan-interface-blue-background-d-108456163.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage


