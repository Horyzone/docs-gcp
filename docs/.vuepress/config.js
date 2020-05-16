module.exports = {
  base: '/gcp/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://raw.githubusercontent.com/Horyzone/docs-gcp/master/docs/.vuepress/public/assets/img/favicon.png' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Documentation GCP' }],
    ['meta', { name: 'og:description', content: 'Documentation GCP - Documentation du Gestionnaire de Congés Professionnel.' }],
    ['meta', { name: 'og:image', content: 'https://raw.githubusercontent.com/Horyzone/docs-gcp/master/docs/.vuepress/public/assets/img/logo.png' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: 'Documentation GCP' }],
    ['meta', { name: 'twitter:description', content: 'Documentation GCP - Documentation du Gestionnaire de Congés Professionnel.' }],
    ['meta', { name: 'twitter:image', content: 'https://raw.githubusercontent.com/Horyzone/docs-gcp/master/docs/.vuepress/public/assets/img/logo.png' }],
    ['meta', { name: 'theme-color', content: '#0099ff' }]
  ],
  locales: {
    '/': {
      lang: 'fr',
      title: 'Documentation GCP',
      description: 'Documentation GCP - Documentation du Gestionnaire de Congés Professionnel.',
    }
  },
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/Horyzone/docs-gcp/master/docs/.vuepress/public/assets/img/logo.png',
    repo: 'Horyzone/gcp',
    docsRepo: 'Horyzone/docs-gcp',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': require('./versions/latest')
    },
  },
  plugins: {
    '@vuepress/plugin-back-to-top': true,
    '@vuepress/medium-zoom': true
  }
};
