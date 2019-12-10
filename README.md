[![Build Status](https://travis-ci.com/slaterbbx/borrellis-bakery.svg?branch=master)](https://travis-ci.com/slaterbbx/borrellis-bakery)

## 💯 Borrelli's Bakery Website
The main focus of this project was to build a highly efficient, fast, reliable and future proof website for the client. We needed some method to manage some ever chainging content, ie. products and descriptions. SEO was imperitive due to the nature of the company and its target demographic. The choice was made to go with a JAM stack build that is automatically re-built upon changes in the chosen CMS platform. I chose prismic due to its simple user interface / graphQL endpoint and ability to send out a webhook upon publishing. Prismic is also a CDN ( content delivery network ) but for this project that really does not matter to us. We will only be loading content from prismic during re-build time, saving all images and data locally so that we serve up a static website 100% of the time to our visitors while still getting the benifits of a CMS type management system for our website content. Firebase was chosen for the hosting mainly because it provides the needed options to expand to a custom client user portal and backend later with firebase database and firebase functions. Also its "freemium" tier for hosting is a great selling point too. The process of hosting and deployment is resting entirely on "freemium" services for this build. Prismic.io for the backend, Google firebase for hosting, Travis-CI for CI / CD and Pipedream is used to catch the webhook from prismic and then send a HTTP POST to Travis-CI to trigger a rebuild upon CMS backend changes.

## 💪 Project details
- **JAM** stack
- Gatsby.js
- Prismic.io CMS
- Firebase
- Continous integration
- Continous deployment
- Automated static website re-build and deployment
	- CDN content managment backend hosted by prismic.io ( graphQL )
  	- Data is downloaded from the CDN on build time only and served locally
		- No missing data from search engine crawlers
		- Optimal design for SEO and performance
- Context based global state management
- Multi page app with a SPA feel
- Modern hook based react design
- Strong UI / UX focus
- Strong focus on optimization
- User accessability best practices
	- Mobile first
	- Tabbable navigation
	- Rem based global scaling
	- Em based media breakpoints
- Minimal dependancies
- Styled-components 💅 for the **WIN**

## 🏃‍♂️ View live work in progress
https://borrellis-bakery.web.app/

## 😎 View Figma design
https://www.figma.com/file/FD0kSXJ4qs0LyWuUXHYfjJ6m/Borrelli-s-Bakery?node-id=0%3A1

## 🎓 Framework details
Website built in react bootstrapped by gatsby.js
https://www.gatsbyjs.org/

## 💫 W.I.P.
This project is a current work in progress.
