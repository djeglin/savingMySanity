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
                  buildHookId: '5ff84bd7de8707b3e2d53acf',
                  title: 'Sanity Studio',
                  name: 'savingmysanity-studio',
                  apiId: 'a200252f-568b-4893-b263-ef4853fbaf7f'
                },
                {
                  buildHookId: '5ff84bd7cf1152ca226f32ab',
                  title: 'Blog Website',
                  name: 'savingmysanity',
                  apiId: '00038ba8-8c4d-4e8f-b5f8-7ff5c3568b99'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/djeglin/savingMySanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://savingmysanity.netlify.app', category: 'apps'}
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
