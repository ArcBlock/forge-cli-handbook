require('dotenv').config();

const path = require('path');
const { version } = require('./package.json');
const pathPrefix = '/forgecli/';

module.exports = {
  pathPrefix,
  plugins: [
    {
      resolve: require.resolve('@arcblock/www'),
    },
    {
      resolve: require.resolve('@arcblock/gatsby-theme-docs'),
      options: {
        version: `v${version}`,
        official: true,
        disableI18n: false,
        showGetStarted: true,
        sourceDirs: [path.resolve(__dirname, 'src')],
        siteMetadata: {
          title: 'Forge CLI',
          description: 'Forge SDK Documentation',
          logoUrl: '/handbook/',
          sidebarWidth: 360,
        },
        algoliaSearch: {
          enabled: process.env.NODE_ENV === 'production',
          appId: process.env.GATSBY_ALGOLIA_APP_ID,
          adminKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
          searchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
          indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        },
        navItems: [],
        extraPlugins: [],
      },
    },
    {
      resolve: require.resolve('@arcblock/gatsby-i18n-redirect'),
      options: {
        languages: ['en', 'zh'],
        cookieName: 'nf_lang',
        pathPrefix,
        pathSuffix: '/',
      },
    },
    // Speed up netlify build
    {
      resolve: 'gatsby-plugin-netlify-cache',
      options: {
        cachePublic: true,
      },
    },
  ],
};
