module.exports = {
  title: 'OMG Network Guide',
  description: 'A scaling solution for finance on Ethereum',
  base: '/guide/',
  themeConfig: {
    logo: '/logo.png',
    sidebar: {
      '/resources/': [
        'videos',
        'glossary',
        'links',
      ],
      '/': [
        {
          collapsable: false,
          children: [
            'get-started',
            'history',
            'vision',
            'basics',
          ]
        },
        {
          title: 'OMG Network',
          collapsable: false,
          children: [
            'network/',
            'network/adoption',
          ]
        },
        {
          title: 'OMG Community',
          collapsable: false,
          children: [
            'community/omise',
            'community/business-development',
            'community/social-medias',
          ]
        },
      ],
    },
    nav: [
      { text: 'Guide', link: '/get-started' },
      { text: 'Deep Dive', link: '/deep-dive' },
      {
        text: 'Resources',
        items: [
          { text: 'Videos', link: '/resources/videos' },
          { text: 'Glossary', link: '/resources/glossary' },
          { text: 'Links', link: '/resources/links' },
        ]
      },
      { text: 'Contribute', link: '/contribute' },
      { text: 'OMG Staking Pool', link: 'https://omgpool.org' },
    ],
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Help us improve this page!'
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': '.vuepress/assets'
      }
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-4475725-9',
      },
    ],
  ],
}
