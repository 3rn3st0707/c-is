// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion



/** @type {import('@docusaurus/types').Config} */
const config = {
  
  title: 'La Nueva Diletancia',
  tagline: 'La Guía',
  favicon: '/img/bookshelf.jpg',

  // Set the production url of your site here
  url: 'https://guia-diletante.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'La Nueva Diletancia', // Usually your GitHub org/user name.
  projectName: 'La Nueva Diletancia', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

 
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'textosII',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'textosII',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './textosII',

        showReadingTime: false,
        blogSidebarTitle: 'Textos II',
        blogSidebarCount: 'ALL',
      },
    ],

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'textosI',
        path: 'textosI',
        routeBasePath: 'textosI',
        sidebarPath: './sidebarsTextos.js',
        breadcrumbs: false,
        // ... other options
      },
    ],

  ],

  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: false,
          routeBasePath: '/'
        },

        gtag: {
          trackingID: 'G-4TBE55217V',
          anonymizeIP: true,
        },

        blog: {
          showReadingTime: false,
          blogSidebarTitle: 'Blog',
          blogSidebarCount: 'ALL',

        },


        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],



  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },


      // Replace with your project's social card
      image: '/img/bookshelf.jpg',
      navbar: {
        title: 'La Nueva Diletancia',

        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'La Guía',
          },

          {to: '/textosI', label: 'Textos I', position: 'right'},
          {to: '/textosII/guerra', label: 'Textos II', position: 'right'},

        ],
      },
      footer: {
        style: 'dark',
        links: [

 
          {

            items: [

              {
                html: `

                `,
              },
            ],
          },          
        ],
        
      },

    }),
};

module.exports = config;
