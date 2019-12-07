/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

// EXAMPLE 
// https://til.hashrocket.com/posts/qm5abe6ay8-wrap-the-root-of-a-gatsby-app-in-a-component

// import React from 'react';
// import { Provider } from 'react-redux';

// import store from './src/store';

// export const wrapRootElement = ({ element }) => {
//   return (
//     <Provider store={store}>{element}</Provider>
//   );
// }