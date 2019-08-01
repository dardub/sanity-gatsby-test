export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d4331a16f5ac52bca6ce928',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-test-studio',
                  apiId: '494cb5bd-71f7-4315-aca6-1cb088ef9712'
                },
                {
                  buildHookId: '5d4331a17ce78325f77beab3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-test',
                  apiId: 'ec9cd88e-b168-40e4-ab5a-e3252f432fcd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robdrosenberg/sanity-gatsby-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-test.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
