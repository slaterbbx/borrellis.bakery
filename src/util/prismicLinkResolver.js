// This link resolver is needed by a plugin "gatsby-prismic-graphql" to resolve links for graphql
// You can also resolve links for auto generate pages created in prismic with the plugins functionality.
// an example would be a blog post or similar.

exports.linkResolver = function linkResolver() {
  return '/';
}