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
    <h1>About Me — Luke</h1>
    <div className="about-me">
      <div>
        <p><strong>I am a recent computer science graduate and a full-time data analyst</strong> at Liberty University.</p>
        <p>I'm most interested in backend web systems and automation at the moment, but that's certainly subject to change in the future.  <strong>I enjoy learning anything related to CS</strong> — embedded systems, computer architecture, networking, security... even the history of computing.  The only thing I'm not in love with is CSS (<em>not that it really counts anyway</em>).</p>
        <ul>
          <li>Check out my <strong><a target="_blank" rel="noopener noreferrer" href="https://github.com/lorth001">GitHub <FaGithub color="#6e5494" size="1.5em" /></a></strong> repo to see what I'm working on.</li>
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
    <p><strong>This blog serves as a repository for my projects and research into CS topics.</strong></p>
    <p>The scope of this blog is intentionally broad, as I plan to include a lot of variety in my posts.  Algorithms, programming, security — I'll write about it all.</p>
    <p>My hope is to post here at least once a month, but time will tell how realistic that goal is.  <strong>The intent is just to have a platform that motivates me to research, write, and share about the things I'm currently working on and thinking about.</strong>  I don't have Facebook, Instagram, TikTok, or other <del>cool and hip</del> ridiculous social media platforms, so this is my little corner of the Internet.</p>

  </Layout>
)

export default AboutPage