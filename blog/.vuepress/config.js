module.exports = {
  // base: '/',
  title: 'pixwind',
  description: '时光缩略成照片，有风吹过，明天仍是崭新的',
  head: [/* */],
  themeConfig: {
    search: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/pix/' },
      { text: 'Resume', link: '/resume/' },
      // {
      //   text: 'Blog',
      //   items: [
      //     { text: 'Pix', link: '/blog/pix/' },
      //     { text: 'Wind', link: '/blog/wind/' }
      //   ]
      // },
      { text: 'External', link: 'https://google.com' },
    ],

    sidebar: [
      {
        title: 'Pix',
        collapsable: false,
        children: [
          '/blog/pix/',
          '/blog/pix/时光缩略成照片',
        ]
      },
      {
        title: 'Wind',
        collapsable: false,
        children: [
          '/blog/wind/',
        ]
      }
    ],
  }
}
