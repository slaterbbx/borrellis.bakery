[![Build Status](https://travis-ci.com/slaterbbx/borrellis-bakery.svg?branch=master)](https://travis-ci.com/slaterbbx/borrellis-bakery)

## 🐙 Borrelli's Bakery Website
The main focus of this project was to build a highly efficient, fast, reliable and future proof website. We needed some method to manage some ever chainging content, ie. products and descriptions. The choice was made to go with a JAM stack build that is automatically re-built upon changes in the chosen CMS platform. I chose prismic due to its simple user interface / graphQL and RestFul endpoints and ability to send out a webhook upon publishing. Prismic is also a CDN ( content delivery network ). We will only be loading content from prismic during re-build time, serving all images from the CDN and rich text data locally so that we serve up a static website 100% of the time to our visitors while still getting the benifits of a headless CMS and CDN for our images at the same time. Firebase was chosen for the hosting mainly because it provides the needed options to expand to a custom client user portal and backend later with firebase database and firebase functions. Travis-CI for CI / CD due to its simplicity and integration with gitHub. Pipedream is used to catch the webhook from prismic and then send a newly formatted HTTP POST request to Travis-CI to trigger a rebuild upon newly publishes content on our CMS hosted by prismic.io  

## 💪 Project outline details
- **JAM stack**
- Gatsby.js ( React )
- Prismic.io / Headless CMS / Content Deliver Network
- Firebase Webhosting
- Strong focus on SEO
- Continous integration / Continous deployment
	- CDN content managment backend hosted by prismic.io ( graphQL )
		* Webhook based rebuild using Travis CI
    * Choose specific data to be imbedded into the html on build time
		* No missing data from search engine crawlers ( local html and copy content )
		* Photos are hosted on the CDN for faster load times
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
These are the resources to help you understand how the CI / CD pipeline with static re-build and re-deploy is being handled.

### Prismic Content Managment System ( graphql ) with webhook on publish
Prismic.io is a headless CMS / CDN with a high quality freemium option
#### Prismic CDN / Headless CMS with Gatsby.js plugin for content integration on build time
Prismic has a webhook that can be used to trigger website rebuilds on Travis-ci, We need to bounce the webhook using pipedream to create an entirely custom webhook that can command a rebuild from Travis-ci ( more on that below ) the rebuild downloads and localizes the content by pulling our updated code from github and our CMS content from prismic.io during the rebuild process, all images stay hosted on the CDN by prismic and are delivered using prismics own image deliver methods globally. Then we deploy our newly rebuilt version of the website to firebase hosting via Travis-ci.

NOTE: I chose gatsby-source-prismic over gatsby-source-prismic-graphql because the graphql version did not play nice with styled-components and the gatsby-layout plugin together. This is not really a big deal because the v3 of gatsby-source-prismic can emulate the behavior of graphql with custom schemas that are easy to build (copy and paste) more info in the prismic/schemas folder or by viewing the gatsby-source-prismic v3 documentation.

#### CI / CD with travis-ci
Check out the `.travis.yml` in the ./root directory of the project. Here you will see how we are building and deploying from travis-ci to firebase webhosting. Most of the comments like `# - cd functions && npm install` are in regards to if you need to also deploy firebase functions with your project.   

**NOTE:** Environment variables are stored on travis-ci.com by going to settings on your project but one variable must be on both your local machine and travic-ci and that is the variable $PRISMIC_TOKEN  

#### Pipedream.com custom workflow / travis-ci re-build trigger on prismic.io content changes:
> A Webhook POST request is fired from prismic to Pipedream which triggers a custom formatted POST request to Travis-ci to trigger a rebuild and deployment to firebase hosting.  

Pipedream workflow at the following link. Please note that the Authorization header value is hidden. You need to first generate ( requires installing travis CLI and Ruby ) or you can get a token from your user settings page when logged into travic-ci.com and the value for Authorization value on pipedream should be ( token YOUR_TOKEN_HERE )  
https://pipedream.com/@borrellisbakery/prismic-build-p_PACreJ

LICENSE: Please read the Readme.md ( this project does have copyright content )