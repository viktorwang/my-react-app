import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="myBox">
      <h1>All the courses</h1>
      <div className="myboxWrap">

      
        <Card 
          title="English Pod"
          text="It's a really good course."
          image={require('../viktorImage/bg1@1x.png')}
        />
        <Card 
          title="Chinese Food"
          text="It's a really good course."
          image={require('../viktorImage/bg2@1x.png')}
        />
        <Card 
          title="Fantastic"
          text="It's a really good course."
          image={require('../viktorImage/bg3@1x.png')}
        />
        <Card 
          title="Twinova Site"
          text="huo sdfhus sdgw www"
          image={require('../viktorImage/bg4@1x.png')}
        />
      </div>
    </div>

  




    
    {/* <div className="logos">
      <img src={require('../viktorImage/Oval@1x.png')} />
      <img src={require('../viktorImage/Polygon@1x.png')} />
      <img src={require('../viktorImage/Star@1x.png')} />
      <img src={require('../viktorImage/Triangle@1x.png')} />
    </div> */}


    <div className="mainImage" style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
