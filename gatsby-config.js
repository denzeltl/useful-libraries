module.exports = {
    siteMetadata: {
        title: `Useful Libraries`,
        description: `A collection of libraries that I find useful when creating websites.`,
        author: `@denzeltl`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `./src/data`,
            },
        },
        `gatsby-transformer-json`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
    ],
};
