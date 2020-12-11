export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5fd37e390b8f6a321d4aadd4',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-3adws75k',
                  apiId: '63bfd838-e0b1-46f0-b993-03e8fa65e843'
                },
                {
                  buildHookId: '5fd37e39bab0b435c570affb',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-dys41kbq',
                  apiId: '0a2525ea-9512-4387-908c-64da7a64efe6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pietvanzoen/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-dys41kbq.netlify.app', category: 'apps'}
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
