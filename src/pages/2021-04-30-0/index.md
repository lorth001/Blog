---
path: "/hello-world"
date: "April 30, 2021"
title: "Hello World"
author: "Luke Orth"
preview: "In this first blog post, I explain my motivations for starting a blog and some of the technical aspects that went into creating it."
image: hello-world.png
---

## Why a Blog?

I have exactly three weeks left until graduation and then I'm free — no more assigned reading, papers, projects, etc. While I've been anxiously awaiting this moment since my studies began, I'm a bit apprehensive about the future of my education. Without the direction of professors and the demands of my course syllabi, how will I ensure that I don't become complacent in my learning?

I've often viewed organized education as a roadblock to learning the subjects that most interested me (I'm looking at you, Cultural Studies class). Even in my computer science courses, there were assignments and papers that sometimes felt like a waste of time. I loved the projects and labs, but frequently procrastinated on the write-ups and reports.

Well, I was a fool. Writing down ideas and observations not only helps communicate that information to others, it also helps YOU (err me) internalize the information. In addition, it forces the writer to acknowledge the things they don't know, but assumed they did — similar to how teaching a subject can expose weaknesses in the teacher's understanding.

**In summary, I need to keep writing**. My hope is that having a public blog will motivate me to continue writing even when my assignments stop in a few weeks.

---

## How I Built the Site

Since I'm already fighting an uphill battle motivating myself to write, I wanted a platform with very little technical overhead. The process to upload a new blog post should be simple and easy. At the same time, I wanted a custom solution — not a basic WordPress template or Squarespace site.

### The Frontend

I decided to go with Gatsby for the frontend. This is for several reasons:

1. It's based on React, which I have some experience with.
2. It offers a lot of features and styling right out of the box.
3. It plays well with GraphQL and markdown.

This last point is huge. Markdown is far more readable than HTML, so having the ability to write posts in this format is great. Additionally, GraphQL provides a programmatic way to query and render these markdown files where I want them. Even though my site is completely static (no API services or databases here) it has a lot dynamic functionality thanks to GraphQL.

The snippet below is an example of the markdown file used to create this post. The top section between the three ticks "- - -" is called _front matter_. This is what GraphQL uses to query the files and render them on the site's pages.

````markdown
---
path: "/hello-world"
date: "2021-04-30"
title: "Hello World"
author: "Luke Orth"
preview: "Welcome!  In this first blog post, I explain my motivations for starting a blog and some of the technical aspects that went into creating it."
image: hello-world.png
---

```

TL;DR - I created this blog to keep my writing skills sharp. - I built the blog with Gatsby and Netlify

```

## Why a Blog?

This blog comes courtesy of my college studies winding down...
````

You can customize the front matter fields to match your needs, but these are what worked best for me. In the table below, I've provided a description for each of the fields I used and what I'm using them for:
|Field |Description|
|------|-----------|
|`path`|Used to create the URL path to the post |
|`date`|Displays the date of the post |
|`title`|Displays the title of the post|
|`author`|Displays the author of the post|
|`preview`|Displays a short snippet of text that describes the post on the homepage|
|`image`|Displays a picture for the post on the homepage|

### Hosting

I chose Netlify for hosting. This is the first time I've used them and _wow_ I'm impressed. They offer a lot for free and can build/deploy sites directly from GitHub. As soon as I push an update to my repo, Netlify leaps into action and deploys it to production — pretty cool.

---

## Summary

There you have it. An easy to use, fully customizable, blogging platform.

Adding new posts is as simple as:

1. Creating a new markdown file with the post's contents.
2. Adding relevant information to the front matter.
3. Pushing to GitHub.

The site took about 12 hours for me to build and I'm out of pocket $12 annually for the custom domain name. Not too shabby!
