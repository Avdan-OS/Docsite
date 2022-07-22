// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AvdanOS Documentation',
  tagline: 'All the docs of AvdanOS',
  url: 'https://avdanos.github.io/docs',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Avdan-OS', // Usually your GitHub org/user name.
  projectName: 'docsite', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebar/avdanos.js'),
          path: "docs/avdanos"
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'nadva',
        path: 'docs/nadva',
        routeBasePath: 'nadva',
        sidebarPath: require.resolve('./sidebar/nadva.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tinan',
        path: 'docs/tinan',
        routeBasePath: 'tinan',
        sidebarPath: require.resolve('./sidebar/tinan.js'),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'AvdanOS Docs',
        logo: {
          alt: 'Avdan OS Docs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Project AvdanOS',
          },
          {
            to: 'nadva/nadva-intro',
            position: 'left',
            label: 'Nadva',
          },
          {
            to: 'tinan/tinan-overview',
            position: 'left',
            label: 'Tinan',
          },
          {
            href: 'https://github.com/Avdan-OS',
            position: 'right',
            className: 'header-github-link',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: 'https://github.com/Avdan-OS/docsite',
                label: 'Help Us Translate',
              },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: '/docs/intro',
              },
              {
                label: 'Nadva',
                to: '/nadva/nadva-intro',
              },
              {
                label: 'Tinan',
                to: '/tinan/tinan-overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/avdanos',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCHLCBj83J7bR82HwjhCJusA',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/avdan_os',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/avdanos_/',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/AvdanOS/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   href: '/blog',
              // },
              {
                label: 'Our Website',
                href: 'https://avdanos.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Avdan-OS/',
              },
              {
                label: 'Download',
                href: 'https://avdanos.com/downloads',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Avdan OS Community. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
