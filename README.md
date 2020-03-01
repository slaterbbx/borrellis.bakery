[![Build Status](https://travis-ci.com/slaterbbx/borrellis-bakery.svg?branch=master)](https://travis-ci.com/slaterbbx/borrellis-bakery)

## 🐙 Borrelli's Bakery Website
The main focus of this project was to build a highly efficient, fast, reliable and future proof website for the client. We needed some method to manage some ever chainging content, ie. products and descriptions. SEO was imperitive due to the nature of the company and its target demographic. The choice was made to go with a JAM stack build that is automatically re-built upon changes in the chosen CMS platform. I chose prismic due to its simple user interface / graphQL endpoint and ability to send out a webhook upon publishing. Prismic is also a CDN ( content delivery network ) but for this project that really does not matter to us. We will only be loading content from prismic during re-build time, saving all images and data locally so that we serve up a static website 100% of the time to our visitors while still getting the benifits of a CMS type management system for our website content. Firebase was chosen for the hosting mainly because it provides the needed options to expand to a custom client user portal and backend later with firebase database and firebase functions. Travis-CI for CI / CD due to its simplicity and integration with gitHub. Pipedream is used to catch the webhook from prismic and then send a newly formatted HTTP POST request to Travis-CI to trigger a rebuild upon CMS backend changes.

## 💪 Project outline details
- **JAM stack**
- Gatsby.js ( React )
- Prismic.io / Headless CMS / Content Deliver Network
- Firebase Webhosting
- Continous integration / Continous deployment
	- CDN content managment backend hosted by prismic.io ( graphQL )
		* Webhook based rebuild using Travis CI
    * Choose specific data to be imbedded into the html on build time
		* No missing data from search engine crawlers ( local html and copy content )
		* Photos are hosted on the CDN for faster load times
		* Optimal design for SEO and performance
- Context based global state management
- Modern hook-based react design
- User accessability best practices
	- Mobile first ( not yet converted )
	- Proper Tabbable navigation ( still work in progress )
	- Rem based global scaling for Zoom and font | % based default font size
	- Em based media breakpoints
	  - View ./src/util/mediaQuery.js for more info
- Minimal dependancies
- Styled-components 💅 for the **WIN**

### View live work in progress
[Live demo of current work in progress](https://borrellis-bakery.web.app/)

### View Figma Template / Design files
[Figma design preview](https://www.figma.com/file/FD0kSXJ4qs0LyWuUXHYfjJ6m/Borrelli-s-Bakery?node-id=0%3A1)

## 🎓 Resources
These are the resources to help you understand how the CI / CD pipeline with static re-build is being handled.  
https://www.gatsbyjs.org/

#### Prismic CDN with Gatsby.js plugin for content integration on build time
I chose prismic for a few reasons. Mainly because it has free tooling to help me integrate with my CI / CD pipeline. Prismic actually has a plugin for gatsby that helps manage the remote data download and project content localization on build time. This plugin also allows for an automated "preview" method, that will display the remote content instead of the localized version, giving you live content during development on special "/preview" pages. This preview can also be used before you trigger a release during production to view the website updates. Prismic also has a webhook that can be used to trigger website rebuilds, the rebuild downloads and localizes the content, builds the updated static website, then we deploy a new version to firebase via Travis-ci. 

NOTE: I chose gatsby-source-prismic over gatsby-source-prismic-graphql because the graphql version did not play nice with styled-components and the gatsby-layout plugin together. This is not really a big deal because the v3 of gatsby-source-prismic can emulate the behavior of graphql with custom schemas that are easy to build (copy and paste).

#### CI / CD with travis-ci
Check out the `.travis.yml` in the ./root directory of the project. Here you will see how we are building and deploying from travis-ci to firebase webhosting. Most of the comments like `# - cd functions && npm install` are in regards to if you need to also deploy firebase functions with your project. 
**NOTE:** With this type of deployment it is advised to turn off "Build pushed pull request" in your travis-ci project settings on a public repository, since this will cause your site to build and deploy others changes to firebase hosting.  
https://travis-ci.com/slaterbbx/borrellis-bakery

#### Pipedream.com custom workflow / travis-ci re-build trigger on prismic.io content changes:
> Fires a Webhook POST request from prismic backend to Pipedream which trigger a POST request to Travis-ci to trigger a rebuild and deployment to firebase hosting.  

Pipedream workflow at the following link. Please note that the Authorization header value is hidden. You need to first generate ( requires installing travis CLI and Ruby ) or you can get a token from your user settings page when logged into travic-ci.com and the value for Authorization should be ( token YOUR_TOKEN_HERE )  
https://pipedream.com/@borrellisbakery/prismic-build-p_PACreJ

LICENSE: Please read the Readme.md ( this project does have copyright content )