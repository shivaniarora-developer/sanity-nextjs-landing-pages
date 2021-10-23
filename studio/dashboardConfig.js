export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6173f015607d2056a1e8b6d4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gvr9n8cd',
                  apiId: 'b2ecf9d8-e2a8-4420-b942-8ebec7b71616'
                },
                {
                  buildHookId: '6173f016cb90f2679b6967cf',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qudyiv7d',
                  apiId: 'd5b8f2be-7afa-4e13-ac2e-ec74e8f9d150'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shivaniarora-developer/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qudyiv7d.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
