// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'ytype',
    siteDescription: 'A baseline Gridsome starter to get you going with Bulma.',

    templates: {
        Post: '/blog/:path',
        Tag: '/tag/:id',
        Project: '/project/:path',
    },

    plugins: [{
        use: '@gridsome/source-filesystem',
        options: {
            typeName: 'Post',
            path: 'content/posts/*.md',
            refs: {
                tags: {
                    typeName: 'Tag',
                    create: true,
                },
            },
        },
    },
    {
        use: '@gridsome/source-filesystem',
        options: {
            typeName: 'Project',
            path: 'content/project/*.md',
            refs: {
                tags: {
                    typeName: 'Tag',
                    create: true,
                },
            },
        },
    },
    ],

    transformers: {
    // Add markdown support to all file-system sources
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            anchorClassName: 'icon icon-link',
            plugins: [
                '@gridsome/remark-prismjs',
            ],
        },
    },
}
