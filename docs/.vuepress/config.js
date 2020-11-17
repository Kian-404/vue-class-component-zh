module.exports = {
  title: 'Vue Class Component',
  base: '/vue-class-component/',
  description: 'ECMAScript / TypeScript decorator for class-style Vue components',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: ['@vuepress/back-to-top', '@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: true
  }],

  themeConfig: {
    repo: 'Kian-404/vue-class-component-zh',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们改善此页面!',
    lastUpdated: '最新更新时间',

    nav: [
      {
        text: '指南',
        link: '/'
      },
      {
        text: 'API 参考',
        link: '/api/'
      }
    ],

    sidebar: {
      '/api/': [
        ''
      ],

      '/': [
        '',
        'guide/installation.md',
        {
          title: '通用指南',
          collapsable: false,
          children: [
            'guide/class-component.md',
            'guide/additional-hooks.md',
            'guide/custom-decorators.md',
            'guide/extend-and-mixins.md',
            'guide/caveats.md'
          ]
        },
        {
          title: 'TypeScript 指南',
          collapsable: false,
          children: [
            'guide/props-definition.md',
            'guide/property-type-declaration.md',
            'guide/refs-type-extension.md',
            'guide/hooks-auto-complete.md',
            'guide/annotate-component-type-in-decorator'
          ]
        }
      ]
    }
  }
}