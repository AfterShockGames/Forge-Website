/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Unity Forge' ,
  tagline: 'Forge a Unity modding framework.',
  url: 'https://UnityForge.io',
  baseUrl: '/',
  projectName: 'Unity-Forge',
  organizationName: 'AfterShockGames',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'what-is-forge', label: 'Docs'},
    {doc: 'what-is-forge', label: 'API'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'}
  ],

  /* path to images for header/footer */
  headerIcon: 'img/forge.svg',
  footerIcon: 'img/forge.svg',
  favicon: 'img/favicon.ico',

  /* colors for website */
  colors: {
    primaryColor: '#262526',
    secondaryColor: '#7f8084'
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' AfterShockGames',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default'
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  ogImage: 'img/forge.png',
  twitterImage: 'img/forge.png',
  repoUrl: 'https://github.com/AfterShockGames/UnityForge',
};

module.exports = siteConfig;
