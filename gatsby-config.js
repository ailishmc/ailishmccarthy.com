module.exports = {
  siteMetadata: {
    title: `AILISH MCCARTHY WEB DEVELOPMENT`,
    author: `AILISH MCCARTHY`,
    desc: {
      heading: `Hiya, I’m Ailish`,
      emoji: `👋`,
      pars: [
        {
          text: `I’m a web developer based in Dublin. I
                    have years of experience building super fast and fully accessible
                    web apps. Available now for freelance work.`,
        },
        {
          text: `Get in touch with your project ideas!`,
          url: "mailto:hiya@ailishmccarthy.com",
        },
      ],
    },
    navs: [
      {
        title: "services",
        url: "#services",
      },
      {
        title: "portfolio",
        url: "#portfolio",
      },
      {
        title: "contact",
        url: "mailto:hiya@ailishmccarthy.com",
      },
    ],
    services: [
      {
        title: "Web Design",
        blurb:
          "I’ll collaborate with you to make a stylish looking website with a great user experience.",
      },
      {
        title: "Web Development",
        blurb:
          "I’ll take care of all the technical stuff. I can also mentor you to make handover as smooth and stress-free as possible.",
      },
      {
        title: "Web Accessibility",
        blurb:
          "I have years of experience building websites to an excellent standard so that they can be used by absolutely everyone.",
      },
    ],
    portfolio: [
      {
        title: "ITMA Typesense Federated Search",
        url: "https://ailishmccarthy.notion.site/ITMA-Typesense-Federated-Search-0170821a1da544479eb971882a6e79e4",
        coverUrl:
          "https://ailishmccarthy.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7caf59b0-fef6-4448-be5f-1b1eff0e8576%2FUntitled.png?table=block&id=c2c65ff4-9cfa-413b-89cc-ad423d391e02&spaceId=834c8d0c-b521-46da-94c3-41ea92901618&width=2000&userId=&cache=v2",
      },
      {
        title: "Dan Gilbert Design",
        url: "https://dangilbertdesign.com/",
        coverUrl:
          "https://ailishmccarthy.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff5a3762b-6343-4f21-bca4-79825e573c33%2FUntitled.png?id=ee0299b8-8529-4c82-bf6a-c4cc981d8632&table=block&spaceId=834c8d0c-b521-46da-94c3-41ea92901618&width=2000&userId=&cache=v2",
      },
      {
        title: "Babes on Waves",
        url: "https://babesonwaves.club/",
        coverUrl:
          "https://ailishmccarthy.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb7e89270-23a0-4225-82a8-e53142da9225%2FUntitled.png?id=15e4c436-8a12-467a-bb35-0b265ca72760&table=block&spaceId=834c8d0c-b521-46da-94c3-41ea92901618&width=2000&userId=&cache=v2",
      },
      {
        title: "The Self Love Fitness Club",
        url: "https://www.theselflovefitnessclub.com/",
        coverUrl:
          "https://ailishmccarthy.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F83d09c49-2523-453b-94f4-650ea467d82c%2FUntitled.png?id=db83ef84-d8f2-4204-bfcb-9a587175ebe4&table=block&spaceId=834c8d0c-b521-46da-94c3-41ea92901618&width=2000&userId=&cache=v2",
      },
    ],
    socials: [
      "https://wa.me/message/5GKBXHMF7ZBIH1",
      "https://twitter.com/AilishMcCarthy",
      "https://www.linkedin.com/in/ailishmccarthy/",
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/wave.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-PJMHXH6TE2", // Google Analytics / GA
          //   "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          //   "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // If you need to use Google Optimize for A/B testing, you can add this optional Optimize container id to allow Google Optimize to load the correct test parameters for your site.
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          //   exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "https://www.ailishmccarthy.com",
          // Delays processing pageview events on route update (in milliseconds)
          //   delayOnRouteUpdate: 0,
          //   send_page_view: true,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
