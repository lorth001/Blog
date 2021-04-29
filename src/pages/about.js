import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <StaticImage
      src="../images/about-pic-1.jpg"
      // width={300}
      // quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />

    <h1 id="about-me-luke">About Me — Luke</h1>
    <p><strong>I am a recent computer science graduate and a full-time data analyst at Liberty University.</strong></p>
    <p>I'm most interested in backend web systems and automation at the moment, but that's certainly subject to change in the future.  <strong>I enjoy learning just about anything related to CS</strong> — embedded systems, computer architecture, networking, security... even the history of computing fascinates me.  The only thing I'm not smitten with is CSS (<em>not that it really counts</em>).</p>
    
    <h1 id="about-this-blog">About This Blog</h1>
    <p><strong>This blog serves as a repository for my projects and research into CS topics.</strong></p>
    <p>The scope of the blog is intentionally broad, as I plan to have a lot of variety in my posts.  Networking, programming, security — it's all on the table.</p>
    <p>My hope is to post here at least once a month, but we'll see how realistic that is.  <strong>The goal is just to have a platform that motivates me to research, write, and share about the things I'm currently working on and thinking about.</strong>  I don't have Facebook, Instagram, TikTok, or any other <del>cool and hip</del> ridiculous social media platforms, so this is my little corner of the Internet.</p>

  </Layout>
)

export default AboutPage