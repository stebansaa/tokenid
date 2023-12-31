export default defineAppConfig({
  docus: {
    title: 'TokenID',
    description: 'Securing Tokens with Off-Chain Metadata.',
    image: 'https://i.ibb.co/jg75w3T/image.png',
    socials: {
      twitter: 'tokenID',
      github: 'stebansaa/tokenid'
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      iconLinks: [
        {
          href: 'https://www.tokenid.dev',
        }
      ]
    }
  }
})