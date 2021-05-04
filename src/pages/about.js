import * as React from "react"
import { Link } from "gatsby"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <h1>About Me (<span className="code">whoami</span>)</h1>
    <div className="about-me">
      <div>
        <p>I am a recent computer science graduate and a full-time data analyst at Liberty University.</p>
        <p>I enjoy learning all about computer science — embedded systems, computer architecture, networking, security... even the history of computing.  The only thing I'm not in love with is CSS and styling (<em>not that it really counts</em>).</p>
        <ul>
          <li>Check out my <strong><a target="_blank" rel="noopener noreferrer" href="https://github.com/lorth001">GitHub <FaGithub color="#6e5494" size="1.5em" /></a></strong> to see what I'm working on.</li>
          <li>Send me an invite on <strong><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lukeorth/">LinkedIn <FaLinkedin color="#0077B5" size="1.5em" /></a></strong> if you're interested in connecting and communicating.</li>
        </ul>
      </div>

      <StaticImage
        src="../images/about-pic-2.jpg"
        quality={70}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Luke Orth family picture"
        style={{ marginBottom: `1.45rem` }}
        placeholder="tracedSVG"
      />
    </div>
    <hr></hr>
    <h1>About This Blog</h1>
    <p>This blog serves as a repository for my projects and research into various CS topics.  The scope is intentionally broad, as I plan to include a lot of variety in my posts.</p>
    <p>My hope is that this platform helps motivate me to research, write, and share about the things I'm currently working on and interested in.</p>

  </Layout>
)

export default AboutPage